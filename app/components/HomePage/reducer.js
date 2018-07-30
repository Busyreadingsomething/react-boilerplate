import fromJS from 'immutable';

import { CHANGE_MESSAGE } from './actionTypes';

export const initialState = fromJS({
  value: '',
});

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MESSAGE:
      return state.set('value', () => action.value);
    default:
      return state;
  }
};

return inputReducer;
