import {IContact} from '~types';

const dispatchAddContacts = (payload: IContact[]) => ({
  type: 'AddBulk',
  payload,
});

const dispatchAddContact = (payload: IContact) => ({
  type: 'AddContact',
  payload,
});

const dispatchDeleteContact = (payload: string) => ({
  type: 'DeleteContact',
  payload,
});

export {dispatchAddContacts, dispatchAddContact, dispatchDeleteContact};
