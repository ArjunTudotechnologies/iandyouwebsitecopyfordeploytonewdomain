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
              The third day of Navratri is of Goddess Chandraghanta. She is a
              fierce 10-armed goddess with a crescent moon on her forehead,
              which gives her the name Chandraghanta. She rides on a tiger to
              destroy all evil and wicked.
              <br />
              <br />
              <b>What to offer:</b> The ferocious goddess is pleased with Kheer.
              She is known to drive away all pains
            </p>

            <p>
              <b>The Antar artha:</b>
              Chandra means Mind , Ghanta means Bell a symbol of alertness ,
              Chandra is always recognized with our own mind which is unstable
              in nature, to make that mind stable from (Pashu Bhava) animal
              instinct to divine (Divya Bhava), the mind needs certain level of
              strength , strength to control the negative intentions, emotions
              and thoughts which are the main cause for all kinds of evil or
              demon acts.
            </p>
            <p>
              Chandraghanta is such grace of divine mother Eshwari which
              provides great strength to mind so that the mind can come under
              control and bring stability and calmness to it, the 3rd day is
              meant to control and destroy the inner Evils or Demons.
            </p>
            <p>
              As said before Tapasya like Yama Panchaka , Niyama Panchaka or
              Shama, Dhama etc... one needs to train and strengthen the mind, a
              strong well trained mind only can achieve great success which is
              alert and aware in nature, such strong mind is possible through
              her grace and blessings, in other dimension The Mano bala itself
              is Devi Chandraghanta not only Mind even the seven levels of the
              mind and seven Perceptions are also Devi Chandraghanta, so it is
              as said in Sree Lalitha Sahasranama Stotram
            </p>
            <h3 className="special-title text-center">
              "Supta pragynatmika turya sarvavasdhavivarjita Prushtikartri
              bramharupa goptri govindarupini" LSN:64
            </h3>
            <p>
              <b>
                <span
                  clasName="lora-text"
                  style={{ fontFamily: "Lora", fontSize: "20px" }}
                >
                  - Sri Prasad
                </span>
              </b>
              <br />
              &nbsp;&nbsp;&nbsp;Jai Guru Dev
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
