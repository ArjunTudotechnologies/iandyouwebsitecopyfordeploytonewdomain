import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CovidBanner from "../../components/CovidBanner/CovidBanner";
import { WOW } from "wowjs";
import ProgramsSection from "./Sections/ProgramsSection";
import VideoSection from "./Sections/VideoSection";
import TestimonialsSection from "./Sections/TestimonialsSection";
import TwitterSection from "./Sections/TwitterSection";
import UpcomingEventsSection from "./Sections/UpcomingEventsSection";
import IandyouCard from "../../components/IandyouCard/IandyouCard";
import IandyouCardMobile from "../../components/IandyouCardMobile/IandyouCardMobile";
import UpcomingWorkshopsSection from "./Sections/UpcomingWorkshopsSection";
import SmallBanner from "../../components/SmallBanner/SmallBanner";

const slides = [
  {
    id: "1",
    title: "Eshwari Kriya",
    subTitle: "Celebrate Life",
    desc: [],
    bannerImg: "banner.png",
  },
  {
    id: "2",
    title: "Eshwari Kriya",
    subTitle: "On the mind level",
    desc: [
      {
        id: "1",
        content: "Reduces mental fatigue (strain)",
      },
      {
        id: "2",
        content: "Improvises concentration drastically and keeps you focused",
      },
      {
        id: "3",
        content:
          " Keeps you free of stress and psychosomatic disorders caused due to stress",
      },
      { id: "4", content: "Provides contentment and peace of mind" },
      { id: "5", content: "Increases memory,skill and creativity." },
    ],
    bannerImg: "banner-2.png",
  },
];

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
        {/* <div className="m-5 very-small-banner">
          <SmallBanner
            slides={slides}
            bannerClass="pt-0 small-banner-section"
          />
        </div>   */}
        <Footer />
        {/* <ScrollTop /> */}
      </div>
    );
  }
}
