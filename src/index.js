import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/scss/iandyou.scss";

// pages
import HomePage from "../src/pages/Home/Home.js";
import AboutPage from "../src/pages/About/About.js";
import EventsPage from "../src/pages/Events/Events.js";
import ComponentsPage from "../src/pages/UIComponents/UIComponents.js";

import EshwariKriyaPage from "./pages/EshwariKriya/EshwariKriya";
import EshwariShakthiKendraSadhanaPage from "./pages/EshwariShakthiKendraSadhana/EshwariShakthiKendraSadhana";
import EshwariSrividhyaSadhanaPage from "./pages/EshwariSrividhyaSadhana/EshwariSrividhyaSadhana";
import JyothismathiPage from "./pages/Jyothishmathi/Jyothishmathi";
import ImmortalProcessPage from "./pages/ImmortalProcess/ImmortalProcess"

import ProjectsPage from "./pages/Projects/Projects";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" exact component={AboutPage} />
      <Route path="/events" exact component={EventsPage} />
      <Route path="/components" exact component={ComponentsPage} />

      <Route path="/eshwari-kriya" exact component={EshwariKriyaPage} />
      <Route
        path="/eshwari-shakthi-kendra-sadhana"
        exact
        component={EshwariShakthiKendraSadhanaPage}
      />
      <Route
        path="/eshwari-srividhya-sadhana"
        exact
        component={EshwariSrividhyaSadhanaPage}
      />
       <Route
        path="/jyothismathi"
        exact
        component={JyothismathiPage}
      />
      <Route path="/immortal-process" exact component={ImmortalProcessPage} />

      <Route path="/projects" exact component={ProjectsPage} />

    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
