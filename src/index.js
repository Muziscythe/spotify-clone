import React from "react";
import ReactDOM from "react-dom";

import App from "./Components/App";
import "./index.css"
import DataProvider from "./DataProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <DataProvider>
    <App />
  </DataProvider>
,
  rootElement
);
