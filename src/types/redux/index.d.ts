import {rootReducer} from '~redux/reducers';
import {IContact} from '~types/services';

interface IContactReducer {
  list: IContact[];
}

type ReduxState = ReturnType<typeof rootReducer>;

type ContactReducerParams =
  | {type: 'AddBulk'; payload: IContact[]}
  | {type: 'AddContact'; payload: IContact}
  | {type: 'DeleteContact'; payload: string}
  | {type: 'UpdateContact'; payload: IContact};

export {ReduxState, IContactReducer, ContactReducerParams};
