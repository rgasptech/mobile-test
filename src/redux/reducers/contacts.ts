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
      if (typeof action?.payload === 'object') return state;
      return {...state, list: action?.payload};

    default:
      return state;
  }
};

export default contactsReducer;
