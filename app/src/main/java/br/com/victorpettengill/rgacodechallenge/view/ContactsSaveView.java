package br.com.victorpettengill.rgacodechallenge.view;

import java.util.HashMap;

import br.com.victorpettengill.rgacodechallenge.core.beans.Contact;

/**
 * Created by victorfernandes on 29/05/18.
 */

public interface ContactsSaveView {

    String CONTACT_BUNDLE = "contact";

    void showLoading(boolean show);
    void showErrors(HashMap<String, String> errors);
    void onContactSaved(Contact contact);
    void showContactData(Contact contact);

}