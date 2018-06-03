package br.com.victorpettengill.rgacodechallenge.model;

import android.app.Application;

import java.util.Date;
import java.util.List;

import br.com.victorpettengill.rgacodechallenge.core.beans.Contact;
import br.com.victorpettengill.rgacodechallenge.core.bo.ContactBO;
import br.com.victorpettengill.rgacodechallenge.presenter.ContactPresenter;
import io.reactivex.Observable;
import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.observers.DisposableObserver;
import io.reactivex.schedulers.Schedulers;

/**
 * Created by victorfernandes on 29/05/18.
 */

public class ContactListModelImpl implements ContactListModel {

    private ContactPresenter presenter;

    public ContactListModelImpl(ContactPresenter presenter) {
        this.presenter = presenter;
    }

    @Override
    public void getContacts(Application application) {

        presenter.showLoading(true);

        ContactBO.getInstance().getContacts(application)
                .subscribeOn(Schedulers.newThread())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribeWith(new DisposableObserver<List<Contact>>() {
                    @Override
                    public void onNext(List<Contact> contacts) {

                        presenter.updateContacts(contacts);
                        presenter.showLoading(false);

                    }

                    @Override
                    public void onError(Throwable e) {

                    }

                    @Override
                    public void onComplete() {

                    }
                });

     }

    @Override
    public void removeContact(Application application, Contact contact) {
        ContactBO.getInstance().removeContact(application, contact);
    }

}
