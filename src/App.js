import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { useState } from "react";

import { HiddenNav, HiddenFooter } from "./utils/Routers";
import WelcomeSpaceX from "./views/WelcomeSpaceX/WelcomeSpaceX";
import SpaceXLaunches from "./views/SpaceXLaunches/SpaceXLaunches";

import "./App.css";

function App() {
  const [isVisited, setIsVisited] = useState(localStorage.getItem("visited"));

  return (
    <div className="App">
      <div className={isVisited && "content-wrap"}>
        <Router>
          <HiddenNav />
          <Switch>
            <Route exact path="/">
              {!isVisited ? <WelcomeSpaceX isVisited={isVisited} setIsVisited={setIsVisited} /> : <Redirect to="/launches" />}
            </Route>
            <Route path="/launches">
              <SpaceXLaunches />
            </Route>
            <Route path="/rockets"></Route>
            <Route path="/capsules"></Route>
          </Switch>
          <HiddenFooter />
        </Router>
      </div>
    </div>
  );
}

export default App;
