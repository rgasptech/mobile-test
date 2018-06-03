package br.com.victorpettengill.rgacodechallenge.model;

import android.app.Application;

import java.util.Date;
import java.util.List;

import br.com.victorpettengill.rgacodechallenge.core.beans.Contact;
import br.com.victorpettengill.rgacodechallenge.core.bo.ContactBO;
import br.com.victorpettengill.rgacodechallenge.presenter.ContactSavePresenter;
import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.observers.DisposableObserver;
import io.reactivex.schedulers.Schedulers;

/**
 * Created by victorfernandes on 29/05/18.
 */

public class ContactSaveModelImpl implements ContactSaveModel{

    private ContactSavePresenter presenter;

    public ContactSaveModelImpl(ContactSavePresenter presenter) {
        this.presenter = presenter;
    }

    @Override
    public void addContact(Application application, String name, String email, Date born, String bio, String photo) {

        presenter.showLoading(true);

        ContactBO.getInstance().addContact(application, name, email, born, bio, photo)
                .subscribeOn(Schedulers.newThread())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribeWith(new DisposableObserver<Contact>() {
                    @Override
                    public void onNext(Contact contact) {

                        presenter.showLoading(false);
                        presenter.onContactSaved(contact);

                    }

                    @Override
                    public void onError(Throwable e) {

                        presenter.showLoading(false);

                    }

                    @Override
                    public void onComplete() {

                        presenter.showLoading(false);

                    }
                });

    }

    @Override
    public void updateContact(Application application, Contact contact) {

        presenter.showLoading(true);

        ContactBO.getInstance().updateContact(application, contact)
                .subscribeOn(Schedulers.newThread())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribeWith(new DisposableObserver<Contact>() {
                    @Override
                    public void onNext(Contact contact) {

                        presenter.showLoading(false);
                        presenter.onContactSaved(contact);

                    }

                    @Override
                    public void onError(Throwable e) {

                        presenter.showLoading(false);

                    }

                    @Override
                    public void onComplete() {

                        presenter.showLoading(false);

                    }
                });

    }

}