/* eslint-disable */
import React, { useState } from "react"
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';

const Navbar = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const links = [
    {
      id:1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/about',
      text: 'About'
    }
  ]
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }
  return (
    <nav className={styles.navBar}>
      <button onClick={handleToggle}>{navbarOpen ? "x" : "☰"}</button>
      <ul className={`menuNav ${navbarOpen ? styles.showMenu : styles.hideMenu}`}>
        {links.map(link => {
          return (
            <li key={link.id}>
              <NavLink onClick={() => closeMenu()} to={link.path}>{link.text}</NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  );
}

export default Navbar;