import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import MatchPage from "./containers/pages/MatchPage";
import SearchPage from "./containers/pages/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={SearchPage} />
        <Route path="/match/:username" exact render={MatchPage} />
        <Redirect from="" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
