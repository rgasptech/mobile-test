package br.com.victorpettengill.rgacodechallenge.core.services;

/**
 * Created by victorfernandes on 28/05/18.
 */

import java.io.IOException;
import java.util.List;

import br.com.victorpettengill.rgacodechallenge.core.beans.Contact;
import br.com.victorpettengill.rgacodechallenge.core.network.NetworkClient;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.http.GET;

/**
 * Class made to sync data for the first time based on the following json
 * https://s3-sa-east-1.amazonaws.com/rgasp-mobile-test/v1/content.json
 */

public class SyncService {

    private static SyncService instance;

    public static SyncService getInstance() {

        if(instance == null) {
            instance = new SyncService();
        }

        return instance;
    }

    public List<Contact> getContactsFromWebService() throws IOException {

        ContactService service = NetworkClient.getRetrofitClient().create(ContactService.class);

        return service.getContacts().execute().body();
    }

    interface ContactService {

        @GET("/rgasp-mobile-test/v1/content.json")
        Call<List<Contact>> getContacts();

    }

}