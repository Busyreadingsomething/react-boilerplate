import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectInput = state => state.get('home', initialState);

const makeSelectMessage = () =>
  createSelector(selectInput, messageState => messageState.get('value'));

const makeSelectLoading = () =>
  createSelector(selectInput, messageState => messageState.get('loading'));

const makeSelectSuccess = () =>
  createSelector(selectInput, messageState => messageState.get('success'));

const makeSelectError = () =>
  createSelector(selectInput, messageState => messageState.get('error'));

export {
  selectInput,
  makeSelectMessage,
  makeSelectLoading,
  makeSelectSuccess,
  makeSelectError,
};
