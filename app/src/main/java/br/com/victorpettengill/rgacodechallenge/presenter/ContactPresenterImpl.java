package br.com.victorpettengill.rgacodechallenge.presenter;

import android.app.Application;
import android.os.Bundle;
import android.view.View;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import br.com.victorpettengill.rgacodechallenge.core.beans.Contact;
import br.com.victorpettengill.rgacodechallenge.model.ContactListModel;
import br.com.victorpettengill.rgacodechallenge.model.ContactListModelImpl;
import br.com.victorpettengill.rgacodechallenge.view.ContactsView;

/**
 * Created by victorfernandes on 29/05/18.
 */

public class ContactPresenterImpl implements ContactPresenter {

    private ContactListModel model;
    private ContactsView contactsView;
    private Contact tempContact;
    private List<Contact> contacts = new ArrayList<>();

    public ContactPresenterImpl() {
        model = new ContactListModelImpl(this);
    }

    @Override
    public void retrieveContacts(Bundle savedInstanceState) {

        if(savedInstanceState != null ){
            contacts = savedInstanceState.getParcelableArrayList( ContactsView.CONTACTS_KEY );
            return;
        }

        model.getContacts(getApplication());

    }

    @Override
    public Application getApplication() {
        return contactsView.getApplication();
    }

    @Override
    public void showLoading(boolean state) {

        int visibility = state ? View.VISIBLE : View.GONE;
        contactsView.showLoading(visibility);

    }

    @Override
    public void removeContact(int position) {

        this.tempContact = contacts.get(position);
        model.removeContact(getApplication(), tempContact);

        this.contacts.remove(position);
        contactsView.itemRemovedAtIndex(position);

        contactsView.showMessage("Contact removed successfully!");
    }

    @Override
    public void setView(ContactsView view) {
        this.contactsView = view;
    }

    @Override
    public void addContact(Contact contact) {

        this.contacts.add(contact);

        Collections.sort(this.contacts);

        int position = this.contacts.indexOf(contact);

        this.contactsView.itemAddedAtIndex(position);

    }

    @Override
    public void updateContacts(List<Contact> contacts) {

        this.contacts.clear();
        this.contacts.addAll(contacts);
        this.contactsView.updateAdapter();

    }



    @Override
    public List<Contact> getContacts() {
        return this.contacts;
    }

}
