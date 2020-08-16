import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

export default function AuthenticationRoutes() {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/recuperar-senha`}>
        <h3>Tela de recuperação de senha</h3>
      </Route>
      <Route path={match.path}>
        <h3>Tela de login</h3>
      </Route>
    </Switch>
  );
}
