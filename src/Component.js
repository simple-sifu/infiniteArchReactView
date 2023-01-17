import React, { useState } from "react";
import { render } from "react-dom";
import { presenter } from "./Presenter";
import { observe } from "mobx";
import ChildComponent from "./Child/ChildComponent";

function App() {
  // binding output goes here
  const [viewModel, setViewModel] = useState({});

  useEffect(() => {
    async function load() {
      observe(presenter, "viewModel", obj => {
        console.log("got here");
        setViewModel(obj.newValue);
      });
      await presenter.load();
    }
    load();
  }, []);
  return <>{/* binding input goes here */}</>;
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
