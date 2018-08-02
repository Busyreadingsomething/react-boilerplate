import { fromJS } from 'immutable';

import {
  selectList,
  makeSelectList,
  // makeSelectLoading,
  // makeSelectError,
  // makeSelectSuccess,
} from '../selector';

describe('### MESSAGE LIST - SELECTORS ###', () => {
  const globalState = fromJS({
    messages: [],
    loading: false,
    error: false,
    success: false,
  });
  const initialState = fromJS({
    list: globalState,
  });
  describe('___ selectList ___', () => {
    it('should select the global state', () => {
      const select = selectList(initialState);
      expect(select).toEqual(globalState);
    });
  });
  describe('___ makeSelectList ___', () => {
    it('should select the global state', () => {
      const list = makeSelectList();
      expect(list(initialState)).toEqual(fromJS([]));
    });
  });
});
