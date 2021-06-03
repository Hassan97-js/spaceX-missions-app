import { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import GlobalContext from "./StateContext/GlobalContext";

import { HiddenNav, HiddenFooter } from "./utils/Routers";

import WelcomeSpaceX from "./views/WelcomeSpaceX/WelcomeSpaceX";
import SpaceXLaunches from "./views/SpaceXLaunches/SpaceXLaunches";

import "./App.css";

function App() {
  const contextValue = useContext(GlobalContext);

  contextValue && console.log(contextValue);

  const [isVisited, setIsVisited] = useState(localStorage.getItem("visited"));

  return (
    <GlobalContext.Provider value={1}>
      <div className="App">
        <div className={isVisited && "content-wrap"}>
          <Router>
            <HiddenNav />
            <Switch>
              <Route exact path="/">
                {!isVisited ? <WelcomeSpaceX isVisited={isVisited} setIsVisited={setIsVisited} /> : <Redirect to="/launches" />}
              </Route>
              <Route path="/launches">{isVisited ? <SpaceXLaunches /> : <Redirect to="/" />}</Route>
              <Route path="/rockets"></Route>
              <Route path="/capsules"></Route>
            </Switch>
            <HiddenFooter />
          </Router>
        </div>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
