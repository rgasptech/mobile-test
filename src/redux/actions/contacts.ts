import {ContactReducerParams, IContact} from '~types';

const dispatchAddContacts = (payload: IContact[]): ContactReducerParams => ({
  type: 'AddBulk',
  payload,
});

const dispatchAddContact = (payload: IContact): ContactReducerParams => ({
  type: 'AddContact',
  payload,
});

const dispatchDeleteContact = (payload: string): ContactReducerParams => ({
  type: 'DeleteContact',
  payload,
});

const dispatchUpdateContact = (payload: IContact): ContactReducerParams => ({
  type: 'UpdateContact',
  payload,
});

export {
  dispatchAddContacts,
  dispatchAddContact,
  dispatchDeleteContact,
  dispatchUpdateContact,
};
