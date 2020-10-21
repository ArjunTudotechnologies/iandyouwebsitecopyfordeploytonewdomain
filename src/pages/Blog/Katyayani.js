import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import katyayani from "../../assets/img/blog/katyanani.jpg";
import Comment from "../Blog/Comment";

export default function Katyayani() {
  return (
    <div>
      <Header />
      <Container>
        <Row className="mt-5 mb-5">
          <Col md={6}>
            <img
              alt="Chandraghanta"
              src={katyayani}
              className="img-fluid  shadow"
            />
          </Col>
          <Col md={6} className="mt-5">
            <h2 className="title mt-4 mb-4">Eshwari Katyayani</h2>
            <p>
              The sixth day of Navarathri is dedicated to Goddess Katyayani, who
              is a form of Shakti. Also known as the warrior goddess, Katyayani
              is considered as one of the most violent forms of Goddess Parvati.
              She has four arms and carries a sword. She is the daughter of Sage
              Katyayan and rides on a lion.
            </p>

            <h2 className="sub-title">What to offer:</h2>
            <p>Devotees offer Honey as prasada to Devi Katyayani.</p>
            <h2 className="sub-title">The Antar artha - Inner meaning : </h2>
            <p>
              She is the form of Energy- Shakthi, The energy which is
              all-pervading, but the sadhak perceives as I' myself or the ego
              identity which makes the sadhak to divide his / her perception
              like there are two, one is myself and other one is Divine mother
              or subjective world, it happens in the thoughtless state during
              Meditation, the thoughtless state of mind is not Samadhi many have
              thought that thoughtless means Samadhi, No it is not, this state
              of mind is called Nirvikalpa Mana Stiti which is the holder of all
              kinds thoughts and emotions, one can experience this state when
              they develop distance between the Mind and Thoughts, the witness
              state which makes the sadhak to perceive the distance at which the
              thoughts and emotions are arising, it can be perceived from long
              distances, so that they are not affecting you.
            </p>
          </Col>
          <Col md={12} className="mt-5">
            <p>
              This state of mind is very strong in nature, it's a holder of
              thoughts and emotions, it can transcend those thoughts and with
              her blessings one can destroy Ten demons who exists in us, they
              are 1) Kama (Lust), 2) Krodh (Anger) 3) Lobh (Greed) 4) Moha
              (Attachment), 5) Ahankar (Ego), 6) Abhiniveshan (Fear), 7) Irsha
              (Jealousy), 8) Jadtva (Inertia), 9) Dwesha (Hatred ), 10)
              Paschataap (Guilty) by transcending it, So it is said in Devi
              Puranas that Devi Kathyayani destroys all demons in this form,
              this state of mind is very powerful, it's a field of all
              possibilities, with this state one can destroy the inner demons
              and in the mean time one can experience and ne established in
              Bliss.
            </p>
            <p>So it is said in Sree Lalita Sahasranama Stotra</p>
            <h2 className="special-title text-center">
              <Comment />
              Dikshita daityashamani sarvaloka vashankari Sarvardhadatri savitri
              sachidananda rupini <Comment /> LSN:136
            </h2>

            <p>
              This state of our own consciousness is capable of destroying the
              inner demons and can control the inner world in the form of
              thoughts and emotions, when a Sadhak transcends it he/she can
              experience Bliss.
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
