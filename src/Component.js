import React, { useState } from "react";
import { render } from "react-dom";
import { presenter } from "./Presenter";
import { observe } from "mobx";
import ChildComponent from "./Child/ChildComponent";

function App() {
  // binding output goes here

  return <>{/* binding input goes here */}</>;
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
