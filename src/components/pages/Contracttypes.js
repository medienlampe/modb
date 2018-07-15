import React, { Component, Fragment as F } from 'react';
import Menu from '../partials/Menu';
import Content from '../partials/Content';

export class Contracttypes extends Component {
  render() {
    const title = 'ModelDB: Vertragsarten';

    return (
      <F>
        <Menu active="contracttypes" />
        <Content title={title}>
          Laborum deserunt pariatur commodo dolore proident sunt occaecat sed
          est ut do fugiat non incididunt ad occaecat nostrud in et anim commodo
          deserunt ad proident minim amet exercitation.
        </Content>{' '}
      </F>
    );
  }
}
