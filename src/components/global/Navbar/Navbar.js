import { Link } from "react-router-dom";

import spaceXlogo from "../../../assets/images/SpaceX-Logo 1.png";

import styles from "./navbar.module.scss";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <figure className={styles["logo-wrapper"]}>
        <Link className={styles["logo-link"]} to="/">
          <img className={styles["nav-logo"]} src={spaceXlogo} alt="SpaceX logo" />
        </Link>
        <figcaption className={styles["logo-caption"]}>Galaxy</figcaption>
      </figure>

      <div className={styles["nav-links"]}>
        <Link className={styles["nav-link"]} to="/launches">
          Launches
        </Link>
        <Link className={styles["nav-link"]} to="/rockets">
          Rockets
        </Link>
        <Link className={styles["nav-link"]} to="/capsules">
          Capsules
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
