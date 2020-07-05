import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CovidBanner from "../../components/CovidBanner/CovidBanner";
import IandyouBanner from "../../components/IandyouBanner/IandyouBanner";
import { WOW } from "wowjs";
import ProgramsSection from "./Sections/ProgramsSection";
import VideoSection from "./Sections/VideoSection";
import TestimonialsSection from "./Sections/TestimonialsSection";
import TwitterSection from "./Sections/TwitterSection";
import UpcomingEventsSection from "./Sections/UpcomingEventsSection";
import IandyouCard from "../../components/IandyouCard/IandyouCard";
import IandyouCardMobile from "../../components/IandyouCardMobile/IandyouCardMobile";
import UpcomingWorkshopsSection from "./Sections/UpcomingWorkshopsSection";

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
        <IandyouCard />
        <IandyouCardMobile />
        <UpcomingWorkshopsSection />
        <VideoSection />
        <UpcomingEventsSection />
        <TestimonialsSection />
        <TwitterSection />
        <ProgramsSection />
        <CovidBanner />
        <IandyouBanner />
        <Footer />
        {/* <ScrollTop /> */}
      </div>
    );
  }
}
