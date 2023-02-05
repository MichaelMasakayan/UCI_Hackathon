import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import RegisterPage from "views/pages/RegisterPage.js";
import HouseDescription from "views/pages/HouseDescription.js";
import SwipePage from "views/pages/SwipePage";
import HousesDislikedPage from "views/pages/HousesDislikedPage.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route
        path="/index"
        render={(props) => <Index {...props} />}
      />
        <Route
        path="/HouseDescription"
        render={(props) => <HouseDescription {...props} />}
      />
      <Route
        path="/swipe-page"
        render={(props) => <SwipePage {...props} />}
      />
      <Route
        path="/HousesDisliked" 
        render={(props) => <HousesDislikedPage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Redirect from="/" to="/index" />
    </Switch>
  </BrowserRouter>
);
