import { Link } from "react-router-dom";

import "./navbar.css";

import spaceXlogo from "../../../assets/images/SpaceX-Logo 1.png";

function Navbar() {
  return (
    <nav id="flex-nav">
      <figure className="logo-wrapper">
        <Link className="logo-link" to="/">
          <img id="logo" src={spaceXlogo} alt="SpaceX logo" />
        </Link>
        <figcaption className="logo-caption">Galaxy</figcaption>
      </figure>

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
