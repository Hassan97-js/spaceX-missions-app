import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { HiddenNav, HiddenFooter } from "./utils/Routers";
import WelcomeSpaceX from "./views/WelcomeSpaceX/WelcomeSpaceX";
import SpaceXLaunches from "./views/SpaceXLaunches/SpaceXLaunches";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className={localStorage.getItem("visited") && "content-wrap"}>
        <Router>
          <HiddenNav />
          <Switch>
            <Route exact path="/">
              {!localStorage.getItem("visited") ? <WelcomeSpaceX isVisited={localStorage.getItem("visited")} /> : <Redirect to="/launches" />}
            </Route>
            <Route path="/launches">
              <SpaceXLaunches />
            </Route>
            <Route path="/rockets">{/* <WelcomeSpaceX /> */}</Route>
            <Route path="/capsules">{/* <WelcomeSpaceX /> */}</Route>
          </Switch>
          <HiddenFooter />
        </Router>
      </div>
    </div>
  );
}

export default App;
