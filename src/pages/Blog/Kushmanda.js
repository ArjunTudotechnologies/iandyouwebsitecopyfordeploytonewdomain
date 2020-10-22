import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import kushmanda from "../../assets/img/blog/kushmanda.jpg";

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
              src={kushmanda}
              className="img-fluid  shadow"
              width="100%"
            />
          </Col>
          <Col md={6} className="">
            <h2 className="title  mb-4">Eshwari Kushmanda</h2>
            <p>
              Chaturthi or the fourth day of Navaratri is of Devi Kushmanda. The
              name Kushmanda is derived from three words - ‘Ku’ (little),
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
              Ku, Ushma and Anda - a little energy will form thoughts and
              emotions in the mind, such thoughts and emotions will settle in
              our own memory knowingly or unknowingl, such stuffed memories are
              seeds for our own decisions because most of the time people make
              decisions based on memories, memories are the bank of all kinds of
              good, bad and ugly memories, so it is said that thoughts lead to
              actions and intentions materialize, the fruit depends on which
              kind of decision you have made either good, bad or ugly, but only
              from the thoughts through tapasya a sadhak can develop
              Intelligence, an ability to discriminate and Intuitive
              Intelligence from thoughts and intentions come in the form of
              seeds too , these are called as spiritual impressions and the
              previous one out of memory is material Psychic impressions.
            </p>
            <p>
              Kushmandini means the energy or Smriti which carries such Psychic,
              material or spiritual impressions in the form of thoughts and
              emotions, which she carries in her womb in the form of seeds.
            </p>
          </Col>
          <Col md={12} className="mt-5">
            <p>
              We will see this in another dimension, Kushma means Pumpkin which
              has thousands of seeds in it and each seed is capable of producing
              hundreds of Pumpkins, again each Pumpkin is capable of producing
              thousands of seeds, again from seeds to Pumpkins and Pumpkins to
              Seeds, the vicious cycle repeats there is no end. The divine
              mother Kushmandini means the holder of our Five types of memories
              from Physical to Elementary memory and the one who gives birth to
              it is Devi, she is the Womb of our Psychic impressions which gives
              new birth so she is the creator of cosmos in Mahat, this objevtive
              world and in the meantime all us people and all creatures, in our
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
              Kushmandini is the energy of Smriti that carries such Psychic
              impressions in the form of thoughts and emotions in her womb in
              the form of seeds.
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
              &nbsp;&nbsp;&nbsp;Jai Guru Dev...
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
