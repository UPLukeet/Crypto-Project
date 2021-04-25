import * as React from "react";
import { Route, Switch } from "react-router";
import { HomePage } from "../Pages/HomePage";
import { BASE_ROUTE } from "./config";

function App() {
  return (
    <Switch>
      <Route path={BASE_ROUTE} component={HomePage} exact />
    </Switch>
  );
}

export default App;
