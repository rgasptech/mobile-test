import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, Store} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import {rootReducer} from './reducers';

const persistConfig = {
  key: 'mailbookreduxasync',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store: Store = createStore(persistedReducer);
const persistor = persistStore(store);

export {persistor, store};
