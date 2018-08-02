/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { arrayOf, bool, func, object } from 'prop-types';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import Wrapper from 'components/Wrapper';
import Lists from 'components/Lists';

import { loadMessages } from './actions';
import head from './messages';
import reducer from './reducer';
import saga from './sagas';
import { toJS } from './toJS';
import {
  makeSelectError,
  makeSelectList,
  makeSelectLoading,
  makeSelectSuccess,
} from './selector';

/* eslint-disable react/prefer-stateless-function */
export class MessageList extends React.Component {
  componentDidMount() {
    this.props.loadMessages();
  }

  render() {
    const { success, messages } = this.props;
    return (
      <Wrapper>
        <h1>
          <FormattedMessage {...head.header} />
        </h1>
        <Lists active={success} list={messages} />
      </Wrapper>
    );
  }
}

MessageList.propTypes = {
  messages: arrayOf(object).isRequired,
  loading: bool.isRequired,
  error: bool.isRequired,
  success: bool.isRequired,
  loadMessages: func.isRequired,
};

export const mapStateToProps = createSelector(
  [
    makeSelectError(),
    makeSelectList(),
    makeSelectLoading(),
    makeSelectSuccess(),
  ],
  (error, messages, loading, success) => ({
    error,
    messages,
    loading,
    success,
  }),
);

export const mapDispatchToProps = dispatch => ({
  loadMessages: () => dispatch(loadMessages()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'list', reducer });
const withSaga = injectSaga({ key: 'list', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(toJS(MessageList));
