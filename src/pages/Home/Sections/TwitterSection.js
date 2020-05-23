import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import RegistrationForm from "../../../components/RegistrationForm/RegistrationForm";
import RegistrationSliderCard from "../../../components/RegistrationSliderCard/RegistrationSliderCard";


export default class TwitterSection extends Component {
  render() {
    return (
      <div className="mt-5">
        <Container fluid>
          <Row>
            <Col md={4}>
              <RegistrationSliderCard
                subtitle="Benefits of the Sriyog HaYTT:"
                title="Sri Yog Teacher training"
                desc="In the magnificent setting of the busy life commence to the soulful wisdom of yogic science, under the esteemed guidance of venerated Sri Prasad Guruji get yourself introduced to the world of spirituality and wellness by submerging deep into the holistic learning of yoga. "
              />
            </Col>
            <Col md={4}>
              <RegistrationForm />
            </Col>
            <Col md={3} className="text-right">
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
