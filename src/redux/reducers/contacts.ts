import {ContactActionTypes, IContact, IContactReducer} from '~types';

const initialState: IContactReducer = {
  list: [],
};

const contactsReducer = (
  state = initialState,
  action: {type: ContactActionTypes; payload: IContact | IContact[]},
) => {
  switch (action.type) {
    case 'AddBulk':
      if (Array.isArray(action?.payload))
        return {...state, list: action?.payload};

    case 'AddContact':
      if (!Array.isArray(action?.payload))
        return {...state, list: [...state?.list, action?.payload]};

    default:
      return state;
  }
};

export default contactsReducer;
