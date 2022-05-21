import { useState, useEffect } from "react";

import App from "../../../App";

import GlobalContext from "../../../stateContext/globalContext";

import { getSpaceXLaunches } from "../../../utils/functions";

function AppParent() {
  const [isVisited, setIsVisited] = useState(localStorage.getItem("visited"));
  const [loading, setLoading] = useState(true);
  const [globalSpaceXLaunches, setGlobalSpaceXLaunches] = useState(null);

  let launchNumId = 0;

  getSpaceXLaunches(useEffect, setGlobalSpaceXLaunches, setLoading);

  globalSpaceXLaunches &&
    globalSpaceXLaunches.forEach((launch) => {
      launch.launchNumId = ++launchNumId;
    });

  return (
    <GlobalContext.Provider value={{ isVisited, setIsVisited, globalSpaceXLaunches, setGlobalSpaceXLaunches, loading }}>
      <App />
    </GlobalContext.Provider>
  );
}

export default AppParent;
