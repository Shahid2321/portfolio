import React from "react";
import { Link } from "react-scroll";
import styles from "./Style.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <img src="logo.png" className={styles.logo}></img>
        <ul className={styles.menu}>
          {["Hero", "About", "Services", "Contact"].map((item) => (
            <li key={item} className={styles.menuItem}>
              <Link to={item.toLowerCase()} smooth duration={800}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
