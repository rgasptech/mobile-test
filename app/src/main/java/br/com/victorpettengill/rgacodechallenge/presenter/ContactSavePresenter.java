package br.com.victorpettengill.rgacodechallenge.presenter;

import android.app.Application;
import android.os.Bundle;

import java.util.Date;
import java.util.HashMap;

import br.com.victorpettengill.rgacodechallenge.core.beans.Contact;
import br.com.victorpettengill.rgacodechallenge.view.ContactsSaveView;

/**
 * Created by victorfernandes on 29/05/18.
 */

public interface ContactSavePresenter {

    void retrieveContact(Bundle extras, Bundle bundleSavedInstance);
    Application getApplication();
    void showLoading(boolean state);
    void onContactSaved(Contact contact);
    void setView(ContactsSaveView view);
    void saveContact(String name, String email, String date, String bio);

}