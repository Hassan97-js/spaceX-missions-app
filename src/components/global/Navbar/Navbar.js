import { Link } from "react-router-dom";

import spaceXlogo from "../../../assets/images/SpaceX-Logo 1.png";

import styles from "./navbar.module.scss";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link className={styles["nav__logo-link"]} to="/">
        <figure className={styles["nav__logo-wrapper"]}>
          <img className={styles["nav__logo"]} src={spaceXlogo} alt="SpaceX logo" />

          <figcaption className={styles["nav__logo-caption"]}>Galaxy</figcaption>
        </figure>
      </Link>
      <div className={styles["nav__links"]}>
        <Link className={styles["nav__link"]} to="/launches">
          Launches
        </Link>
        <Link className={styles["nav__link"]} to="/rockets">
          Rockets
        </Link>
        <Link className={styles["nav__link"]} to="/capsules">
          Capsules
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
