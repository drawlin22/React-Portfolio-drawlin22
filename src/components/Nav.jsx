import React from 'react';
// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';
import { NavLink } from 'react-router-dom';
import myResume from "../assets/resume/Resume.pdf";

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
    links={[
      <NavLink key={1} className="nav-link text-light text-zoom" to="/" activeclassname="active">
        About Me
      </NavLink>,
      <NavLink key={2} className="nav-link text-light text-zoom" to="/portfolio" activeclassname="active">
        Portfolio
      </NavLink>,
      <NavLink key={3} className="nav-link text-light text-zoom" to="/resume" activeclassname="active">
        Resume
      </NavLink>,
       <a key={4}href="mailto:tacobellboi@yahoo.com" className="nav-link text-light text-zoom">
       Contact Me
     </a>,
    <a key={5}href={myResume} download="Resume" className="glow-on-hover ml-auto align-right">
       <button>My Resume</button>
   </a>
   
     ]}
    />
  );
}
