import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Page404 } from '../components/pages/Page404';

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>



      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});
