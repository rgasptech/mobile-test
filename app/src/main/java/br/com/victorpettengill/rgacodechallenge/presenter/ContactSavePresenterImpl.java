package br.com.victorpettengill.rgacodechallenge.presenter;

import android.app.Application;
import android.os.Bundle;
import android.util.Patterns;

import java.util.Date;
import java.util.HashMap;

import br.com.victorpettengill.rgacodechallenge.core.beans.Contact;
import br.com.victorpettengill.rgacodechallenge.model.ContactSaveModel;
import br.com.victorpettengill.rgacodechallenge.model.ContactSaveModelImpl;
import br.com.victorpettengill.rgacodechallenge.utils.Utils;
import br.com.victorpettengill.rgacodechallenge.view.ContactsSaveView;

/**
 * Created by victorfernandes on 29/05/18.
 */

public class ContactSavePresenterImpl implements ContactSavePresenter {

    private ContactSaveModel model;
    private Contact contact;
    private ContactsSaveView view;

    public ContactSavePresenterImpl() {
        model = new ContactSaveModelImpl(this);
    }

    @Override
    public void retrieveContact(Bundle extras, Bundle bundleSavedInstance) {

        if(bundleSavedInstance != null && bundleSavedInstance.containsKey(ContactsSaveView.CONTACT_BUNDLE)) {
            contact = bundleSavedInstance.getParcelable(ContactsSaveView.CONTACT_BUNDLE);
            view.showContactData(contact);
            return;
        }

        if(extras.containsKey(ContactsSaveView.CONTACT_BUNDLE)) {
            contact = extras.getParcelable(ContactsSaveView.CONTACT_BUNDLE);
            view.showContactData(contact);
        }

    }

    @Override
    public Application getApplication() {
        return null;
    }

    @Override
    public void showLoading(boolean state) {
        view.showLoading(state);
    }

    @Override
    public void onContactSaved(Contact contact) {
        view.onContactSaved(contact);
    }

    @Override
    public void setView(ContactsSaveView view) {
        this.view = view;
    }

    //TODO Implement contact photo
    @Override
    public void saveContact(String name, String email, String date, String bio) {

        HashMap<String, String> errors = new HashMap<>();

        if(name.equals("")) {
            errors.put("name", "Name must not be empty");
        }

        if(!Patterns.EMAIL_ADDRESS.matcher(email).matches()) {
            errors.put("email", "Type a valid e-mail");

        }

        if(date.equals("") && Utils.getDateFromString(date) == null) {
            errors.put("date", "Select a valid date");
        }

        if(errors.size() > 0) {

            view.showErrors(errors);
            return;
        }

        if(contact == null) {
            model.addContact(getApplication(), name, email, Utils.getDateFromString(date), bio, null);
        } else {

            contact.setName(name);
            contact.setEmail(email);
            contact.setBorn(Utils.getDateFromString(date));
            contact.setBio(bio);

            model.updateContact(getApplication(), contact);
        }

    }

}
