import { call, put, takeEvery } from 'redux-saga/effects';
import fetch from './fetch';
import { LOAD_MESSAGES } from './constants';
import { messageSuccess, messageFail } from './actions';

export function* workerGet() {
  const response = yield call(fetch);
  try {
    const messages = response.data;
    yield put(messageSuccess(messages));
  } catch (error) {
    yield put(messageFail());
  }
}

export default function* watcherGet() {
  yield takeEvery(LOAD_MESSAGES, workerGet);
}
