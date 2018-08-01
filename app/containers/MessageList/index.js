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
import Wrapper from '../../components/Wrapper';
import fetch from './fetch';
import list from './mockData';

/* eslint-disable react/prefer-stateless-function */
export default class MessageList extends React.Component {
  constructor() {
    super();
    this.state = {
      list,
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
        {this.state.list.map(message => <p key={message}>{message}</p>)}
      </Wrapper>
    );
  }
}
