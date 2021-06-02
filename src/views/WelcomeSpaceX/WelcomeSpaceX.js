import { Link } from "react-router-dom";

import "./WelcomeSpaceX.css";

import spaceXlogo from "../../assets/images/SpaceXLogo2.png";

function WelcomeSpaceX({ isVisited }) {
  return (
    <div id="WelcomeSpaceX">
      <header id="WelcomeSpaceX-header">
        <img src={spaceXlogo} alt="SpaceX logo" id="logo" />
        <h1 id="welcome-header">Welcome to SpaceX!</h1>
      </header>
      <div id="WelcomeSpaceX-background">
        <h2 id="background-header">For launch, rocket, core, capsule, starlink, launchpad, and landing pad data.</h2>
        <Link onClick={() => !isVisited && localStorage.setItem("visited", "true")} to="/launches">
          Explore SpaceX
        </Link>
      </div>
    </div>
  );
}

export default WelcomeSpaceX;
