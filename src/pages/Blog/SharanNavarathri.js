import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import shailputri from "../../assets/img/blog/shailputri.jpg";
import Comment from "../Blog/Comment";
import { Container, Row, Col } from "react-bootstrap";
import { FaSlash } from "react-icons/fa";
export default function BlogDetails() {
  return (
    <div>
      <Header />
      <Container>
        <Row className="mt-5 mb-5">
          <Col md={6}>
            <img
              alt="Unfold Ganesha"
              src={shailputri}
              className="img-blog-details shadow"
            />
          </Col>
          <Col md={6} className="mt-5 mb-5">
            <h2 className="title   mb-4">SHARAN NAVARATHRI</h2>
            <p>
              Sharan Navrathri is a nine-days Celebration in which nine forms of
              Goddess Eshwari are worshipped.
            </p>
            <p>
              It is one of the most significant celebration in Shaktha
              traditions and celecrated across India with great fervor.
            </p>
            <p>
              There are a total of <b>four Navrathris</b> in a year, but only
              two - Chaitra Navarathri and Sharad Navarathri are celebrated
              widely in different parts of the country, where this same festival
              is celebrated differently. Though they worship the same deity,
              performing different rituals in different places.
            </p>
            <p>
              It is said in the Chandika Sapthashathi - In Durga Stotra -11.
            </p>
            <h3 className="special-title text-center">
              <Comment />
              Badhrada BadhraKali cha Sarva lokha bhayankari
              <FaSlash className="rotate-slash" /> Grahme grahme grahma devi
              Gruhadevi gruhe gruhe
              <Comment />
            </h3>
            <p>
              She is the one we can see at every villages as a Village Deity and
              she is the one where we can see her in our home as a Family Devi
              or Clan Deity.
            </p>
            <p>
              As I often say that our festivals are for Celebration ,
              Realization and for Liberation, Navarathri has a very important
              role to play of a Shaktha sadhak, to realize the Life and its
              purpose, which is very much necessary to lead a Holistic life.
            </p>
          </Col>
          <Col md={12} className="mt-5">
            <p>
              In Navarathri the sadhak will celebrate and do the sadhana for
              realization - Sadhanas like Eshwari kriya and Dhyana or Eshwari
              Srividhya Sadhana along with Udgamana Sadhana (Silence /Fasting)
              for all the nine days, chanting Sree lalitha Sahasranama,
              Trishathi, Kadgamala parayana and to apply the knowledge tips in
              the day to day activities . ‘Navarathri’ in Sanskrit means ‘nine
              nights’ and also Nava means New and Ratri means Darkness or the
              reality of the cosmos , on these nine nights, Sadhaks do their
              prescribed/willed, Nine different Sadhanas to realize his/her true
              self and the existence of Eshwari and to offer special prayers to
              the ‘Nine Forms of Maa Eshwari’ to lead Holistic lives, Eshwari
              means cosmic mother, creator of the Universe and the Trinities
            </p>
            <h3 className="special-title text-center">
              <Comment />
              Prathamam Shailputri ch dwitiyam brahmcharini. Tritiyam
              Chandrghanteti Kushmandeti Chaturthakam. Panchamam Skandmateti
              Shashtam Katyayniti ch. Saptamam Kalratri Maha Gauri ch Ashtmam.
              Navmam Sidhidatri cha Nav Durga Prakirtitah
              <Comment />
            </h3>
            <p>Saptha shathi-Chandi kavacha -03</p>
            <p>
              The Nine forms of Devi Eshwari has her own significance and the
              methods of her worship lay in Kaulava tantra , Mishra and Samaya
              achara in both Vedic and profound tantric mystic methods. There
              are three types of meaning or in three level one can explain her
              methods of worship, 1. Bahya artha - Superficial meaning , 2.
              Antar artha - Inner meaning , 3. Gudha artha - Mystic meaning
              let's check the two levels, the 3rd one is a mystic way and let me
              teach or explain it some other time.
            </p>
            <p>
              There are three types of meaning or in three level one can explain
              her methods of worship, 1. Bahya artha - Superficial meaning , 2.
              Antar artha - Inner meaning , 3. Gudha artha - Mystic meaning
            </p>

            <p>
              let's check the two levels, the 3rd one is a mystic way and let me
              teach or explain it some other time.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
