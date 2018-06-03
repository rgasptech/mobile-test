package br.com.victorpettengill.rgacodechallenge.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import br.com.victorpettengill.rgacodechallenge.constants.Constants;

/**
 * Created by victorfernandes on 02/06/18.
 */

public class Utils {

    public static String getFormattedDate(Date date) {

        SimpleDateFormat sdf = new SimpleDateFormat(Constants.DATE_FORMAT, Locale.getDefault());

        return sdf.format(date);
    }

    public static Date getDateFromString(String date) {

        SimpleDateFormat sdf = new SimpleDateFormat(Constants.DATE_FORMAT, Locale.getDefault());

        try {
            return sdf.parse(date);
        } catch (ParseException e) {
            e.printStackTrace();
            return null;
        }

    }

}