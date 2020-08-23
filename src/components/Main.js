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
        path="/pickforme/"
        render={() => {
          return <Redirect to="/pickforme/home" />;
        }}
      />
      <Route exact path="/pickforme/home" component={Home} replace></Route>
      <Route path="/pickforme/create" exact component={Create} replace></Route>
      <Route path="/pickforme/contact" component={Contact} replace></Route>
    </Switch>
  );
};

export default Main;
