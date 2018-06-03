package br.com.victorpettengill.rgacodechallenge.view;

import br.com.victorpettengill.rgacodechallenge.core.beans.Contact;

/**
 * Created by victorfernandes on 02/06/18.
 */

public interface ContactDetailsView {

    String CONTACT_BUNDLE = "contact";

    void showContactDetails(Contact contact);

}