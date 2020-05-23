import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import ProgramsBig from "../../../components/Programs/ProgramsBig";
import ProgramsSmall from "../../../components/Programs/ProgramsSmall";

export default class ProgramsSection extends Component {
  render() {
    return (
      <Container fluid className="position-relative">
        <Row>
          <Col md={6} className="p-0">
            <ProgramsBig />
          </Col>
          <Col md={6}>
            <Row>
              <Col md={12} className="p-0">
                <ProgramsSmall />
              </Col>
              <Col md={12} className="p-0">
                <ProgramsSmall />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
