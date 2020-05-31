import React, { Component } from "react";
import ProjectsCard from "../../components/ProjectsCard/ProjectsCard";
import Header from "../../components/Header/Header";
import Heading from "../../components/Heading/Heading";
import Footer from "../../components/Footer/Footer";
import SmallBanner from "../../components/SmallBanner/SmallBanner";
import { Container, Row, Col } from "react-bootstrap";

const slides = [
  {
    id: "1",
    title: "Eshwari Kriya",
    subTitle: "Celebrate Life",
    desc: [],
    bannerImg: "kids-5.png",
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
    bannerImg: "kids-5.png",
  },
  {
    id: "3",
    title: "Eshwari Kriya",
    subTitle: "On the physical level",
    desc: [
      {
        id: "1",
        content: "Keeps you healthy and fit.",
      },
      {
        id: "2",
        content: "Stimulates energy throughout the body and aids inner balance",
      },
      {
        id: "3",
        content:
          "Rejuvenates tired cells, helping in reducing early signs of aging",
      },
      {
        id: "4",
        content:
          "Keeps you active throughout the day and maintains energy level for 16 hours in optimum",
      },
      { id: "5", content: "Strengthens Immunity" },
    ],
    bannerImg: "kids-5.png",
  },
];

const projects = [
  {
    id: "1",
    title: "I And You Green",
    smallTitle: "Projects",
    link: "#",
  },
  {
    id: "2",
    title: "I And You She's Divine",
    smallTitle: "Projects",
    link: "#",
  },
  {
    id: "3",
    title: "Eshwari Bala Vidhya Mandira",
    smallTitle: "Projects",
    link: "#",
  },
  {
    id: "4",
    title: "I And You Vidhya",
    smallTitle: "Projects",
    link: "#",
  },
  {
    id: "5",
    title: "Sanskar",
    smallTitle: "Projects",
    link: "#",
  },
  {
    id: "6",
    title: "I And You Ayurveda",
    smallTitle: "Projects",
    link: "#",
  },
  {
    id: "7",
    title: "Monument Restoration Project",
    smallTitle: "Projects",
    link: "#",
  },
  {
    id: "8",
    title: "I And You Sattva",
    smallTitle: "Projects",
    link: "#",
  },
];

export default class Projects extends Component {
  render() {
    return (
      <div>
        <Header />
        <SmallBanner
          slides={slides}
          bannerClass="pt-0 small-banner-section full-height"
        />
        <section>
          <Container>
            <Heading smalltitle="Projects" title="Our Projects" />
            <Row>
              {projects.map(function (slide) {
                return (
                  <Col md={4}>
                    <ProjectsCard
                      key={slide.id}
                      title={slide.title}
                      smallTitle={slide.smallTitle}
                      link={slide.link}
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    );
  }
}
