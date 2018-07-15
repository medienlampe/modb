import React, { Component, Fragment as F } from 'react';
import Menu from '../partials/Menu';
import Content from '../partials/Content';

export class Models extends Component {
  render() {
    const title = 'ModelDB: Modelle';

    return (
      <F>
        <Menu active="models" />
        <Content title={title}>
          Ullamco quis sunt nulla dolore ut sed dolore nisi anim aute anim ut
          ullamco dolore eu tempor deserunt nulla sed ex fugiat esse eu laboris
          dolore sunt.
        </Content>
      </F>
    );
  }
}
