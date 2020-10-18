import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import noimage from "../../assets/img/blog/noimage.png";

export default function Kaalrathri() {
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
            <h2 className="title mt-4 mb-4">Goddess Kaalrathri</h2>

            <p>
              Saptami or the seventh day of Navarathri is of Goddess Kaalrathri.
              As per legends she sacrificed her skin colour and embraced a dark
              complexion to kill demons. She is a four-armed deity who rides a
              donkey, carries a sword, a trident, and a noose. She has a third
              eye on her forehead that is believed to contain the entire
              universe.
              <b>What to offer:</b>Offer Jaggery as prasad to Devi Kaalratri for
              relief from pains, obstacles and to bring happiness.
            </p>

            <p>
              <b>The Antar artha - Inner Meaning</b>
              She is pitch dark in color, when a sadhak enters into her state of
              consciousness during Meditation they will perceive a dark color,
              if you see the reality of the cosmos it is dark, when you look at
              a sky in the absence of Sun you can see darkness, only at the
              stars or planets we can see the light or else whole existence is
              dark, which is known as Dark matter, just like the cosmos even we
              too have the dark matter in our consciousness that is called
              Kalarathri.
            </p>
            <p>
              Here Donkey symbolizes Ignorance and Effort which is Inertiatic in
              nature, Trident symbolizes Triguna - Satho, Rajo and Tamas and the
              Third eye symbolizes knowledge , so one can ask me how come
              Knowledge and Ignorance both can exist together ? This is the
              beauty of consciousness, here both Knowledge and Ignorance both
              co-exists
            </p>
            <p>
              you can observe that you may know many things but in the meantime
              you may not know everything for example we know that we have hair
              on our head but we do not know how many,
            </p>
            <p>
              so she is the one who removes the Ignorance and Inertia meantime
              she leaves a little of Ignorance and Inertia which makes the
              sadhak feel that Duality,
            </p>
            <p>so it is said in Sree Lalita Sahasranama Stotra</p>

            <h3 className="special-title text-center">
              "Ashtamurtirajajaitri lokayatra vidhaeini Ekakini bhumarupa
              nirvaita dvaitavarjita" LSN:131
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
