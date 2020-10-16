import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Chandraghanta from "../../assets/img/blog/chandraghanta.jpg";

import { Container, Row, Col } from "react-bootstrap";

export default function BlogDetails() {
  return (
    <div>
      <Header />
      <Container>
        <Row className="mt-5 mb-5">
          <Col md={6}>
            <img
              alt="Chandraghanta"
              src={Chandraghanta}
              className="img-fluid  shadow"
            />
          </Col>
          <Col md={6} className="mt-5">
            <h2 className="title mt-4 mb-4">Goddess Chandraghanta</h2>

            <p>
              The third day of Navarathri is of Goddess Chandraghanta. She is a
              fierce 10-armed goddess with a crescent moon on her forehead,
              which gives her the name Chandraghanta. She rides on a tiger to
              destroy all evil and wicked.
              <br />
              <br />
              <b>What to offer:</b> The ferocious goddess is pleased with Kheer.
              She is known to drive away all pains.
            </p>

            <p>
              <b>The Antar artha:</b>
              Chandra is always recognized with our own mind which is unstable
              in nature, to make the mind stable from animal instinct to divine,
              the mind needs certain level of strength, strength to control
              negative intentions, emotions and thoughts which are the main
              cause for all kinds of evil or demon acts, Chandraghanta is such
              grace of divine mother Eshwari, which provides great strength to
              the mind so that the mind can come under control and bring
              stability and calmness to it, the 3rd day is meant to control and
              destroy the inner Evils or Demons .
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
