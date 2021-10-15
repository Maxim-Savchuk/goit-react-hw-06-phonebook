import { combineReducers } from 'redux';
import {types} from './contacts-types';

const itemsLS = JSON.parse(window.localStorage.getItem('contacts')) ?? [];

const items = (state = itemsLS, { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [payload, ...state];

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

export const contactsReducer = combineReducers({
  items,
  filter,
});
