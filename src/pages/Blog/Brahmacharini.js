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
          <Col md={6} className=" mb-5">
            <h2 className="title mb-4">
              Eshwari Brahmacharini(Superficial meaning)
            </h2>
            <p>
              The second day of Navrathri is dedicated to Goddess Brahmacharini.
              The goddess walks bare feet with a rudraksh mala in one hand and a
              sacred Kamandalu in the other. The meditative form of this goddess
              symbolizes Goddess Parvati when she engaged in her deep meditation
              to please Lord Shiva.
            </p>
            <p>
              <b>What to offer:</b> Goddess Brahmacharini is offered sugar for
              the longevity of the family members.
            </p>

            <p>
              <b>The Antar artha:</b>
            </p>

            <p>
              Brahma means absolute universal reality, Chari means the one who
              walks towards such reality, that means a Sadhak here.
            </p>
            <p>
              Rudraksh and Kamandalu symbolizes Tapasya / Austerity , Tapasya in
              5 levels Physical, Verbal , Mental , Emotional and even in the
              Energy level or the best simple method is being a sadhak one who
              is regular in his/her sadhana, implementation of the knowledge
              gained from Guru, having faith on his Guru and Sadhana and engages
              oneself in self less service, Brahma charini blesses such a
              sadhak, as she literally means the ability to perform austerity.
            </p>
            <p>
              The Eshwari is your Mind , your Intellect, your Memory , your very
              Ego and even Your Self , one need grace and blessings of Mother or
              else one can't perform Tapasya - Austerity, the secret to which is
              the Strength and Power to perform Austerity which is bestowed by
              divine Mother, she is your 25 Tatvas.
            </p>
            <p>
              <b>so it said in the Sree Lalitha Sahasranama Stotram</b>
            </p>
            <h3 className="special-title text-center">
              "Mano-rupekshu kodanda pancha tanmatra sayaka Nijaruna prabha-pura
              majabhramhanda mandala" LSN-03
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
