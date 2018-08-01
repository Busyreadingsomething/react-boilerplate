import { fromJS } from 'immutable';

import messages from './mockData';
import { LOAD_MESSAGE, MESSAGE_SUCCESS, MESSAGE_FAIL } from './constants';

export const initialState = fromJS({
  messages,
  loading: false,
  error: false,
  success: false,
});

const listProviderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MESSAGE:
      return state.set('loading', true).set('error', false);
    case MESSAGE_SUCCESS:
      return state
        .set('messages', action.messages)
        .set('loading', false)
        .set('error', false);
    case MESSAGE_FAIL:
      return state.set('loading', false).set('error', true);
    default:
      return state;
  }
};

export default listProviderReducer;
