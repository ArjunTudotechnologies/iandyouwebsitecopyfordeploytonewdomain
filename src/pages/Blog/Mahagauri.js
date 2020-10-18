import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import noimage from "../../assets/img/blog/noimage.png";

export default function Mahagauri() {
  return (
    <div>
      <Header />
      <Container>
        <Row className="mt-5 mb-5">
          <Col md={6}>
            <img
              alt="Chandraghanta"
              src={noimage}
              className="img-fluid  shadow"
            />
          </Col>
          <Col md={6} className="mt-5">
            <h2 className="title mt-4 mb-4">Goddess Mahagauri</h2>

            <p>
              Durga Asthami or the eight-day of Navarathri is dedicated to
              Goddess Mahagauri. She is a four-armed deity who rides on a bull
              or a white elephant. She carries a Trishul and a damru in her
              hands.
              <br />
              <br />
              <b>What to offer:</b> Goddess Mahagauri is offered coconut by
              devotees.
            </p>

            <p>
              <b>The Antar artha - Inner Meaning</b>
            </p>
            <p>
              {" "}
              Maha Gauri is such state of our consciousness where the sadhak can
              feel Immense bright light during Meditation, when Kundalini
              shakthi passes through Two Guru Centres one can experience bright
              light
            </p>
            <p>
              here Devi plays a role of Guru which removes all kinds of Inertia
              and Ignorance from the Sadhak.
            </p>
            <p>
              The bull symbolizes stable, un-doubtable faith which is symbolized
              as white in color, The Trident in her hand symbolizes Three
              Shakthis those are Iccha, Kriya and Jnana and the Damaru which is
              in her fourth hand symbolizes Awareness.
            </p>
            <p>So it is said in Sree Lalita Sahasranama Stotra</p>

            <h3 className="special-title text-center">
              "Echashakti gynashakti kriyashakti svarupini Sarvadhara
              supratishta sadasadrupadharini " LSN:130
            </h3>
            <p>
              She has three shakthis the one who reaches this state, one does
              not need to know anything , this state can be reached only through
              Yoga.
            </p>
            <h3 className="special-title">
              "Adrushyadrushyarahita vigynatri vedyavarjita Yogini yogada yogya
              yoganandayugandhara" LSN:129
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
