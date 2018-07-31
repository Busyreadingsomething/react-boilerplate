import React from 'react';
import Nav from './Nav';
import NavLink from './NavLink';

const NavBar = () => (
  <Nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/list">Messages</NavLink>
  </Nav>
);

export default NavBar;
