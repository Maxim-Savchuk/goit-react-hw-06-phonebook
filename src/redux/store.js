import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { contactsReducer } from './contacts/contacts-reducer';

const rootReducers = combineReducers({
  contacts: contactsReducer,
});

export const store = createStore(rootReducers, composeWithDevTools());
