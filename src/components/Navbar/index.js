import React from 'react';
import { Bars, Nav, NavIcon, NavLink } from './Navbar';

export default function Navbar() {
  return (
    <>
      <Nav>
        <NavLink to="/">Pizza</NavLink>
        <NavIcon>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
}
