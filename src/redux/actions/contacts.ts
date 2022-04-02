import {ContactActionTypes, IContact} from '~types';

const dispatchAddContacts = (
  payload: IContact[],
): {type: ContactActionTypes; payload: IContact[]} => ({
  type: 'AddBulk',
  payload,
});

const dispatchAddContact = (
  payload: IContact,
): {type: ContactActionTypes; payload: IContact} => ({
  type: 'AddContact',
  payload,
});

export {dispatchAddContacts, dispatchAddContact};
