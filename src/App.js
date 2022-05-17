import { useContext } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import GlobalContext from "./stateContext/globalContext";

import { HiddenNav, HiddenFooter } from "./utils/routers";

import WelcomeSpaceXPage from "./pages/WelcomeSpaceXPage/WelcomeSpaceXPage";
import SpaceXLaunchesPage from "./pages/SpaceXLaunchesPage/SpaceXLaunchesPage";
import LaunchMoreInfoPage from "./pages/LaunchMoreInfoPage/LaunchMoreInfoPage";
import Spinner from "./components/global/Spinner/Spinner";
/* import Form from "./pages/Form/Form"; */

import "./styles/styles.scss";

function App() {
  const { isVisited, setIsVisited, loading } = useContext(GlobalContext);

  return (
    <div className={`App ${loading ? "loading" : ""}`}>
      {loading ? (
        <Spinner />
      ) : (
        <Router>
          <HiddenNav />
          <Switch>
            <Route exact path="/">
              {!isVisited ? <WelcomeSpaceXPage isVisited={isVisited} setIsVisited={setIsVisited} /> : <Redirect to="/launches" />}
            </Route>
            <Route path="/launches">{isVisited ? <SpaceXLaunchesPage /> : <Redirect to="/" />}</Route>
            <Route path="/launchMoreInfo/:id">
              <LaunchMoreInfoPage />
            </Route>
            <Route path="/rockets"></Route>
            <Route path="/capsules"></Route>
            {/*  <Route path="/loginForm">
              <Form />
            </Route> */}
          </Switch>

          <HiddenFooter />
        </Router>
      )}
    </div>
  );
}

export default App;
