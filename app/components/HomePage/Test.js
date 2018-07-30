import React from 'react';

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
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Test;
