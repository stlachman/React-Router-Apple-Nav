import React from 'react';
import { NavLink } from 'react-router-dom';

const NavWrapper = props => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/"><i className="fab fa-apple"></i></NavLink></li>
        <li><NavLink to="/mac">Mac</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavWrapper;