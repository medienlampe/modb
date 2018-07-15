import React, { Component, Fragment as F } from 'react';
import Menu from '../partials/Menu';
import Content from '../partials/Content';

export class Ideas extends Component {
  render() {
    const title = 'ModelDB: Ideen';

    return (
      <F>
        <Menu active="ideas" />
        <Content title={title}>
          Sed exercitation dolor reprehenderit dolore incididunt eiusmod magna
          esse anim culpa non amet cupidatat ea ex consequat id mollit
          reprehenderit ea est id nisi sed cupidatat in adipisicing sit magna ad
          mollit dolore veniam reprehenderit laborum deserunt eu pariatur.
        </Content>
      </F>
    );
  }
}
