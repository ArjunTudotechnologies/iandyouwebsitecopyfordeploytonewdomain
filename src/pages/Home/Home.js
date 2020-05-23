import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CovidBanner from "../../components/CovidBanner/CovidBanner";
import { WOW } from "wowjs";
import EventsSection from "./Sections/EventsSection";
// import ProgramsSection from "./Sections/ProgramsSection";
import VideoSection from "./Sections/VideoSection";
import TestimonialsSection from "./Sections/TestimonialsSection";
import TwitterSection from "./Sections/TwitterSection";

export default class Home extends Component {
  componentDidMount() {
    const wow = new WOW({
      offset: 100,
      mobile: false,
      live: true,
    });

    wow.init();
  }
  render() {
    return (
      <div>
        <Header />
        <EventsSection />
        <VideoSection />
        <TestimonialsSection />
        <TwitterSection />
        <CovidBanner />
        {/* <ProgramsSection /> */}
        <Footer />
      </div>
    );
  }
}
