package br.com.victorpettengill.rgacodechallenge.config;

import android.app.Application;
import android.content.Context;
import android.content.SharedPreferences;

/**
 * Created by victorfernandes on 28/05/18.
 */

public class Config {

    private static final String SYNC_FIELD = "synced";

    public static boolean isSynced(Context context) {

        SharedPreferences preferences = context.getSharedPreferences("synced", Context.MODE_PRIVATE);

        return preferences.getBoolean(SYNC_FIELD, false);
    }

    public static void setSynced(Context context,boolean synced) {

        SharedPreferences preferences = context.getSharedPreferences("synced", Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = preferences.edit();

        editor.putBoolean(SYNC_FIELD, synced);
        editor.apply();
    }

}