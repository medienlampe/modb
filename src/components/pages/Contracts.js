import React, { Component, Fragment as F } from 'react';
import Menu from '../partials/Menu';
import Content from '../partials/Content';

export class Contracts extends Component {
  render() {
    const title = 'ModelDB: Verträge';

    return (
      <F>
        <Menu active="contracts" />
        <Content title={title}>
          Voluptate fugiat qui sint id dolore et consequat labore in dolor do
          enim voluptate ad adipisicing aute in consectetur exercitation
          adipisicing laborum.
        </Content>
      </F>
    );
  }
}
