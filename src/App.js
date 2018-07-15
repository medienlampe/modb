import React, { Component, Fragment as F } from 'react';
import { Menu } from './components/Menu';
import { Content } from './components/Content';

import logo from './logo.svg';
import './foundation.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <F>
        <Menu />
        <Content />
      </F>
    );
  }
}

export default App;
