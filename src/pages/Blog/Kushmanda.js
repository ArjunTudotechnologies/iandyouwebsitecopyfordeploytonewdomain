import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Chandraghanta from "../../assets/img/blog/chandraghanta.jpg";

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
          <Col md={6} className="mt-5">
            <h2 className="title mt-4 mb-4">Eshwari Kushmanda</h2>

            <p>
              Chaturthi or the fourth day of Navarathri is of Devi Kushmanda.
              The name Kushmanda is derived from three words - ‘Ku’ (little),
              ‘Ushma’ (warmth or energy) and ‘Amnda’ (egg), which means the
              creator of the universe.
              <br />
              <br />
              <b>What to offer:</b> Devotees offer Malpua to Maa Kushmanda to
              improve their intellect and decision-making ability.
            </p>

            <p>
              <b>The Antar artha:</b>
              Ku, Ushma and Anda - a little energy will form thoughts and
              emotions in the mind, such thoughts and emotions will settle in
              our own memory, such stuffed memories are seeds of our decision,
              the thoughts lead to actions, intention materializes the thoughts,
              through tapasya a sadhak can develop his/her own intentions such
              intentions are the form of seeds.
            </p>
            <p>
              Kushmandini means the energy or Smriti which carries such Psychic
              impressions in the form of thoughts and emotions in her womb in
              the form of seeds.
            </p>
            <p>
              Kushma also means Pumpkin which has thousands of seeds in it and
              each seed is capable of producing hundreds of Pumpkins, again each
              Pumpkin is capable to produce thousand of seeds and again from
              seeds, Pumpkins, the vicious cycle repeats there is no end.
            </p>
            <p>
              The divine mother Kushmandini means the holder of Five types of
              memories from Physical to Elementary memory and the one who give
              birth to it, she is the Womb of our Psychic impression which gives
              a new birth - so she is a creator of cosmos and through you she
              will create good and the bad which you deserve
            </p>
            <p>so it is said in Sree Lalita Sahasranamam Stotra</p>
            <h3 className="special-title text-center">
              "Vishwagarbha swarnagarbha varada vagadhishwari
              Dhyanagamyaparichedya gynanada gynanavigraha" LSN:127
            </h3>
            <p>
              Kushmandini the energy of Smriti which carries such Psychic
              impressions in the form of thoughts and emotions in her womb in
              the form of seeds
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
