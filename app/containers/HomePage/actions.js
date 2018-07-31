import { CHANGE_MESSAGE, SUBMIT_MESSAGE } from './actionTypes';

export const changeMessage = value => ({
  type: CHANGE_MESSAGE,
  value,
});

export const submitMessage = () => ({
  type: SUBMIT_MESSAGE,
});
