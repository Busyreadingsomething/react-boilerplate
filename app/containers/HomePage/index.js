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
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Input from './Input';
import Button from '../../components/Button';
import Wrapper from '../../components/Wrapper';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      value: '',
      submit: false,
    };
  }

  handleChange = e => {
    const { value } = e.target.value;
    this.setState(() => ({ value }));
  };

  handleSubmit = () => {
    this.setState(state => ({ submit: !state.submit }));
  };

  render() {
    const { submit, value } = this.state;
    return (
      <Wrapper>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <Input
          active={!submit}
          onChange={this.handleChange}
          placeholder="Add a message"
          type="text"
          value={value}
        />
        <Button active={!submit} onClick={this.handleSubmit}>
          SUBMIT
        </Button>
        <Button active={submit} onClick={this.handleSubmit}>
          ADD ANOTHER
        </Button>
      </Wrapper>
    );
  }
}
