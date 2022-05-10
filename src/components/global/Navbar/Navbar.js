import { Link } from "react-router-dom";

import "./navbar.css";

import spaceXlogo from "../../../assets/images/SpaceXLogo2.png";

function Navbar() {
  return (
    <nav id="flex-nav">
      <Link to="/">
        <img src={spaceXlogo} alt="SpaceX logo" id="logo" />
      </Link>
      <div id="nav-links">
        <Link className="nav-link" to="/launches">
          Launches
        </Link>
        <Link className="nav-link" to="/rockets">
          Rockets
        </Link>
        <Link className="nav-link" to="/capsules">
          Capsules
        </Link>

        <Link className="nav-link" to="/loginForm">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
