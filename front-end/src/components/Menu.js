import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    return (
        <nav className="nav-bar">
        <ul className="menu">
          <li><Link className="menu_l" to="/">Home</Link></li>
          <li><Link className="menu_l" to="./Login">Login</Link></li>
        </ul>
      </nav>
    );
};

export default Menu;
export { default as Menu } from './Menu.js';
