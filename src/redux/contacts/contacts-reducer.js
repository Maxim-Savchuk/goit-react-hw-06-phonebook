import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { addContact, deleteContact, changeFilter } from './contacts-actions';

const items = createReducer([], {
  [addContact]: (state, { payload }) => [payload, ...state],
  [deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items,
  filter,
});
