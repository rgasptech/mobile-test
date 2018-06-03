package br.com.victorpettengill.rgacodechallenge.view;

import android.app.Application;

/**
 * Created by victorfernandes on 29/05/18.
 */

public interface ContactsView {

    String CONTACTS_KEY = "contacts";

    void showLoading(int visibility);
    void showMessage(String message);
    void updateAdapter();
    void itemAddedAtIndex(int position);
    void itemRemovedAtIndex(int position);
    Application getApplication();

}
