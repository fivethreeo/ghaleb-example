import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Share from "./Share";
import Carousel from "./Carousel";

import "./App.css";

import React from "react";
const App = () => {
  return (
    <>
      <Carousel />
      <Switch>

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/share/:slug" component={Share} />
      </Switch>
    </>
  );
};

export default App;
