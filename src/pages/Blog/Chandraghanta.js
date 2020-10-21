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
              The third day of Navarathri is of Goddess Chandraghanta. She is a
              fierce 10-armed goddess with a crescent moon on her forehead,
              which gives her the name Chandraghanta. She rides on a tiger to
              destroy all evil and wicked.
              <br />
              <br />
              <h2 className="sub-title">What to offer:</h2> The ferocious
              goddess is pleased with Kheer. She is known to drive away all
              pains.
            </p>

            <h2 className="sub-title">The Antar artha:</h2>
            <p>
              Chandrama ManasoJathah - Purusha suktha says , Chandra means Mind
              , Ghanta means Bell, is a symbol of alertness and Awareness,
              Chandra is always recognized with our own mind, The mind which is
              unstable in nature, unstable mind cannot achive anything in life,
              to make that mind stable from (Pashu Bhava) animal instinct mind,
              which is unstable to divine (Divya Bhava),Divya bhava is always
              stable, aware and alert in nature, to develop such mind, the mind
              needs certain level of strength, the strength to control the
              negative intentions, emotions and thoughts which are the main
              causes for all kind of evil acts or demon acts.
            </p>
            <p>
              Chandraghanta is such grace of divine mother Eshwari , which
              provides great strength to the mind so that the mind can come
              under control of Budhi and brings stability and calmness in it,
              the 3rd day is meant to control and destroy the inner Evils or
              Demons which are developed by our own untrained mind set.
            </p>
          </Col>
          <Col md={12} className="mt-5">
            <p>
              As said Tapasyas are like Yama Panchaka , Niyama Panchaka or
              Shama, Dhama and Titiksha etc, is needed to train and strengthen
              the untrained mind , a strong well trained mind only can achieve
              great success, to achive such success in the field of Mundane or
              spirituality, mind should have alertness and awareness, to get
              such strong mind it is possible only with her grace and blessings
              , in other dimension a Strong Mind.- Mano bala itself is Devi
              Chandraghanta.
            </p>

            <p>
              Not only a Strong Mind{" "}
              <b>
                even the seven levels of the mind and seven levels of
                Perceptions also is Devi Chandraghanta
              </b>{" "}
              so it is said in Sree Lalitha Sahasranama Stotram
            </p>

            <h2 className="special-title mb-4 text-center">
              <Comment />
              Supta pragynatmika turya sarvavasdhavivarjita Prushtikartri
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
              &nbsp;&nbsp;&nbsp;Jai Guru Dev
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
