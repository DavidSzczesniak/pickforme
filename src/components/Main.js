import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Create from "../pages/Create";
import Contact from "../pages/Contact";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/create" component={Create} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
};

export default Main;
