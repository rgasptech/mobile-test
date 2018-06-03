package br.com.victorpettengill.rgacodechallenge.presenter;

import android.app.Application;
import android.os.Bundle;

import java.util.List;

import br.com.victorpettengill.rgacodechallenge.core.beans.Contact;
import br.com.victorpettengill.rgacodechallenge.view.ContactsView;

/**
 * Created by victorfernandes on 29/05/18.
 */

public interface ContactPresenter {

    void retrieveContacts(Bundle bundleSavedInstance);
    Application getApplication();
    void showLoading(boolean state);
    void setView(ContactsView view);
    void addContact(Contact contact);
    void removeContact(int position);
    void updateContacts(List<Contact> contacts);
    List<Contact> getContacts();

}