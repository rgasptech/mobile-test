import {ContactReducerParams, IContactReducer} from '~types';

const initialState: IContactReducer = {
  list: [],
};

const contactsReducer = (
  state = initialState,
  action: ContactReducerParams,
) => {
  switch (action.type) {
    case 'AddBulk':
      return {...state, list: action?.payload};

    case 'AddContact':
      return {...state, list: [...state?.list, action?.payload]};

    case 'DeleteContact':
      return {
        ...state,
        list: state.list.filter(contact => contact.id !== action?.payload),
      };

    case 'UpdateContact':
      const updatedList = [...state.list];
      const targetIndex = updatedList.findIndex(
        contact => contact.id === action?.payload?.id,
      );
      Object.assign(updatedList[targetIndex], action?.payload);
      return {...state, list: updatedList};

    default:
      return state;
  }
};

export default contactsReducer;
