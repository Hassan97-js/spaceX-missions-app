import App from "../../../App";

import { useState, useEffect } from "react";

import GlobalContext from "../../../stateContext/globalContext";

import { getSpaceXdata } from "../../../utils/functions";

function AppParent() {
  const [isVisited, setIsVisited] = useState(localStorage.getItem("visited"));
  const [globalSpaceXData, setGlobalSpaceXData] = useState(null);
  const [loading, setLoading] = useState(true);

  let launchNumId = 0;

  getSpaceXdata(useEffect, setGlobalSpaceXData, setLoading);

  globalSpaceXData &&
    globalSpaceXData.forEach(launch => {
      launch.launchNumId = ++launchNumId;
    });

  globalSpaceXData && console.log(globalSpaceXData);

  return (
    <GlobalContext.Provider value={{ isVisited, setIsVisited, globalSpaceXData, setGlobalSpaceXData, loading }}>
      <App />
    </GlobalContext.Provider>
  );
}

export default AppParent;
