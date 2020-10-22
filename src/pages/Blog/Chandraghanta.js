import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Chandraghanta from "../../assets/img/blog/chandraghanta.jpg";

import { Container, Row, Col } from "react-bootstrap";
import Comment from "../Blog/Comment";

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
          <Col md={6} className="">
            <h2 className="title  mb-4">Eshwari Chandraghanta</h2>
            <p>
              The third day of Navaratri is of Eshwari Chandraghanta. She is a
              fierce 10-armed goddess with a crescent moon on her forehead which
              gives her the name Chandraghanta. She rides on a tiger to destroy
              all evil and wicked.
            </p>
            <h2 className="sub-title">What to offer:</h2>
            <p>
              The ferocious goddess is pleased with Kheer. She is known to drive
              away all pains.
            </p>
            <h2 className="sub-title">The Antar artha:</h2>
            <p>
              Chandrama Manaso Jathah - Purusha suktha saysso , Chandra means
              Mind , Ghanta means Bell, is a symbol of alertness and awareness,
              Chandra is always recognized with our own mind, the mind which is
              unstable in nature, unstable mind cannot achieve anything in life,
              to make that mind stable meaning transforming it from (Pashu
              Bhava) animal instinct to divine (Divya Bhava) which is stable
              aware and alert in nature, to develop such a mind it needs certain
              level of strength , the strength to control the negative
              intentions, emotions and thoughts which are the main cause for all
              kinds of evil acts or demonic acts.
            </p>
            <p>
              Chandraghanta is such grace of divine mother Eshwari which
              provides great strength to the mind so that the mind can come
              under control of Budhi to bring stability and calmness in it, the
              3rd day is meant to control and destroy the inner Evils or Demons
              which are developed in our own untrained mind set.
            </p>
          </Col>
          <Col md={12} className="mt-5">
            <p>
              As said Tapasyas such ase Yama Panchaka , Niyama Panchaka or
              Shama, Dhama and Titiksha etc, is needed to train and strengthen
              the untrained mind, a strong well trained mind can only achieve
              great success, to achieve success in the field of mundane or
              spiritual world, mind should develop alertness and awareness, to
              get such strong mind it is possible only with her grace and
              blessings, in another dimension, a Strong Mind - Mano bala itself
              is Devi Chandraghanta.
            </p>

            <p>
              Not only a Strong Mind
              <b>
                even the seven levels of the mind and seven levels of
                Perceptions is Devi Chandraghanta{" "}
              </b>
              so it is mentioned in Sree Lalitha Sahasranama Stotram
            </p>

            <h2 className="special-title mb-4 text-center">
              <Comment />
              Supta pragnyatmika turya sarvavasdhavivarjita Prushtikartri
              bramharupa goptri govindarupini
              <Comment /> LSN:64
            </h2>
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
              &nbsp;&nbsp;&nbsp;Jai Guru Dev...
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
