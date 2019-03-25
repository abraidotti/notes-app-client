import Home from "./containers/Home";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import React from "react";
import { Route, Switch } from "react-router-dom";

export default ({ childProps }) =>
<Switch>
  <Route path="/" exact render={props => <Home {...props} {...childProps} />} />
  <Route path="/login" exact render={props => <Login {...props} {...childProps} />} />
  <Route component={NotFound} />
</Switch>;