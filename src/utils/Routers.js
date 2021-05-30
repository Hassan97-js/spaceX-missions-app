import { withRouter } from "react-router-dom";

import Navbar from "../components/Global/Navbar/Navbar";
import Footer from "../components/Global/Footer/Footer";

const HideNav = props => {
  const { location } = props;
  if (location.pathname.match(/^\/$/)) {
    return null;
  }

  return <Navbar />;
};

const HiddenNav = withRouter(HideNav);

const HideFooter = props => {
  const { location } = props;
  if (location.pathname.match(/^\/$/)) {
    return null;
  }

  return <Footer />;
};

const HiddenFooter = withRouter(HideFooter);

export { HiddenNav, HiddenFooter };
