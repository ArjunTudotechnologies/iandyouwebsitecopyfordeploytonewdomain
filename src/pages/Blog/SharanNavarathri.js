import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import shailputri from "../../assets/img/blog/shailputri.jpg";

import { Container, Row, Col } from "react-bootstrap";

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
            <h2 className="title mt-4 mb-4">SHARAN NAVARATHRI</h2>
            <p>
              Sharan Navarathri is a nine-days Celebration in which nine forms
              of Goddess Eshwari are worshipped. It is one of the most
              significant celebration of Shaktha traditions followed across
              India with great fervour. There are a total of four Navarathris in
              a year, but only two - Chaitra Navratri and Sharad Navratri are
              celebrated widely. People in different parts of the country
              celebrate this very festival differently. Though they worship the
              same deity, performing different rituals. as i often say that our
              festivals are for Celebration, Realization and for Liberation,
              during Navarathri the sadhak will celebrate and take on the
              sadhana for realization. ‘Navarathri’ in Sanskrit means ‘nine
              nights’ and also Nava means New and Rathri means Darkness or the
              reality of the cosmos,on these nine nights, Sadhaks do Nine
              different Sadhanas to realize his/her true self and the existence
              of Eshwari and offer special prayers to the ‘Nine Forms of Maa
              Eshwari’to lead Holistic lives, Eshwari means cosmic mother,
              creator of the universe and the Trinities.
            </p>
            <h2 className="special-title text-center">
              "Prathamam Shailputri cha dwitiyam brahmcharini. Tritiyam
              Chandrghanteti Kushmandeti Chaturthakam. Panchamam Skandmateti
              Shashtam Katyayniti cha Saptamam Kalratri Maha Gauri cha Ashtmam.
              Navmam Siddhidatri cha Nav Durga Prakirtitah"
            </h2>
          </Col>
          <Col md={12}>
            <p>
              The Nine forms of Devi Eshwari has her own significance and the
              method of worship in Kaulava tantra, Mishra and Samayachara in
              both Vedic and profound tantric mystic methods as there are three
              meanings or three levels, one can explain her methods of worship,
              1. Bahya artha - Superficial meaning, 2. Antar artha - Inner
              meaning, 3. Gudha artha - Mystic meaning
            </p>
            <p>
              Let's check these two levels while the 3rd one is mystic and I
              will teach/explain it some other day
            </p>
          </Col>
        </Row>
      </Container>
      <section className="bg-light-gray-1">
        <Container>
          <h2 className="sub-title">
            1. Eshwari Shailaputri (Superficial meaning)
          </h2>
          <p>
            Goddess Shailputri is the first manifestation of Goddess Durga. She
            holds a Trishul in one hand and a lotus in the other and rides a
            bull called Nandi. Goddess Parvati was born as the daughter of
            Himalaya and in Sanskrit, Shail means the mountain, thus she is
            known as Shailputri.
          </p>
          <h2 className="sub-title">What to offer:</h2>
          <p>
            Devotees offer pure ghee on the foot of Goddess Shailputri. It is
            believed that by offering pure ghee the devotees are blessed with a
            life free of diseases and illness
          </p>
          <h2 className="sub-title">The Antar artha -</h2>
          <p>
            Inner meaning is very simple, Shila means Mountain , mountain means
            stability , stability in the body , stability in the Merudhan
            (Vertebra), one must practice to keep the body and spine erect
            atleast 2.00 to 2.30 hours in comfort and stable, physically this
            brings a stability in mind which results in fine focus, long time
            concentration and it leads to meditation. The Nandi, a Bull is a
            symbolic representation of Calmness and Faith, the one who is
            faithful in his/her journey it will develop a strong feeling towards
            the Eshwari a strong feeling when ripe, becomes Devotion. Trident in
            her hand is the three basic instincts of our own being, those are
            Thinking , Feeling and Acting, if one can get clarity in thinking
            one can be a good Jnana yogi , if one can get purity in heart he can
            be a good Bakthi yogi, when you bring sincerity in an actions, one
            can be a good Karma yogi. In the other hand she holds a Lotus which
            results in Re-birth - Dwija, Lotus in her hand is a symbol of
            Blossoming , Transforming and Re-birth it means when a sadhak
            practices to maintain the body clam and steady in one posture he/she
            can bring a transformation in life, this is a 1st step towards self
            realization.
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
        </Container>
      </section>
      <Footer />
    </div>
  );
}
