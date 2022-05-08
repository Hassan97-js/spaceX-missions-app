import { withRouter } from "react-router-dom";

import Navbar from "../components/global/Navbar/Navbar";
import Footer from "../components/global/Footer/Footer";

const hideNav = (props) => {
  const { location } = props;

  if (location.pathname.match(/^\/$/)) {
    return null;
  }

  return <Navbar />;
};

export const HiddenNav = withRouter(hideNav);

const HideFooter = (props) => {
  const { location } = props;

  if (location.pathname.match(/^\/$/)) {
    return null;
  }

  return <Footer />;
};

export const HiddenFooter = withRouter(HideFooter);
