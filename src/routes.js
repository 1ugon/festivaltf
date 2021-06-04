import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Room1 from "./pages/Room1";
import Room2 from "./pages/Room2";
import Room3 from "./pages/Room3";
import Room4 from "./pages/Room4";
import Room5 from "./pages/Room5";
import NotFound from "./pages/NotFound";
import Performances from "./pages/Performances";
import Podcast from "./pages/Podcast";
import Rodas from "./pages/Rodas";

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
      <Route exact path="/room2">
        <Room2 />
      </Route>
      <Route exact path="/room3">
        <Room3 />
      </Route>
      <Route exact path="/room4">
        <Room4 />
      </Route>
      <Route exact path="/room5">
        <Room5 />
      </Route>
      <Route exact path="/room2/performances">
        <Performances />
      </Route>
      <Route exact path="/room4/podcast">
        <Podcast />
      </Route>
      <Route exact path="/room5/rodas">
        <Rodas />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}
