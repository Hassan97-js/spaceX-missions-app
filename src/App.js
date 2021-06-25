import { useContext } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
/* import { Helmet } from "react-helmet"; */

import GlobalContext from "./StateContext/GlobalContext";

import { HiddenNav, HiddenFooter } from "./utils/Routers";

import WelcomeSpaceX from "./views/WelcomeSpaceX/WelcomeSpaceX";
import SpaceXLaunches from "./views/SpaceXLaunches/SpaceXLaunches";
import LaunchMoreInfo from "./views/LaunchMoreInfo/LaunchMoreInfo";
import Form from "./views/Form/Form";

import "./App.css";

function App() {
  const { isVisited, setIsVisited } = useContext(GlobalContext);

  return (
    <div className="App">
      <div className={isVisited && "content-wrap"}>
        <Router>
          <HiddenNav />
          <Switch>
            <Route exact path="/">
              {!isVisited ? <WelcomeSpaceX isVisited={isVisited} setIsVisited={setIsVisited} /> : <Redirect to="/launches" />}
            </Route>
            <Route path="/launches">{isVisited ? <SpaceXLaunches /> : <Redirect to="/" />}</Route>
            <Route path="/launchMoreInfo/:id">
              <LaunchMoreInfo />
            </Route>
            <Route path="/rockets"></Route>
            <Route path="/capsules"></Route>
            <Route path="/loginForm">
              <Form />
            </Route>
          </Switch>
          <HiddenFooter />
        </Router>
      </div>
    </div>
  );
}

export default App;
