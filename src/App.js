import React from 'react';
//import PropTypes from 'prop-types';

class App extends React.Component {

  state = {
    count: 0
  }

  plus = () => {
    this.setState(current => ({ count: current.count + 1 }))
  }

  minus = () => {
    this.setState(current => ({ count: current.count - 1 }))
  }

  componentDidMount() {
    console.log("rendering completed")
  }

  componentDidUpdate() {
    console.log("updated")
  }

  render() {
    console.log("rendering...")
    return (
      <div>
        <h1>Number : {this.state.count}</h1>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
      </div>
    )
  }
}

export default App;
