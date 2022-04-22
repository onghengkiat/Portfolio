import React, { useState } from 'react';
import './Navbar.css';
import { 
  AiFillIdcard,
  AiFillProfile,
  AiFillSchedule,
} from 'react-icons/ai';

import {
  BsAwardFill,
} from 'react-icons/bs';

import {
  FaBars,
} from 'react-icons/fa';

// TODO: Add animation to hide the navbar as scrolling down 

export default function Navbar({ active }) {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleNavBarMenu = () => {
    setMenuOpened(!menuOpened);
  }

  return(
    <ul className={ menuOpened ? "navbar menuOpened": "navbar" }>
        <li className="navbarCollapse" onClick={toggleNavBarMenu}><a><FaBars/></a></li>
        <li className={active === 0 ? "navbarItem active" : "navbarItem"}><a href="/"> <AiFillIdcard /> About Me</a></li>
        <li className={active === 1 ? "navbarItem active" : "navbarItem"}><a href="/experiences"> < AiFillProfile/> Experiences</a></li>
        <li className={active === 2 ? "navbarItem active" : "navbarItem"}><a href="/projects"> <AiFillSchedule /> Projects</a></li>
        <li className={active === 3 ? "navbarItem active" : "navbarItem"}><a href="/awards"> <BsAwardFill /> Awards</a></li>
    </ul>
  );
}