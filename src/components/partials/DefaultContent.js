import React, { Component } from 'react';
import Content from './Content';

export class DefaultContent extends Component {
  render() {
    const title = 'Willkommen in der ModelDB!';

    return (
      <Content title={title}>
        <p>Wähle links im Menü einen Punkt aus um zu starten!</p>
      </Content>
    );
  }
}
