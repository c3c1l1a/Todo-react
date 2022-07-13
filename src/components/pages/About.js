/* eslint-disable */

import { Link, Routes, Route } from "react-router-dom";
import AboutAuthor from "./AboutAuthor";
import AboutApp from './AboutApp';
import styles from './About.module.css';

const About = (props) => {
  return (
    <div className={styles.about}>
        <nav className={styles.nav}>
          <Link to="about-app">About App</Link>
          <Link to="about-author">About Author</Link>
        </nav>
        <Routes>
          <Route path='about-author' element={<AboutAuthor />} />
          <Route path='about-app' element={<AboutApp />} />
        </Routes>
    </div>
  )
}

export default About;