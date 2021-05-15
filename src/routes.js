import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Room1 from "./pages/Room1";
import NotFound from "./pages/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/room">
        <Redirect to="/" />
      </Route>
      <Route exact path="/room1">
        <Room1 />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}
