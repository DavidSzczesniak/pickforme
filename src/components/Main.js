import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Create from "../pages/Create";
import Contact from "../pages/Contact";

const Main = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return <Redirect to="/home" />;
        }}
      />
      <Route exact path="/home" component={Home} replace></Route>
      <Route path="/create" exact component={Create} replace></Route>
      <Route path="/contact" component={Contact} replace></Route>
    </Switch>
  );
};

export default Main;
