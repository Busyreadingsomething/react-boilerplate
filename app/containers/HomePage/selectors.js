import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectInput = state => state.get('input', initialState);

const makeSelectMessage = () =>
  createSelector(selectInput, messageState => messageState.get('value'));

const makeSelectSubmit = () =>
  createSelector(selectInput, messageState => messageState.get('submit'));

export { selectInput, makeSelectMessage, makeSelectSubmit };
