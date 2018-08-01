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
import injectReducer from 'utils/injectReducer';
import { arrayOf, string, bool } from 'prop-types';

import Wrapper from '../../components/Wrapper';
import messages from './messages';
import reducer from './reducer';
import mock from './mockData';
import fetch from './fetch';
import {
  makeSelectError,
  makeSelectList,
  makeSelectLoading,
  makeSelectSuccess,
} from './selector';

/* eslint-disable react/prefer-stateless-function */
export class MessageList extends React.Component {
  constructor() {
    super();
    this.state = {
      mock,
    };
  }

  componentDidMount() {
    console.log(fetch);
    fetch()
      .then(() => console.log('hit'))
      .catch(e => console.log('ERROR:', e));
  }

  render() {
    return (
      <Wrapper>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        {this.state.mock.map(message => <p key={message}>{message}</p>)}
      </Wrapper>
    );
  }
}

MessageList.propTypes = {
  list: arrayOf(string).isRequired,
  loading: bool.isRequired,
  error: bool.isRequired,
  success: bool.isRequired,
};

const mapStateToProps = createSelector(
  [
    makeSelectError(),
    makeSelectList(),
    makeSelectLoading(),
    makeSelectSuccess(),
  ],
  (error, list, loading, success) => ({
    error,
    list,
    loading,
    success,
  }),
);

const mapDispatchToProps = () => ({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'list', reducer });

export default compose(
  withReducer,
  withConnect,
)(MessageList);
