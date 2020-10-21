import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import mahagauri from "../../assets/img/blog/mahagauri.jpg";
import Comment from "../Blog/Comment";

export default function Mahagauri() {
  return (
    <div>
      <Header />
      <Container>
        <Row className="mt-5 mb-5">
          <Col md={6} className="text-center">
            <img
              alt="Chandraghanta"
              src={mahagauri}
              className="img-fluid  shadow"
            />
          </Col>
          <Col md={6} className="">
            <h2 className="title mb-4">Goddess Mahagauri</h2>
            <p>
              Durga Asthami or the eight-day of Navarathri is dedicated to
              Goddess Mahagauri. She is a four-armed deity who rides on a bull
              or a white elephant. She carries a Trishul and a damru in her
              hands.
            </p>
            <h2 className="sub-title">What to offer:</h2>
            <p>Goddess Mahagauri is offered coconut by devotees.</p>
            <h2 className="sub-title">The Antar Artha - Inner Meaning: </h2>
            <p>
              Maha Gauri is such state of our consciousness where the sadhak can
              perceive Immense bright light during Meditation, it is possible
              when Kundalini shakthi passes through Two Guru Centers at
              forehead, one can experience bright light, that light is said as
              Gauri, Gauri means brightness, Maha Gauri means immeasurable
              brightness{" "}
            </p>
            <p>
              here Devi plays a role of Guru which removes all kinds of effort
              and Inertia, Knowledge and Ignorance even Trigunas too by
              transcending it, this is a pure state of Transcendental
              consciousness.
            </p>
          </Col>
          <Col className="mt-5">
            <p>
              Here symbolically the bull symbolizes stable, un-doubtable pure
              faith which is symbolized as white in color, The Trident in her
              hand symbolizes three Shakthis those are Iccha, Kriya and Jnana
              and the Damaru which is in her fourth hand, symbolizes Awareness.
            </p>
            <p>So it is said in Sree Lalita Sahasranama Stotra</p>
            <h2 className="special-title  text-center">
              <Comment />
              Ichashakti gynashakti kriyashakti svarupini Sarvadhara supratishta
              sadasadrupadharini <Comment /> LSN: 130
            </h2>
            <p>
              She has three shakthis the one who reaches this state, one does
              not need to know anything , this state can be reached only through
              Yoga.
            </p>
            <p>So it is said in Sree Lalita Sahasranama Stotra</p>
            <h2 className="special-title  text-center">
              <Comment />
              Adrushyadrushyarahita vigynatri vedyavarjita Yogini yogada yogya
              yoganandayugandhara <Comment /> LSN:129
            </h2>
            <p>
              In this state, the sadhak perceives him/her- self to be absolutely
              one with the Universal Transcendental Being He/she experiences
              this state to be more valid, more solid and deserving of
              confidence Once sadhak enters into this state, there is no
              question at all of falling from it This is the established state
              of his/her Self, his own Real nature Here, sadhak finds his/her
              Self in the universe
            </p>
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
