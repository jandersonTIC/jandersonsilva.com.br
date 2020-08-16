import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthenticationRoutes from "./modules/authentication/routes";

export default function Routes() {
  return (
    <Switch>
      <Route path="/login">
        <AuthenticationRoutes />
      </Route>
      <Route path="/">
        <h2>Página inicial</h2>
      </Route>
    </Switch>
  );
}
