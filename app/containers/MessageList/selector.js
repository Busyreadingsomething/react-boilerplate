import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectList = state => state.get('list', initialState);

const makeSelectList = () =>
  createSelector(selectList, listState => listState.get('list'));

const makeSelectLoading = () =>
  createSelector(selectList, loadingState => loadingState.get('loading'));

const makeSelectError = () =>
  createSelector(selectList, errorState => errorState.get('error'));

const makeSelectSuccess = () =>
  createSelector(selectList, successState => successState.get('success'));

export {
  selectList,
  makeSelectList,
  makeSelectLoading,
  makeSelectError,
  makeSelectSuccess,
};
