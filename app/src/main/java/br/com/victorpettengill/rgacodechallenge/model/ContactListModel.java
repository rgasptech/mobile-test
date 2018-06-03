package br.com.victorpettengill.rgacodechallenge.model;

import android.app.Application;

import java.util.Date;

import br.com.victorpettengill.rgacodechallenge.core.beans.Contact;

/**
 * Created by victorfernandes on 28/05/18.
 */

public interface ContactListModel {

    public void getContacts(Application application);
    public void removeContact(Application application, Contact contact);

}