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
import BlogPage from "../src/pages/Blog/Blog.js";
import BlogDetailsPage from "../src/pages/Blog/BlogDetails.js";
import PitrupakshaPage from "../src/pages/Blog/Pitrupaksha.js";
import EventsPage from "../src/pages/Events/Events.js";
import ComponentsPage from "../src/pages/UIComponents/UIComponents.js";
import DonatePage from "../src/pages/Donate/Donate.js";
import EshwariShodhanaKriyaPage from "../src/pages/EshwariShodhanaKriya/EshwariShodhanaKriya.js";

import EshwariKriyaPage from "./pages/EshwariKriya/EshwariKriya";
import EshwariShakthiKendraSadhanaPage from "./pages/EshwariShakthiKendraSadhana/EshwariShakthiKendraSadhana";
import EshwariSrividhyaSadhanaPage from "./pages/EshwariSrividhyaSadhana/EshwariSrividhyaSadhana";
import JyothismathiPage from "./pages/Jyothishmathi/Jyothishmathi";
import ImmortalProcessPage from "./pages/ImmortalProcess/ImmortalProcess";
import GuruPujaPage from "./pages/GuruPuja/GuruPuja";
import ProjectsPage from "./pages/Projects/Projects";
import UdgamanaPage from "./pages/Udgamana/Udgamana";
import SriPage from "./pages/Sri/Sri";
import SriYogPage from "./pages/SriYog/SriYog";
import AstrologyPage from "./pages/Astrology/Astrology";
import ManahPrakshalyaPage from "./pages/ManahPrakshalya/ManahPrakshalya";
import KnowYourPurposePage from "./pages/KnowYourPurpose/KnowYourPurpose";
import IandYouPage from "./pages/IandYou/IandYou";
import KalaBhiravaPage from "./pages/KalaBhirava/KalaBhirava";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/donate" component={DonatePage} />
      <Route path="/blogdetails" component={BlogDetailsPage} />
      <Route path="/pitrupaksha" component={PitrupakshaPage} />
      <Route path="/iandyou" component={IandYouPage} />
      <Route path="/events" component={EventsPage} />
      <Route path="/components" component={ComponentsPage} />
      <Route path="/eshwari-kriya" component={EshwariKriyaPage} />
      <Route
        path="/eshwari-shodhana-kriya"
        component={EshwariShodhanaKriyaPage}
      />
      <Route
        path="/eshwari-shakthi-kendra-sadhana"
        component={EshwariShakthiKendraSadhanaPage}
      />
      <Route
        path="/eshwari-srividhya-sadhana"
        component={EshwariSrividhyaSadhanaPage}
      />
      <Route path="/jyothismathi" component={JyothismathiPage} />
      <Route path="/immortal-process" component={ImmortalProcessPage} />
      <Route path="/guru-puja" component={GuruPujaPage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/udgamana" component={UdgamanaPage} />
      <Route path="/sri" component={SriPage} />
      <Route path="/sriyog" component={SriYogPage} />
      <Route path="/astrology" component={AstrologyPage} />
      <Route path="/manah-prakshalya" component={ManahPrakshalyaPage} />
      <Route path="/know-your-purpose" component={KnowYourPurposePage} />
      <Route path="/kala-bhirava-dhyana" component={KalaBhiravaPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
