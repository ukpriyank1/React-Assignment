import React from "react";
import ReactDOM from "react-dom";
import Body from "./App";
import "./index.css";

// const main = document.getElementById("root");

// ReactDOM.create.root(<App />, main);

ReactDOM.render(
  <>
    <h1>The "React Way" to Render a List</h1>
    <Body />
  </>,
  document.getElementById("root")
);
