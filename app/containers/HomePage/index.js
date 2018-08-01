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

import messages from './messages';
import Input from './Input';
import Button from '../../components/Button';
import Wrapper from '../../components/Wrapper';
import reducer from './reducer';
import { makeSelectMessage, makeSelectSubmit } from './selectors';
import { changeMessage, submitMessage } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  render() {
    const { handleChange, handleSubmit, value, submit } = this.props;
    return (
      <Wrapper>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <Input
          active={!submit}
          onChange={handleChange}
          placeholder="Add a message"
          type="text"
          value={value}
        />
        <Button active={!submit} onClick={handleSubmit}>
          SUBMIT
        </Button>
        <Button active={submit} onClick={handleSubmit}>
          ADD ANOTHER
        </Button>
      </Wrapper>
    );
  }
}

HomePage.propTypes = {
  handleChange: func.isRequired,
  handleSubmit: func.isRequired,
  submit: bool.isRequired,
  value: string.isRequired,
};

const mapStateToProps = createSelector(
  [makeSelectMessage(), makeSelectSubmit()],
  (value, submit) => ({
    value,
    submit,
  }),
);

const mapDispatchToProps = dispatch => ({
  handleChange: e => dispatch(changeMessage(e.target.value)),
  handleSubmit: () => dispatch(submitMessage()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });

export default compose(
  withReducer,
  withConnect,
)(HomePage);
