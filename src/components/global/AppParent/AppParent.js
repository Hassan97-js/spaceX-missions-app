import { useState, useEffect } from "react";

import App from "../../../App";

import GlobalContext from "../../../stateContext/globalContext";

import { getSpaceXLaunches } from "../../../utils/functions";

function AppParent() {
  const [isVisited, setIsVisited] = useState(localStorage.getItem("visited"));
  const [globalSpaceXLaunches, setGlobalSpaceXLaunches] = useState(null);
  const [loading, setLoading] = useState(true);

  let launchNumId = 0;

  getSpaceXLaunches(useEffect, setGlobalSpaceXLaunches, setLoading);

  globalSpaceXLaunches &&
    globalSpaceXLaunches.forEach((launch) => {
      launch.launchNumId = ++launchNumId;
    });

  globalSpaceXLaunches && console.log(globalSpaceXLaunches);

  return (
    <GlobalContext.Provider value={{ isVisited, setIsVisited, globalSpaceXLaunches, setGlobalSpaceXLaunches, loading }}>
      <App />
    </GlobalContext.Provider>
  );
}

export default AppParent;
