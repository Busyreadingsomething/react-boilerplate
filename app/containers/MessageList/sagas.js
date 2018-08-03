import { call, put, takeEvery } from 'redux-saga/effects';
import fetch from './fetch';
import { LOAD_MESSAGES } from './constants';
import { messageSuccess, messageFail } from './actions';

export function* workerGet() {
  try {
    const response = yield call(fetch);
    yield put(messageSuccess(response.data));
  } catch (error) {
    yield put(messageFail());
  }
}

export default function* watcherGet() {
  yield takeEvery(LOAD_MESSAGES, workerGet);
}
