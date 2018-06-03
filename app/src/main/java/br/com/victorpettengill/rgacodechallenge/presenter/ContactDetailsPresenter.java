package br.com.victorpettengill.rgacodechallenge.presenter;

import android.os.Bundle;

import br.com.victorpettengill.rgacodechallenge.core.beans.Contact;
import br.com.victorpettengill.rgacodechallenge.view.ContactDetailsView;

/**
 * Created by victorfernandes on 02/06/18.
 */

public interface ContactDetailsPresenter {

    void retrieveContact(Bundle extras, Bundle savedInstanceState);
    Contact getContact();
    void setView(ContactDetailsView view);

}