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
import { bool, string, func } from 'prop-types';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import Button from 'components/Button';
import Wrapper from 'components/Wrapper';
import Loading from 'components/Loading';

import messages from './messages';
import Input from './Input';
import reducer from './reducer';
import saga from './sagas';
import {
  makeSelectMessage,
  makeSelectLoading,
  makeSelectSuccess,
  makeSelectError,
} from './selectors';
import { changeMessage, submitMessage, reset } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  render() {
    const {
      handleChange,
      handleSubmit,
      handleReset,
      value,
      success,
      error,
      loading,
    } = this.props;
    const ready = !success && !error;
    return (
      <Wrapper>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <Loading active={loading}>Loading...</Loading>
        <Input
          active={ready}
          onChange={handleChange}
          placeholder="Add a message"
          type="text"
          value={value}
        />
        <Button active={!success && !error} onClick={handleSubmit}>
          SUBMIT
        </Button>
        <Button active={success || error} onClick={handleReset}>
          {success ? 'ADD ANOTHER' : 'TRY AGAIN'}
        </Button>
      </Wrapper>
    );
  }
}

HomePage.propTypes = {
  handleChange: func.isRequired,
  handleSubmit: func.isRequired,
  handleReset: func.isRequired,
  loading: bool.isRequired,
  error: bool.isRequired,
  success: bool.isRequired,
  value: string.isRequired,
};

const mapStateToProps = createSelector(
  [
    makeSelectMessage(),
    makeSelectLoading(),
    makeSelectSuccess(),
    makeSelectError(),
  ],
  (value, loading, success, error) => ({
    value,
    loading,
    success,
    error,
  }),
);

const mapDispatchToProps = dispatch => ({
  handleChange: e => dispatch(changeMessage(e.target.value)),
  handleSubmit: () => dispatch(submitMessage()),
  handleReset: () => dispatch(reset()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
