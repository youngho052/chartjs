import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router";
import Chart from "./Chart/ChartContainer";
import LineContainer from "./Chart/LineContainer";

function Routes() {
  return (
    <Switch>
      <Route exact path="/chart" component={Chart} />
      <Route exact path="/line" component={LineContainer} />
    </Switch>
  );
}

export default Routes;
