import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Chandraghanta from "../../assets/img/blog/chandraghanta.jpg";

import { Container, Row, Col } from "react-bootstrap";

export default function Skandmata() {
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
            <h2 className="title mt-4 mb-4">Eshwari Skandmata</h2>

            <p>
              Goddess Skandmata who is worshipped on the fifth day is also known
              as Panchami. Skandmata is a four-armed deity, who carries a lotus
              in two of her arms with a sacred Kamandalu and a bell in the other
              two. She also carries a little Kartikeya on her lap and because of
              this Kartikeya is also known as Skanda. She is seated on a lotus.
              <br />
              <br />
              <b>What to offer:</b> Bananas are the favourite fruit of Goddess
              Skandmata.
            </p>

            <p>
              Skanda Mata - Is such energy which is capable to give birth to our
              Will and Wish which are in the form of Thoughts or Emotions or in
              Subtler form as Intention.
            </p>
            <p>
              The energy which gives birth or makes a sadhak to Materialize
              his/her Intentions.{" "}
            </p>
            <p>
              The Intentions, be it Material or Spiritual , it can be Bhoga or
              Moksha, what you sow so shall you reap.
            </p>
            <p>
              The two Lotuses in her hands symbolizes both Bhoga and Moksha-
              Material and Spiritual attainments as said in /RudraYamala:-
              Bhogas cha Mokshascha Karaschaiva/ The sadhak can materialize
              both.
            </p>

            <p>
              The bell and Kamandalu indicates that alertness and awareness when
              one has well trained mind or is Good in Tapasya, he / she can
              generate good intensions , good thoughts and good emotions with
              that they can lead good lives, Holistic lives.{" "}
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
