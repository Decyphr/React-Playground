import React, { Component } from 'react';
import logo from './logo.svg';

import Register from './Register';

import './bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Register />
  }
}

export default App;
