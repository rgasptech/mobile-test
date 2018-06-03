package br.com.victorpettengill.rgacodechallenge.core.dao;

import android.app.Application;

import java.util.Date;
import java.util.List;

import br.com.victorpettengill.rgacodechallenge.core.beans.Contact;
import br.com.victorpettengill.rgacodechallenge.core.beans.Contact_;
import br.com.victorpettengill.rgacodechallenge.core.beans.MyObjectBox;
import io.objectbox.Box;
import io.objectbox.BoxStore;
import io.objectbox.android.AndroidObjectBrowser;

/**
 * Created by victorfernandes on 26/05/18.
 */

public class ContactDao {

    private static ContactDao instance;
    private Box<Contact> contactBox;
    private BoxStore boxStore;

    public static ContactDao getInstance(Application application) {

        if (instance == null) {
            instance = new ContactDao(application);
        }

        return instance;
    }

    private ContactDao(Application application) {

        boxStore = MyObjectBox.builder().androidContext(application).build();
        contactBox = boxStore.boxFor(Contact.class);

    }

    public List<Contact> getContacts() {

        return contactBox.query().order(Contact_.name).build().find();
    }

    public Contact addContact(String name, String email, Date born, String bio, String photo) {

        Contact contact = new Contact(name, email, born, bio, photo);

        contactBox.put(contact);

        return contact;
    }

    public void removeContact(Contact contact) {

        contactBox.remove(contact);

    }

    public Contact updateContact(Contact contact) {

        contactBox.put(contact);

        return contact;
    }

    public List<Contact> addContacts(List<Contact> contacts) {

        contactBox.put(contacts);

        return contacts;
    }




}