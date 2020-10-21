import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import kaalratri from "../../assets/img/blog/kaalratri.jpg";
import Comment from "../Blog/Comment";

export default function Kaalrathri() {
  return (
    <div>
      <Header />
      <Container>
        <Row className="mt-5 mb-5">
          <Col md={6}>
            <img
              alt="Chandraghanta"
              src={kaalratri}
              className="img-fluid  shadow"
            />
          </Col>
          <Col md={6} className="">
            <h2 className="title  mb-4">Goddess Kaalrathri</h2>
            <p>
              Saptami or the seventh day of Navarathri is of Goddess Kalarathri.
              As per legends she sacrificed her skin colour and embraced a dark
              complexion to kill demons. She is a four-armed deity who rides a
              donkey, carries a sword, a trident, and a noose. She has a third
              eye on her forehead that is believed to contain the entire
              universe.
            </p>
            <h2 className="sub-title">What to offer:</h2>
            <p>
              Offer Jaggery as prasad to Devi Kaalratri for relief from pains,
              obstacles and to bring happiness.
            </p>
            <h2 className="sub-title">The Antar Artha - Inner Meaning :</h2>
            <p>
              Though Kalarathri is formless not only kalarathri, all the divine
              mother's Nine forms are formless, what we can see on images or in
              the form of idols are the personification and symbolic
              representation of her tattvas - Principles, In this form of
              formless consciousness the Donkey symbolizes Ignorance and the
              Effort that is Inertia in nature, Trident symbolizes Triguna -
              Satho, Rajo and Tamas and the Third eye symbolizes knowledge.
            </p>
            <p>
              Here both Inertia and effort, Knowledge and Ignorance, beyond
              Gunas( Gunaathitha) and Triguna exists in this form.
            </p>
            <p>
              So now, one can ask me how come both Inertia and effort, Knowledge
              and Ignorance, Beyond Gunas( Gunaathitha) and Triguna exists in
              this form ? Yes it is, one can experience it in this state, i will
              give an example for Knowledge and Ignorance - This is the beauty
              of consciousness, here both Knowledge and Ignorance both co-exists
            </p>
            <p>
              you can observe that you may know many things but in the meantime
              you may not know everything for example we know that we have hair
              on our head but we do not know how many, knowing we have hair on
              head might be knowledge but not knowing how many is Ignorance
              right ?
            </p>
          </Col>
          <Col md={12} className="mt-5">
            <p>
              So she is the one who removes the Ignorance and Inertia in the
              meantime she leaves a little of Ignorance and Inertia which makes
              the sadhak feel that Duality and mean time she is the one who
              removes that Duality too, It's amazing so it is said in Sree
              Lalita Sahasranama Stotra.
            </p>
            <h2 className="special-title">
              <Comment />
              Ashtamurtirajajaitri lokayatra vidhaeini Ekakini bhumarupa
              nirvaita dvaitavarjita
              <Comment /> LSN:131
            </h2>
            <p>
              Kalarathri is a dark matter of the cosmos and our existence, She
              has Triguna and she is Trigunateetha, which has Knowledge and
              Ignorance along with that Effort and Inertia,but why ? because
              opposite values complement each other.
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
