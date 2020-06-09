import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import RegistrationForm from "../../../components/RegistrationForm/RegistrationForm";
import RegistrationSliderCard from "../../../components/RegistrationSliderCard/RegistrationSliderCard";


export default class TwitterSection extends Component {
  render() {
    return (
      <div className="mt-5 mb-5">
        <Container fluid>
          <Row>
            <Col md={12} lg={12} xl={4}>
              <RegistrationSliderCard
                title="Eshwari Kriya, Celebrate Life"
                subtitle="Regular practice of Eshwari Kriya:"
                desc="Eshwari Kriya is designed on the base of profound yogic scientific knowledge the
                knowledge taken from the good old scripture called Vigyan Bhirava Tantra a chapter
                from Rudra Yamala Tantra here, Vigyan means science, Bhirava means
                Transcendental consciousness and the tantra literally means the technology or a
                technique."
              />
            </Col>
            <Col md={12} lg={7} xl={4} className="br-3">
              <RegistrationForm />
            </Col>
            <Col md={12} lg={5} xl={3} className="text-center">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="saurabhnemade"
                options={{ height: 600,width:350 }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
