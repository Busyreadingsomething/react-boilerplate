import { fromJS } from 'immutable';

import { CHANGE_MESSAGE, SUBMIT_MESSAGE } from './actionTypes';

export const initialState = fromJS({
  value: '',
  submit: false,
});

const inputProviderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MESSAGE:
      return state.update('value', () => action.value);
    case SUBMIT_MESSAGE:
      return state
        .update('submit', submit => !submit)
        .update('value', () => '');
    default:
      return state;
  }
};

export default inputProviderReducer;
