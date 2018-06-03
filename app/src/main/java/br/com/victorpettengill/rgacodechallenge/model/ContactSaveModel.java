package br.com.victorpettengill.rgacodechallenge.model;

import android.app.Application;

import java.util.Date;

import br.com.victorpettengill.rgacodechallenge.core.beans.Contact;

/**
 * Created by victorfernandes on 29/05/18.
 */

public interface ContactSaveModel {

    public void addContact(Application application, String name, String email, Date born, String bio, String photo);
    public void updateContact(Application application, Contact contact);

}