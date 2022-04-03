import {ContactReducerParams} from '~types';

const dispatchContacts = (
  type: ContactReducerParams['type'],
  payload: ContactReducerParams['payload'],
) => ({type, payload});

export {dispatchContacts};
