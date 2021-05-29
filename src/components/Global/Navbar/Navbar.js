import "./Navbar.css";

import spaceXlogo from "../../../assets/images/SpaceXLogo2.png";

function Navbar() {
  return (
    <>
      <nav id="flex-nav">
        <a href="https://www.google.com">
          <img src={spaceXlogo} alt="SpaceX logo" id="logo" />
        </a>
        <div id="nav-links">
          <a className="nav-link" href="https://www.google.com">
            Launches
          </a>
          <a className="nav-link" href="https://www.google.com">
            Rockets
          </a>
          <a className="nav-link" href="https://www.google.com">
            Capsules
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
