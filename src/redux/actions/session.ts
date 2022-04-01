import {SessionActionTypes, SessionReducerIfc} from '~types';

const dispatchAdminLogin = (
  payload: Partial<SessionReducerIfc>,
): {type: SessionActionTypes; payload: Partial<SessionReducerIfc>} => ({
  type: 'LoginAdmin',
  payload,
});

const dispatchUserLogin = (
  payload: Partial<SessionReducerIfc>,
): {type: SessionActionTypes; payload: Partial<SessionReducerIfc>} => ({
  type: 'Login',
  payload,
});

const dispatchUserLogout = (): {type: SessionActionTypes} => ({
  type: 'Logout',
});

export {dispatchAdminLogin, dispatchUserLogin, dispatchUserLogout};
