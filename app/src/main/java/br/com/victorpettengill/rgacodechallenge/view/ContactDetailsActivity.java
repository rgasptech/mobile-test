package br.com.victorpettengill.rgacodechallenge.view;

import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.MenuItem;
import android.widget.ImageView;
import android.widget.TextView;

import com.squareup.picasso.Callback;
import com.squareup.picasso.Picasso;

import br.com.victorpettengill.rgacodechallenge.R;
import br.com.victorpettengill.rgacodechallenge.core.beans.Contact;
import br.com.victorpettengill.rgacodechallenge.presenter.ContactDetailsPresenter;
import br.com.victorpettengill.rgacodechallenge.presenter.ContactDetailsPresenterImpl;
import br.com.victorpettengill.rgacodechallenge.utils.CircleTransform;
import br.com.victorpettengill.rgacodechallenge.utils.Utils;
import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;

public class ContactDetailsActivity extends AppCompatActivity implements ContactDetailsView {

    @BindView(R.id.toolbar) Toolbar toolbar;
    @BindView(R.id.image) ImageView image;
    @BindView(R.id.contact_name) TextView contactName;
    @BindView(R.id.contact_email) TextView contactEmail;
    @BindView(R.id.contact_born) TextView contactBorn;
    @BindView(R.id.contact_bio) TextView contactBio;

    private final int EDIT_REQUEST_CODE = 9;

    private static ContactDetailsPresenter presenter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_contact_details);

        supportPostponeEnterTransition();

        ButterKnife.bind(this);

        setSupportActionBar(toolbar);

        getSupportActionBar().setDisplayHomeAsUpEnabled(true);

        if(presenter == null) {
            presenter = new ContactDetailsPresenterImpl();
        }

        presenter.setView(this);
        presenter.retrieveContact(getIntent().getExtras(), savedInstanceState);

    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {

        finish();

        return super.onOptionsItemSelected(item);
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        outState.putParcelable(CONTACT_BUNDLE, presenter.getContact());
        super.onSaveInstanceState(outState);
    }

    @OnClick(R.id.edit) void onEditClicked() {

        Intent i = new Intent(ContactDetailsActivity.this, ContactSaveActivity.class);
        i.putExtra(ContactsSaveView.CONTACT_BUNDLE, presenter.getContact());
        startActivityForResult(i, EDIT_REQUEST_CODE);

    }

    @Override
    public void showContactDetails(Contact contact) {

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            image.setTransitionName(String.valueOf(contact.getId()));
        }

        if(contact.getPhoto() != null) {

            Picasso.get().load(contact.getPhoto())
                    .fit()
                    .centerCrop()
                    .transform(new CircleTransform())
                    .placeholder(R.drawable.ic_user_placeholder_big)
                    .into(image, new Callback() {
                        @Override
                        public void onSuccess() {

                            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                                startPostponedEnterTransition();
                            }

                        }

                        @Override
                        public void onError(Exception e) {

                            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                                startPostponedEnterTransition();
                            }

                        }
                    });

        } else {

            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                startPostponedEnterTransition();
            }

        }

        contactName.setText(contact.getName());
        contactEmail.setText(contact.getEmail());
        contactBorn.setText(Utils.getFormattedDate(contact.getBorn()));
        contactBio.setText(contact.getBio());
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if(requestCode == EDIT_REQUEST_CODE && resultCode == RESULT_OK) {

            presenter.retrieveContact(data.getExtras(), null);

        }

    }
}
