import { fromJS } from 'immutable';

import listProviderReducer, { initialState } from '../reducer';
import { loadMessages, messageSuccess } from '../actions';

describe('languageProviderReducer', () => {
  it('returns the initial state', () => {
    expect(listProviderReducer(undefined, {})).toEqual(initialState);
  });

  it('changes the locale', () => {
    const expectedState = initialState.set('loading', true);
    expect(listProviderReducer(undefined, loadMessages())).toEqual(
      expectedState,
    );
  });

  it('changes the locale', () => {
    const messages = [{ id: 1, note: 'NOTE' }];
    const expectedState = initialState
      .set('messages', fromJS(messages))
      .set('success', true);
    expect(listProviderReducer(undefined, messageSuccess(messages))).toEqual(
      expectedState,
    );
  });
});
