import React, { Component, Fragment as F } from 'react';
import Menu from '../partials/Menu';
import { DefaultContent } from '../partials/DefaultContent';

export class Home extends Component {
  render() {
    return (
      <F>
        <Menu active="home" />
        <DefaultContent />
      </F>
    );
  }
}
