import React from 'react';
import Input from './Input';

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  handleChange = e => {
    const { value } = e.target;
    this.setState({ value }, () => console.log('HIT'));
  };

  render() {
    return (
      <div>
        <h2>ADD A STRING</h2>
        <Input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Add a message"
        />
      </div>
    );
  }
}

export default Test;
