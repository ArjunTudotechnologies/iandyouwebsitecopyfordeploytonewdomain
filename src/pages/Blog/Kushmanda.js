import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Chandraghanta from "../../assets/img/blog/chandraghanta.jpg";
import Comment from "../Blog/Comment";

import { Container, Row, Col } from "react-bootstrap";

export default function Kushmanda() {
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
            <h2 className="title  mb-4">Eshwari Kushmanda</h2>
            <p>
              Chaturthi or the fourth day of Navarathri is of Devi Kushmanda.
              The name Kushmanda is derived from three words - ‘Ku’ (little),
              ‘Ushma’ (warmth or energy) and ‘Anda’ (egg), which means the
              creator of the universe.
            </p>
            <h2 className="sub-title">What to offer: </h2>
            <p>
              Devotees offer Malpua to Maa Kushmanda to improve their intellect
              and decision-making ability.
            </p>
            <h2 className="sub-title">The Antar artha: </h2>
            <p>
              Ku, Ushma and Anda - a little energy will form Thoughts and
              emotions in the mind such thoughts and emotions will settle in our
              own memory knowingly or unknowingly , such stuffed memories are
              seeds for our decisions because most of the time people make
              decisions based on memories , memories are the bank of all kinds
              of good, bad and ugly, it is said that 'the thoughts lead to an
              action, intentions materializes' and the fruits depends on which
              kind of decision you have made out of good, bad or ugly, but the
              thoughts generated Through tapasya make a sadhak develop
              Intelligence, an ability to discriminate and enhance Intuitive
              Intelligence with such thoughts, intentions are the form of seeds
              too, these are spiritual, whereas the previous one out of memory
              is material Psychic impressions.
            </p>
            <p>
              Kushmandini means the energy or Smriti which carries such Psychic
              impressions, material or spiritual in the form of thoughts and
              emotions, which she carries in her womb, which is in the form of
              seeds.
            </p>
          </Col>
          <Col md={12} className="mt-5">
            <p>
              We will see in other dimensions, Kushma means Pumpkin which has
              thousands of seeds in it and each seed is capable of producing
              hundreds of Pumpkins, again each Pumpkin is capable of producing
              thousand of seeds, then on from seeds to Pumpkins and Pumpkins to
              Seeds the vicious cycle repeats there is no end.
            </p>
            <p>
              The divine mother Kushmandini means the holder of Five types of
              memories from Physical to Elementary memory and the one who gives
              birth to it is Devi, she is the Womb of our Psychic impression
              which gives a new birth - so she is a creator of cosmos, this
              objective world also us humans and all other creatures, in our
              subjective world she will create good, bad and ugly thoughts and
              feelings which you deserve.
            </p>
            <p>So it is as said in Sree Lalita Sahasranamam Stotra</p>
            <h2 className="special-title ttext-center">
              <Comment />
              Vishwagarbha swarnagarbha varada vagadhishwari
              Dhyanagamyaparichedya gynanada gynanavigraha <Comment /> LSN:127
            </h2>
            <p>
              Kushmandini the energy of Smriti carries such Psychic impressions
              in the form of thoughts and emotions in her womb in the form of
              seeds.
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
