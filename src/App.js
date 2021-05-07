import PropTypes from "prop-types";
import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    this.setState((current) => {
      current.count += 1;
      return current;
    });
  };
  minus = () => {
    this.setState((current) => {
      current.count -= 1;
      return current;
    });
  };
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

// defined function or class should be exported
export default App;
