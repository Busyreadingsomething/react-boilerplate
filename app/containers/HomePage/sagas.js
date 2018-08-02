import { call, put, select, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { makeSelectMessage } from './selectors';
import { postFail, postSuccess } from './actions';
import { SUBMIT_MESSAGE } from './constants';

const post = message =>
  axios({
    method: 'POST',
    url: '/message',
    data: { message },
  });

function* workerPost() {
  const message = yield select(makeSelectMessage());

  try {
    yield call(post, message);

    yield put(postSuccess());
  } catch (error) {
    yield put(postFail());
  }
}

export default function* watcherPost() {
  yield takeEvery(SUBMIT_MESSAGE, workerPost);
}
