package br.com.victorpettengill.rgacodechallenge.core.network;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import br.com.victorpettengill.rgacodechallenge.constants.Constants;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

/**
 * Created by victorfernandes on 26/05/18.
 */

public class NetworkClient {

    private static Retrofit retrofit;

    public static Retrofit getRetrofitClient() {

        if(retrofit == null) {

            Gson gson = new GsonBuilder()
                    .setDateFormat(Constants.DATE_FORMAT)
                    .create();

            retrofit = new Retrofit.Builder()
                    .baseUrl("https://s3-sa-east-1.amazonaws.com/")
                    .addConverterFactory(GsonConverterFactory.create(gson))
                    .build();


        }

        return retrofit;
    }

}