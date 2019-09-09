import React from 'react';
//import PropTypes from 'prop-types';

class App extends React.Component {

  state = {
    isLoaded: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoaded: false })
    }, 3000)
  }

  render() {
    const { isLoaded } = this.state
    return (
      <div>{isLoaded ? "Loading" : "Contents"}</div>
    )
  }
}

export default App;
