import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import AppParent from "./components/Global/AppParent/AppParent";

document.title = "SpaceX";

ReactDOM.render(
  <React.StrictMode>
    <AppParent />
  </React.StrictMode>,
  document.getElementById("root")
);
