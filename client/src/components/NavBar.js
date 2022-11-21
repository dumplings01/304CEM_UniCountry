import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/components/NavBar.module.css";

const NavBar = () => {
    return (
      <nav className={styles.navbar}>
        <div className={styles.container}>
        <h3 className={styles.logo}>UniCountry</h3>
  
        <ul className={styles.navlinks}>
          <Link to = '/' className={styles.link}><li>Home</li></Link>
          <Link to = '/savedList' className={styles.link}><li>Saved University List</li></Link>
        </ul>
        </div>
      </nav>
    )
  }

export default NavBar;