import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import imageBhramhacharini from "../../assets/img/blog/brahmacharini.jpg";
import { Container, Row, Col } from "react-bootstrap";
import Comment from "../Blog/Comment";
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
              The second day of Navarathri is dedicated to Goddess
              Brahmacharini. The goddess walks bare feet with a rudraksh mala in
              one hand and a sacred Kamandalu in the other. The meditative form
              of this goddess symbolizes Goddess Parvati when she is engaged in
              her deep meditation to please Lord Shiva.
            </p>
            <h2 className="sub-title">What to offer:</h2>
            <p>
              Goddess Brahmacharini is offered sugar for the longevity of the
              family members.
            </p>
            <h2 className="sub-title">The Antar artha:</h2>
            <p>
              Brahma means an absolute universal reality or consciousness ,
              Chari means the one who walk towards such reality, that means a
              Sadhak, A Sadhak must be a Brahma chari , the one who walks
              towards it, the journey is called tapasya , tapasya means one who
              is engaged in Body, Mind and Emotional management, such management
              is called Tapasya, which I always impart to sadhaks during Eshwari
              kriya workshop.
            </p>
            <p>
              Devi Eshwari Bramhacharini symbolically holding Rudraksh and
              Kamandalu which denotes Tapasya / Austerity , she is setting an
              example to us that being a cosmic mother, the mother of cosmic
              creation and the creator of trinity, she has come down to the
              level of a sadhak to uplift him/her.
            </p>
            <p>
              The Tapasya can be done in 5 levels or five ways those are
              Physical, Verbal , Mental , Emotional and even on the Energy level
              so in Sahasranama it said that Pancha Yagna Priya because Tapasya
              is a Yagna, if you go through Bagavat Geeta Krishna speaks about
              many types of Yagna or the simple best method to do Tapasya is to
              be regular in your Sadhana, implement the knowledge which you have
              gained by Sri Guru, have faith on Sri Guru and engage in self less
              Service.
            </p>
          </Col>
          <Col md={12}>
            <p>
              So Brahma charini literally means the ability to perform
              austerity, Eshwari is your Mind , Your Intellect, Your Memory ,
              your very Ego and Even Your Self, one need grace and blessings of
              Divine Mother or else one can't perform Tapasya, you should know
              the secret the secret is The Strength and The Power to perform
              Austerity and in the mean time she is your 25 shakthis + 11 Shivas
              + 01 Para Shakti Tatvas, so
            </p>
            <b>
              The ability to perform Tapasya is possible with the blessings of
              Bramhacharini or in other dimension The Tapasya itself is Divine
              Mother Eshwari Brahma charini
            </b>
            <br />
            <br />
            <b>So it is said in the Sree Lalitha Sahasranama Stotram</b>
            <br />
            <br />
            <h2 className="special-title text-center">
              <Comment />
              Mano-rupekshu kodanda pancha tanmatra sayaka Nijaruna prabha-pura
              majabhramhanda mandala
              <Comment />
              LSN-03
            </h2>
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
