package br.com.victorpettengill.rgacodechallenge.presenter;

import android.os.Bundle;
import android.util.Log;

import br.com.victorpettengill.rgacodechallenge.core.beans.Contact;
import br.com.victorpettengill.rgacodechallenge.view.ContactDetailsView;

/**
 * Created by victorfernandes on 02/06/18.
 */

public class ContactDetailsPresenterImpl implements ContactDetailsPresenter {

    private ContactDetailsView view;
    private Contact contact;

    @Override
    public void retrieveContact(Bundle extras, Bundle savedInstanceState) {

        if(savedInstanceState != null && savedInstanceState.containsKey(ContactDetailsView.CONTACT_BUNDLE)) {
            contact = savedInstanceState.getParcelable(ContactDetailsView.CONTACT_BUNDLE);
            view.showContactDetails(contact);
            return;
        }

        if(extras.containsKey(ContactDetailsView.CONTACT_BUNDLE)) {
            contact = extras.getParcelable(ContactDetailsView.CONTACT_BUNDLE);
            view.showContactDetails(contact);
        }

    }

    @Override
    public Contact getContact() {
        return contact;
    }

    @Override
    public void setView(ContactDetailsView view) {
        this.view = view;
    }

}
