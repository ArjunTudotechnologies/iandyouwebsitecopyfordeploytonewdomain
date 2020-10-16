import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import imageBhramhacharini from "../../assets/img/blog/brahmacharini.jpg";
import { Container, Row, Col } from "react-bootstrap";

export default function Brahmacharini() {
  return (
    <div>
      <Header />
      <Container>
        <Row className="mt-5 mb-5">
          <Col md={6}>
            <img
              alt="Unfold Ganesha"
              src={imageBhramhacharini}
              className="img-blog-details shadow"
            />
          </Col>
          <Col md={6} className="mt-5 mb-5">
            <h2 className="title mt-4 mb-4">
              Eshwari Brahmacharini(Superficial meaning)
            </h2>
            <p>
              The second day of Navarathri is dedicated to Goddess
              Brahmacharini. The goddess walks bare feet with a rudraksh mala in
              one hand and a sacred Kamandalu in the other. The meditative form
              of this goddess symbolizes Goddess Parvati when she is engaged in
              her deep meditation to please Lord Shiva.
            </p>
            <p>
              <b>What to offer:</b> Goddess Brahmacharini is offered sugar for
              the longevity of the family members.
            </p>

            <p>
              <b>The Antar artha:</b>
            </p>

            <p>
              Brahma means absolute universal reality , Chari means the one who
              walks towards that reality, a Sadhak . Here Rudraksh and Kamandalu
              symbolizes Tapasya / Austerity , Tapasya in 5 levels Physical,
              Verbal , Mental , Emotional and even in Energy level or the best
              simple method is being a sadhak one who is regular in his/her
              sadhana, implements the knowledge which is gained from Guru, has
              faith on his Guru and Sadhana and engages oneself in self less
              service. Brahmacharini literally means the ability to perform
              austerity, the power and the strength to perform it.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
