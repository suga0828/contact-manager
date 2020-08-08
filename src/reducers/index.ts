import { combineReducers } from 'redux';
import contactReducer, { ContactsState } from './contactReducer';

export interface AppState {
  contacts: ContactsState;
}

export default combineReducers({
  contacts: contactReducer
});
