package br.com.victorpettengill.rgacodechallenge.adapter;

import android.support.annotation.NonNull;
import android.support.v4.view.ViewCompat;
import android.support.v7.widget.RecyclerView;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import com.squareup.picasso.Picasso;

import java.util.List;

import br.com.victorpettengill.rgacodechallenge.R;
import br.com.victorpettengill.rgacodechallenge.core.beans.Contact;
import br.com.victorpettengill.rgacodechallenge.utils.CircleTransform;
import butterknife.BindView;
import butterknife.ButterKnife;

/**
 * Created by victorfernandes on 29/05/18.
 */

public class ContactAdapter extends RecyclerView.Adapter<ContactAdapter.ContactViewHolder>{

    private List<Contact> contactList;
    private OnContactClickedListener listener;

    public ContactAdapter(List<Contact> contactList, OnContactClickedListener listener) {
        this.contactList = contactList;
        this.listener = listener;
    }

    @NonNull
    @Override
    public ContactViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {

        View view = View.inflate(parent.getContext(), R.layout.contact_adapter_item, null);

        RecyclerView.LayoutParams lp = new RecyclerView.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT);
        view.setLayoutParams(lp);

        return new ContactViewHolder(view, listener);
    }

    @Override
    public void onBindViewHolder(@NonNull ContactViewHolder holder, int position) {
        holder.bindContact(contactList.get(position));
    }

    @Override
    public int getItemCount() {
        return contactList.size();
    }


    public class ContactViewHolder extends RecyclerView.ViewHolder {

        @BindView(R.id.photo) ImageView photo;
        @BindView(R.id.contact_name) TextView name;
        @BindView(R.id.contact_email) TextView email;

        ContactViewHolder(View itemView, final OnContactClickedListener listener) {
            super(itemView);

            ButterKnife.bind(this, itemView);

            itemView.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {

                    listener.onContactClicked(contactList.get(getAdapterPosition()), photo);

                }
            });

        }

        void bindContact(Contact contact) {

            name.setText(contact.getName());
            email.setText(contact.getEmail());

            Picasso.get().load(contact.getPhoto())
                    .placeholder(R.drawable.ic_user_placeholder)
                    .transform(new CircleTransform())
                    .fit()
                    .centerCrop()
                    .into(photo);

            ViewCompat.setTransitionName(photo, String.valueOf(contact.getId()));

        }

    }

    public interface OnContactClickedListener {

        void onContactClicked(Contact contact, View transitionView);

    }

}
