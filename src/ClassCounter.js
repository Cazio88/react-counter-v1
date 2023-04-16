import React, { Component } from 'react';

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  handleIncrease = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  handleDecrease = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className='container'>
        <h2>Class Counter</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrease}>Increase Count</button>
        <button onClick={this.handleDecrease}>Decrease Count</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default ClassCounter;
