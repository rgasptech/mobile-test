package br.com.victorpettengill.rgacodechallenge.core.beans;

import android.os.Parcel;
import android.os.Parcelable;
import android.support.annotation.NonNull;

import java.util.Date;

import io.objectbox.annotation.Entity;
import io.objectbox.annotation.Id;

/**
 * Created by victorfernandes on 26/05/18.
 */

@Entity
public class Contact implements Parcelable, Comparable {

    @Id
    private long id;
    private String name;
    private String email;
    private Date born;
    private String bio;
    private String photo;

    public Contact() {
    }

    public Contact(String name, String email, Date born, String bio, String photo) {
        this.name = name;
        this.email = email;
        this.born = born;
        this.bio = bio;
        this.photo = photo;
    }

    protected Contact(Parcel in) {
        id = in.readLong();
        name = in.readString();
        email = in.readString();
        born = new Date(in.readLong());
        bio = in.readString();
        photo = in.readString();
    }

    public static final Creator<Contact> CREATOR = new Creator<Contact>() {
        @Override
        public Contact createFromParcel(Parcel in) {
            return new Contact(in);
        }

        @Override
        public Contact[] newArray(int size) {
            return new Contact[size];
        }
    };

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getBorn() {
        return born;
    }

    public void setBorn(Date born) {
        this.born = born;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    @Override
    public int describeContents() {
        return 0;
    }

    @Override
    public void writeToParcel(Parcel parcel, int i) {
        parcel.writeLong(id);
        parcel.writeString(name);
        parcel.writeString(email);
        parcel.writeLong(born.getTime());
        parcel.writeString(bio);
        parcel.writeString(photo);
    }

    @Override
    public int compareTo(@NonNull Object o) {
        return this.getName().
                compareTo(((Contact) o).getName());
    }
}
