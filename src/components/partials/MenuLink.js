import React from 'react';

function isActive(props) {
  if (props && props.active && props.route && props.route == props.active) {
    return 'active';
  }
}

const MenuLink = props => (
  <li className={isActive(props)}>
    <a href={props.route || 'home'}>{props.children}</a>
  </li>
);

export default MenuLink;
