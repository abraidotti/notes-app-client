import Home from "./containers/Home";
import Login from "./containers/Login";
import NewNote from "./containers/NewNote";
import NotFound from "./containers/NotFound";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Signup from "./containers/Signup";

export default ({ childProps }) =>
<Switch>
  <Route path="/" exact render={props => <Home {...props} {...childProps} />} />
  <Route path="/login" exact render={props => <Login {...props} {...childProps} />} />
  <Route path="/signup" exact render={props=> <Signup {...props} {...childProps} />} />
  <Route path="/notes/new" exact render={props=> <NewNote {...props} {...childProps} />} />
  <Route component={NotFound} />
</Switch>;
