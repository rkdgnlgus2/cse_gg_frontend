import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import SearchPage from "./containers/pages/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/search" exact render={SearchPage} />
        <Redirect from="" to="search" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
