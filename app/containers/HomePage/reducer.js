import { fromJS } from 'immutable';

import { CHANGE_MESSAGE, RESET, POST_SUCCESS, POST_FAIL } from './constants';

export const initialState = fromJS({
  value: '',
  loading: false,
  success: false,
  error: false,
});

const inputProviderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MESSAGE:
      return state.set('value', action.value);
    case POST_SUCCESS:
      return state
        .set('value', '')
        .set('loading', false)
        .set('success', true)
        .set('error', false);
    case POST_FAIL:
      return state
        .set('loading', false)
        .set('success', false)
        .set('error', true);
    case RESET:
      return state
        .set('value', '')
        .set('loading', false)
        .set('success', false)
        .set('error', false);
    default:
      return state;
  }
};

export default inputProviderReducer;
