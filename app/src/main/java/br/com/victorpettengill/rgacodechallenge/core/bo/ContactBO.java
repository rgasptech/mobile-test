package br.com.victorpettengill.rgacodechallenge.core.bo;

import android.app.Application;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.concurrent.Callable;

import br.com.victorpettengill.rgacodechallenge.core.beans.Contact;
import br.com.victorpettengill.rgacodechallenge.config.Config;
import br.com.victorpettengill.rgacodechallenge.core.dao.ContactDao;
import br.com.victorpettengill.rgacodechallenge.core.services.SyncService;
import io.reactivex.Observable;
import io.reactivex.ObservableSource;

/**
 * Created by victorfernandes on 28/05/18.
 */

public class ContactBO {

    private static ContactBO bo;

    public static ContactBO getInstance() {

        if(bo == null) {
            bo = new ContactBO();
        }

        return bo;
    }

    public Observable getContacts(final Application application) {

        return Observable.defer(new Callable<ObservableSource<?>>() {
            @Override
            public ObservableSource<?> call() throws Exception {

                ContactDao dao = ContactDao.getInstance(application);

                List<Contact> contacts = null;
                
                if(Config.isSynced(application)) {
                    contacts = dao.getContacts();
                } else {

                    try {
                        contacts = SyncService.getInstance().getContactsFromWebService();
                        contacts = dao.addContacts(contacts);

                        Config.setSynced(application, true);

                    } catch (IOException e) {
                        e.printStackTrace();
                    }

                }
                
                return Observable.just(contacts);
            }
        });


    }

    public Observable addContact(final Application application, final String name, final String email, final Date born, final String bio, final String photo) {

        return Observable.defer(new Callable<ObservableSource<?>>() {
            @Override
            public ObservableSource<?> call() throws Exception {
                return Observable.just(ContactDao.getInstance(application).addContact(name, email, born, bio, photo));
            }
        });

    }

    public void removeContact(Application application, Contact contact) {

        ContactDao.getInstance(application).removeContact(contact);

    }

    public Observable updateContact(final Application application, final Contact contact) {

        return Observable.defer(new Callable<ObservableSource<?>>() {
            @Override
            public ObservableSource<?> call() throws Exception {
                return Observable.just(ContactDao.getInstance(application).updateContact(contact));
            }
        });


    }

}