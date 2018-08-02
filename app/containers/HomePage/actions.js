import {
  CHANGE_MESSAGE,
  POST_FAIL,
  POST_SUCCESS,
  SUBMIT_MESSAGE,
  RESET,
} from './constants';

export const changeMessage = value => ({
  type: CHANGE_MESSAGE,
  value,
});

export const submitMessage = () => ({
  type: SUBMIT_MESSAGE,
});

export const postSuccess = () => ({
  type: POST_SUCCESS,
});

export const postFail = () => ({
  type: POST_FAIL,
});

export const reset = () => ({
  type: RESET,
});
