package br.com.victorpettengill.rgacodechallenge.view;

import android.content.Intent;
import android.os.Bundle;
import android.support.constraint.Group;
import android.support.design.widget.TextInputEditText;
import android.support.design.widget.TextInputLayout;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.MenuItem;
import android.view.View;
import android.widget.ProgressBar;

import java.util.Date;
import java.util.HashMap;

import br.com.victorpettengill.rgacodechallenge.R;
import br.com.victorpettengill.rgacodechallenge.core.beans.Contact;
import br.com.victorpettengill.rgacodechallenge.presenter.ContactSavePresenter;
import br.com.victorpettengill.rgacodechallenge.presenter.ContactSavePresenterImpl;
import br.com.victorpettengill.rgacodechallenge.utils.Mask;
import br.com.victorpettengill.rgacodechallenge.utils.Utils;
import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;

public class ContactSaveActivity extends AppCompatActivity implements ContactsSaveView{

    @BindView(R.id.toolbar) Toolbar toolbar;
    @BindView(R.id.container) Group container;
    @BindView(R.id.progress) ProgressBar progress;
    @BindView(R.id.contact_name) TextInputEditText contactName;
    @BindView(R.id.contact_name_layout) TextInputLayout contactNameLayout;
    @BindView(R.id.contact_email) TextInputEditText contactEmail;
    @BindView(R.id.contact_email_layout) TextInputLayout contactEmailLayout;
    @BindView(R.id.contact_date) TextInputEditText contactDate;
    @BindView(R.id.contact_bio_layout) TextInputLayout contactDateLayout;
    @BindView(R.id.contact_bio) TextInputEditText contactBio;

    private static ContactSavePresenter presenter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_contact_save);

        ButterKnife.bind(this);
        setSupportActionBar(toolbar);

        getSupportActionBar().setDisplayHomeAsUpEnabled(true);

        if(presenter == null) {
            presenter = new ContactSavePresenterImpl();
        }

        presenter.setView(this);
        presenter.retrieveContact(getIntent().getExtras(), savedInstanceState);

        contactDate.addTextChangedListener(Mask.insert("##/##/####", contactDate));

    }

    @OnClick(R.id.save) void onSaveClicked() {

        presenter.saveContact(
                contactName.getText().toString(),
                contactEmail.getText().toString(),
                contactDate.getText().toString(),
                contactBio.getText().toString()
        );

    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {

        finish();

        return super.onOptionsItemSelected(item);
    }

    @Override
    public void showLoading(boolean show) {

        progress.setVisibility(show ? View.VISIBLE : View.GONE);
        container.setVisibility(show ? View.GONE : View.VISIBLE);

    }

    @Override
    public void showErrors(HashMap<String, String> errors) {

        if(errors.containsKey("name")) {
            contactNameLayout.setError(errors.get("name"));
        }

        if(errors.containsKey("email")) {
            contactEmailLayout.setError(errors.get("email"));
        }

        if(errors.containsKey("date")) {
            contactDateLayout.setError(errors.get("date"));
        }

    }

    @Override
    public void onContactSaved(Contact contact) {

        Intent i = new Intent();
        i.putExtra(CONTACT_BUNDLE, contact);
        setResult(RESULT_OK, i);
        finish();

    }

    @Override
    public void showContactData(Contact contact) {

        contactName.setText(contact.getName());
        contactEmail.setText(contact.getEmail());
        contactDate.setText(Utils.getFormattedDate(contact.getBorn()));
        contactBio.setText(contact.getBio());

    }
}
