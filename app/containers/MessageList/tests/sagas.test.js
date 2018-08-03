/**
 * Tests for HomePage sagas
 */

import { put, takeEvery } from 'redux-saga/effects';

import { messageSuccess, messageFail } from '../actions';
import watcherGet, { workerGet } from '../sagas';
import { LOAD_MESSAGES } from '../constants';

/* eslint-disable redux-saga/yield-effects */
describe('workerGet Saga', () => {
  let getListGenerator;
  const expected = {
    data: [{ id: 1, note: 'NOTE' }],
  };
  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getListGenerator = workerGet();

    const callDescriptor = getListGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the messageSuccess action if it requests fails', () => {
    const putDescriptor = getListGenerator.next(expected).value;
    expect(putDescriptor).toEqual(put(messageSuccess(expected.data)));
  });

  it('should call the repoLoadingError action if the response errors', () => {
    const error = new Error('bad error');
    const putDescriptor = getListGenerator.throw(error).value;
    expect(putDescriptor).toEqual(put(messageFail()));
  });
});

describe('watcherGet Saga', () => {
  const messageDataSaga = watcherGet();

  it('should start task to watch for LOAD_REPOS action', () => {
    const takeEveryDescriptor = messageDataSaga.next().value;
    expect(takeEveryDescriptor).toEqual(takeEvery(LOAD_MESSAGES, workerGet));
  });
});
