import App from "../../../App";

import { useState } from "react";

import GlobalContext from "../../../StateContext/GlobalContext";

function AppParent() {
  const [isVisited, setIsVisited] = useState(localStorage.getItem("visited"));
  return (
    <GlobalContext.Provider value={{ isVisited, setIsVisited }}>
      <App />
    </GlobalContext.Provider>
  );
}

export default AppParent;
