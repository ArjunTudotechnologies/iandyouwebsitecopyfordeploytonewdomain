import React, { Component } from "react";
import ProjectsCard from "../../../components/ProjectsCard/ProjectsCard";
import Heading from "../../../components/Heading/Heading";
import { Container, Row, Col } from "react-bootstrap";
  
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
export default class ProjectsSection extends Component {
  render() {
    return (
      <div>
        <section className="pb-0">
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
      </div>
    );
  }
}
