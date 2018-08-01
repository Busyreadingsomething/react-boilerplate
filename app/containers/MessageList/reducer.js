import { fromJS } from 'immutable';

import messages from './mockData';
import { LOAD_MESSAGES, MESSAGE_SUCCESS, MESSAGE_FAIL } from './constants';

export const initialState = fromJS({
  messages,
  loading: false,
  error: false,
  success: false,
});

const listProviderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MESSAGES:
      return state
        .set('loading', true)
        .set('error', false)
        .set('success', false);
    case MESSAGE_SUCCESS:
      return state
        .set('messages', fromJS(action.messages))
        .set('loading', false)
        .set('error', false)
        .set('success', true);
    case MESSAGE_FAIL:
      return state
        .set('loading', false)
        .set('error', true)
        .set('success', false);
    default:
      return state;
  }
};

export default listProviderReducer;
