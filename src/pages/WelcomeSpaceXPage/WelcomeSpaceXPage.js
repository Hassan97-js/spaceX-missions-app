import { Link } from "react-router-dom";

import "./welcomeSpaceXPage.css";

import spaceXlogo from "../../assets/images/SpaceXLogo2.png";

function WelcomeSpaceXPage({ isVisited, setIsVisited }) {
  return (
    <div className="welcome-spaceX-page">
      <header className="welcome-spaceX-page-header">
        <img src={spaceXlogo} alt="SpaceX logo" className="welcome-spaceX-page-logo" />
        <h1 className="welcome-heading">Welcome to SpaceX Galaxy</h1>
      </header>

      <div className="welcome-spaceX-page-background">
        <h2 className="background-heading">For launch, rocket and capsules data</h2>
        <Link
          className="welcome-spaceX-page-link"
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
