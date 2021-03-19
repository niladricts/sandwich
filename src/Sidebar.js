import React from 'react';
import { elastic as Menu } from 'react-burger-menu';


export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/Sandwich1">
        Finnish Sandwich
      </a>
      <a className="menu-item" href="/Sandwich2">
        SouthIndian Sandwich
      </a>
      <a className="menu-item" href="/Sandwich3">
        Italian Paprikka Sandwich
      </a>
    </Menu>
  );
};