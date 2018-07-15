import React, { Component } from 'react';

export class Menu extends Component {
  render() {
    return (
      <nav className="columns menu vertical medium-2">
        <h2>ModelDB</h2>
        <form action="">
          <input type="text" placeholder="Suche..." />
        </form>
        <li>
          <a href="">Modelle auflisten</a>
        </li>
        <li>
          <a href="">Projekte auflisten</a>
        </li>
        <li>
          <a href="">Verträge auflisten</a>
        </li>
        <li>
          <a href="">Vertragstypen auflisten</a>
        </li>
      </nav>
    );
  }
}
