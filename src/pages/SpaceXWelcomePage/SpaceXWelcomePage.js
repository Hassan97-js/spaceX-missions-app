import { Link } from "react-router-dom";

import spaceXlogo from "../../assets/images/SpaceXLogo2.png";

import styles from "./spaceXWelcomePage.module.scss";

function SpaceXWelcomePage({ isVisited, setIsVisited }) {
  return (
    <div className={styles["spacex-welcome-page"]}>
      <header className={`${styles["spacex-welcome-page__header"]} container`}>
        <img className={styles["spacex-welcome-page__logo"]} src={spaceXlogo} alt="SpaceX logo" />
        <h1 className={styles["spacex-welcome-page__header-heading"]}>Welcome to SpaceX Galaxy</h1>
      </header>

      <div className={styles["spacex-welcome-page__background"]}>
        <h2 className={styles["spacex-welcome-page__background-heading"]}>For launch, rocket and capsules data</h2>
        <Link
          className={styles["spacex-welcome-page__link"]}
          onClick={() => {
            !isVisited && localStorage.setItem("visited", "true");
            setIsVisited(localStorage.getItem("visited"));
          }}
          to="/launches"
        >
          Explore SpaceX
        </Link>
      </div>
    </div>
  );
}

export default SpaceXWelcomePage;
