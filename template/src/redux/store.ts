import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rootReducer, { State as RootState } from './reducers';

export interface State {
  root: RootState;
}

export default configureStore({
  reducer: combineReducers({ root: rootReducer }),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});
