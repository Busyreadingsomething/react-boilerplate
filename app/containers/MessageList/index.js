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
import messages from './mockData';

/* eslint-disable react/prefer-stateless-function */
export default class MessageList extends React.Component {
  constructor() {
    super();
    this.state = {
      messages,
    };
  }

  render() {
    return (
      <div>
        <h2>Here is the messages</h2>
        {this.state.messages.map(message => <p>{message}</p>)}
      </div>
    );
  }
}
