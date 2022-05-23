import { Link } from "react-router-dom";

import spaceXlogo from "../../assets/images/SpaceXLogo2.png";

import styles from "./welcomeSpaceXPage.module.scss";

function WelcomeSpaceXPage({ isVisited, setIsVisited }) {
  return (
    <div className={styles["welcome-spaceX-page"]}>
      <header className={`${styles["welcome-spaceX-page-header"]} container`}>
        <img className={styles["welcome-spaceX-page-logo"]} src={spaceXlogo} alt="SpaceX logo" />
        <h1 className={styles["welcome-heading"]}>Welcome to SpaceX Galaxy</h1>
      </header>

      <div className={styles["welcome-spaceX-page-background"]}>
        <h2 className={styles["welcome-spaceX-background-heading"]}>For launch, rocket and capsules data</h2>
        <Link
          className={styles["welcome-spaceX-page-link"]}
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

export default WelcomeSpaceXPage;
