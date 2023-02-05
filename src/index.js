import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
// adds the new page
import HouseDescription from "views/examples/HouseDescription.js";
import ProfilePageCarolInCard from "views/examples/ProfilePageCarolInCard.js";
import SwipePage from "views/examples/SwipePage";
import ListPage from "views/examples/ListPage.js";
import HousesDislikedPage from "views/examples/HousesDislikedPage.js";

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
        path="/ListPage" 
        render={(props) => <ListPage {...props} />}
      />
      <Route
        path="/HousesDisliked" 
        render={(props) => <HousesDislikedPage {...props} />}
      />
      <Redirect from="/" to="/index" />
    </Switch>
  </BrowserRouter>
);
