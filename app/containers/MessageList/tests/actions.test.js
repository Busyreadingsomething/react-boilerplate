import { loadMessages, messageFail, messageSuccess } from '../actions';
import { LOAD_MESSAGES, MESSAGE_FAIL, MESSAGE_SUCCESS } from '../constants';

describe('### ACTIONS ####', () => {
  describe('___ loadMessages ___', () => {
    it('should create and object with type LOAD_MESSAGES', () => {
      const load = loadMessages();
      expect(load).toBeInstanceOf(Object);
      expect(load).toHaveProperty('type', LOAD_MESSAGES);
    });
  });
  describe('___ messageFail ___', () => {
    it('should create and object with type MESSAGE_FAIL', () => {
      const fail = messageFail();
      expect(fail).toBeInstanceOf(Object);
      expect(fail).toHaveProperty('type', MESSAGE_FAIL);
    });
  });
  describe('___ messageSuccess ___', () => {
    it('should create and object with type MESSAGE_SUCCESS', () => {
      const success = messageSuccess();
      expect(success).toBeInstanceOf(Object);
      expect(success).toHaveProperty('type', MESSAGE_SUCCESS);
    });
  });
});
