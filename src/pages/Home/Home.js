import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CovidBanner from "../../components/CovidBanner/CovidBanner";
import { WOW } from "wowjs";
import EventsSection from "./Sections/EventsSection";
import ProgramsSection from "./Sections/ProgramsSection";
import VideoSection from "./Sections/VideoSection";
import TestimonialsSection from "./Sections/TestimonialsSection";
import TwitterSection from "./Sections/TwitterSection";
import IandyouCard from "../../components/IandyouCard/IandyouCard";

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
        <IandyouCard/>
        <EventsSection />
        <VideoSection />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/> <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2 className="text-center">Comming Soon</h2>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <TestimonialsSection />
       
        <TwitterSection />
        <CovidBanner />
        <ProgramsSection />
        <Footer />
      </div>
    );
  }
}
