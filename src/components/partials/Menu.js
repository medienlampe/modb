import React, { Component } from 'react';
import MenuLink from './MenuLink';

const Menu = props => (
  <nav className="columns menu vertical medium-2">
    <h2>ModelDB</h2>
    <form action="">
      <input type="text" placeholder="Suche..." />
    </form>
    <MenuLink active={props.active} route="home">
      Startseite
    </MenuLink>
    <MenuLink active={props.active} route="models">
      Modelle auflisten
    </MenuLink>
    <MenuLink active={props.active} route="ideas">
      Ideen auflisten
    </MenuLink>
    <MenuLink active={props.active} route="contracts">
      Verträge auflisten
    </MenuLink>
    <MenuLink active={props.active} route="contracttypes">
      Vertragstypen auflisten
    </MenuLink>
  </nav>
);

export default Menu;
