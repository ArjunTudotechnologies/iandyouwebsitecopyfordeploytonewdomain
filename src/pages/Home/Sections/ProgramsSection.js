import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import ProgramsBig from "../../../components/Programs/ProgramsBig";
import ProgramsSmall from "../../../components/Programs/ProgramsSmall";

export default class ProgramsSection extends Component {
  render() {
    return (
      <section className="pb-0 pt-0">
        <Container fluid className="position-relative">
          <Row>
            <Col md={6} className="p-0">
              <ProgramsBig
                title="SriCare Shopee"
                titleOne="One stop shop for all your daily needs."
              />
            </Col>
            <Col md={6}>
              <Row>
                <Col md={12} className="p-0">
                  <ProgramsSmall
                    image="audio.jpg"
                    title="Explore the Journey Within.. Listen to Guru Puja Audio"
                  />
                </Col>
                <Col md={12} className="p-0">
                  <ProgramsSmall image="vidya.jpg" title="I And You Vidya" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
