import {rootReducer} from '~redux/reducers';
import {IContact} from '~types/services';

interface IContactReducer {
  list: IContact[];
}

type ReduxState = ReturnType<typeof rootReducer>;

type ContactActionTypes = 'AddBulk' | 'AddContact' | 'Delete Contact';

type ContactReducerParams =
  | {type: 'AddBulk'; payload: IContact[]}
  | {type: 'AddContact'; payload: IContact}
  | {type: 'DeleteContact'; payload: string};

export {ReduxState, ContactActionTypes, IContactReducer, ContactReducerParams};
