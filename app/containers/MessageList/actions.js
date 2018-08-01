import { LOAD_MESSAGES, MESSAGE_SUCCESS, MESSAGE_FAIL } from './constants';

export const loadMessages = () => ({
  type: LOAD_MESSAGES,
});

export const messageSuccess = messages => ({
  type: MESSAGE_SUCCESS,
  messages,
});

export const messageFail = () => ({
  type: MESSAGE_FAIL,
});
