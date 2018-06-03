package br.com.victorpettengill.rgacodechallenge.view;

import android.app.ActivityOptions;
import android.content.Intent;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.os.Parcelable;
import android.support.design.widget.CoordinatorLayout;
import android.support.design.widget.Snackbar;
import android.support.v4.app.ActivityOptionsCompat;
import android.support.v4.content.ContextCompat;
import android.support.v4.view.ViewCompat;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.DividerItemDecoration;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.support.v7.widget.Toolbar;
import android.support.v7.widget.helper.ItemTouchHelper;
import android.view.View;
import android.widget.ProgressBar;

import java.util.ArrayList;

import br.com.victorpettengill.rgacodechallenge.R;
import br.com.victorpettengill.rgacodechallenge.adapter.ContactAdapter;
import br.com.victorpettengill.rgacodechallenge.core.beans.Contact;
import br.com.victorpettengill.rgacodechallenge.presenter.ContactPresenter;
import br.com.victorpettengill.rgacodechallenge.presenter.ContactPresenterImpl;
import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;

public class ContactListActivity extends AppCompatActivity implements ContactsView{

    @BindView(R.id.coordinator) CoordinatorLayout coordinator;
    @BindView(R.id.toolbar) Toolbar toolbar;
    @BindView(R.id.recycler) RecyclerView recycler;
    @BindView(R.id.loading) ProgressBar loading;
    private ContactAdapter adapter;
    private static ContactPresenter presenter;

    private final int ADD_CONTACT_CODE = 7;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_contact_list);

        ButterKnife.bind(this);
        setSupportActionBar(toolbar);

        if(presenter == null) {
            presenter = new ContactPresenterImpl();
        }

        recycler.setLayoutManager(new LinearLayoutManager(ContactListActivity.this, LinearLayoutManager.VERTICAL, false));
        recycler.addItemDecoration(new DividerItemDecoration(this, DividerItemDecoration.VERTICAL));

        adapter = new ContactAdapter(presenter.getContacts(), onContactClickedListener);
        recycler.setAdapter(adapter);

        presenter.setView(this);
        presenter.retrieveContacts(savedInstanceState);


        ItemTouchHelper itemTouchHelper = new ItemTouchHelper(simpleItemTouchCallback);
        itemTouchHelper.attachToRecyclerView(recycler);

    }

    @Override
    protected void onStart() {
        super.onStart();

    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        outState.putParcelableArrayList(CONTACTS_KEY, (ArrayList<? extends Parcelable>) presenter.getContacts());
        super.onSaveInstanceState(outState);
    }

    @Override
    protected void onResume() {
        super.onResume();

        if(presenter != null) {
            presenter.retrieveContacts(null);
        }
    }

    @OnClick(R.id.add_contact) void addContactClicked() {

        startActivityForResult(
                new Intent(ContactListActivity.this, ContactSaveActivity.class),
                ADD_CONTACT_CODE);

    }

    @Override
    public void showLoading(int visibility) {

        loading.setVisibility(visibility);

    }

    @Override
    public void showMessage(String message) {

        Snackbar.make(coordinator, message, Snackbar.LENGTH_LONG).show();

    }

    @Override
    public void updateAdapter() {
        adapter.notifyDataSetChanged();
    }

    @Override
    public void itemAddedAtIndex(int position) {
        adapter.notifyItemInserted(position);
    }

    @Override
    public void itemRemovedAtIndex(int position) {
        adapter.notifyItemRemoved(position);
    }

    private ContactAdapter.OnContactClickedListener onContactClickedListener = new ContactAdapter.OnContactClickedListener() {

        @Override
        public void onContactClicked(Contact contact, View transitionView) {

            ActivityOptionsCompat activityOptions = ActivityOptionsCompat
                    .makeSceneTransitionAnimation(
                            ContactListActivity.this,
            transitionView,
                    ViewCompat.getTransitionName(transitionView));

            Intent i = new Intent(ContactListActivity.this, ContactDetailsActivity.class);
            i.putExtra(ContactDetailsView.CONTACT_BUNDLE, contact);
            startActivity(i, activityOptions.toBundle());

        }

    };

    private ItemTouchHelper.SimpleCallback simpleItemTouchCallback = new ItemTouchHelper.SimpleCallback(0, ItemTouchHelper.LEFT) {

        Drawable deleteIcon;
        Drawable background;
        private boolean initiated;

        private void init() {
            background = new ColorDrawable(Color.RED);
            deleteIcon = ContextCompat.getDrawable(ContactListActivity.this, R.drawable.ic_delete);
            initiated = true;
        }

        @Override
        public boolean onMove(RecyclerView recyclerView, RecyclerView.ViewHolder viewHolder, RecyclerView.ViewHolder target) {
            return false;
        }

        @Override
        public void onSwiped(RecyclerView.ViewHolder viewHolder, int swipeDir) {

            int position = viewHolder.getAdapterPosition();
            presenter.removeContact(position);

        }

        @Override
        public void onChildDraw(Canvas c, RecyclerView recyclerView, RecyclerView.ViewHolder viewHolder, float dX, float dY, int actionState, boolean isCurrentlyActive) {

            View itemView = viewHolder.itemView;

            if(!initiated) {
                init();
            }

            if(dX == 0 && !isCurrentlyActive) {
                return;
            }

            background.setBounds(itemView.getRight() + (int) dX, itemView.getTop(), itemView.getRight(), itemView.getBottom());
            background.draw(c);

            int itemHeight = itemView.getBottom() - itemView.getTop();
            int width = deleteIcon.getIntrinsicWidth();
            int height = deleteIcon.getIntrinsicWidth();

            int deleteIconLeft = itemView.getRight() - 16 - width;
            int deleteIconRight = itemView.getRight() - 16;
            int deleteIconTop = itemView.getTop() + (itemHeight - height)/2;
            int deleteIconBottom = deleteIconTop + height;
            deleteIcon.setBounds(deleteIconLeft, deleteIconTop, deleteIconRight, deleteIconBottom);

            deleteIcon.draw(c);

            super.onChildDraw(c, recyclerView, viewHolder, dX, dY, actionState, isCurrentlyActive);

        }

    };

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if(requestCode == ADD_CONTACT_CODE) {

            if(resultCode == RESULT_OK) {

                presenter.addContact((Contact) data.getParcelableExtra(ContactsSaveView.CONTACT_BUNDLE));

            }

        }

    }

}
