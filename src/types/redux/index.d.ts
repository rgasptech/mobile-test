import {rootReducer} from '~redux/reducers';
import {IContact} from '~types/services';

interface IContactReducer {
  list: IContact[];
}

type ReduxState = ReturnType<typeof rootReducer>;

type ContactActionTypes = 'AddBulk' | 'AddContact';

export {ReduxState, ContactActionTypes, IContactReducer};
