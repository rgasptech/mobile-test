import {ContactActionTypes, IContact} from '~types';

const dispatchAddContacts = (
  payload: IContact[],
): {type: ContactActionTypes; payload: IContact[]} => ({
  type: 'AddBulk',
  payload,
});

export {dispatchAddContacts};
