import React from 'react';
// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
    links={[
      <NavLink key={1} className="nav-link text-light" to="/" activeclassname="active">
        About Me
      </NavLink>,
      <NavLink key={2} className="nav-link text-light" to="/portfolio" activeclassname="active">
        Portfolio
      </NavLink>,
      <NavLink key={3} className="nav-link text-light" to="/contact" activeclassname="active">
        Contact
      </NavLink>,
      <NavLink key={4} className="nav-link text-light" to="/resume" activeclassname="active">
        Resume
      </NavLink>,
     ]}
    />
  );
}
