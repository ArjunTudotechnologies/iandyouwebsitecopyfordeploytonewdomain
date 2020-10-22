import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import shailputri from "../../assets/img/blog/shailputri.jpg";
import Comment from "../Blog/Comment";
import { FaSlash } from "react-icons/fa";
import Chandraghanta from "../../assets/img/blog/chandraghanta.jpg";
import skandmata from "../../assets/img/blog/skandmata.jpg";
import kushmanda from "../../assets/img/blog/kushmanda.jpg";
import katyayani from "../../assets/img/blog/katyanani.jpg";
import kaalratri from "../../assets/img/blog/kaalratri.jpg";
import mahagauri from "../../assets/img/blog/mahagauri.jpg";
import siddhidatri from "../../assets/img/blog/siddhidatri.jpg";
import imageBhramhacharini from "../../assets/img/blog/brahmacharini.jpg";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
              Sharan Navaratri is nine-days Celebration in which nine forms of
              Goddess Eshwari are worshipped. It is one of the most significant
              celebration in Shaktha traditions and is performed across India
              with great fervor. There are a total of four Navaratris' in a
              year, only two - Chaitra Navaratri and Sharan Navaratri are
              celebrated widely in different parts of the country, which is
              celebrated differently. Though they worship the same deity,
              performing different rituals at different places is the usual
              practice. It is said in the Chandika Sapthashathi - In Durga
              Stotra -11.
            </p>

            <h3 className="special-title text-center">
              <Comment />
              Badhrada BadhraKali cha Sarva lokha bhayankari
              <FaSlash className="rotate-slash" /> Grahme grahme grahma devi
              Gruhadevi gruhe gruhe
              <Comment />
            </h3>
            <p>
              She is the one we see at every village as a Village Deity and she
              is the one who we worship in our homes as a Family Devi or the
              Clan Deity.
            </p>
            <p>
              As I often say that our festivals are for Celebration, Realization
              and Liberation, Navaratri has a very important role in the life of
              a Shaktha sadhak, to make him/her realize Life’s purpose which is
              very much necessary to lead a Holistic life. During Navaratri the
              sadhak will celebrate and do sadhana for realization, Sadhanas
              such as Eshwari kriya and Dhyana or Eshwari Srividhya Sadhana
              along with Udgamana Sadhana (Silence /Fasting) on all the nine
              days, chant Sree Lalitha Sahasranama, Trishathi, Kadgamala
              parayana and apply the knowledge tips in their day to day
              activities.
            </p>
          </Col>
          <Col className="mt-5">
            <p>
              ‘Navaratri’ in Sanskrit means ‘nine nights’ and also Nava means
              New and Ratri means Darkness or the reality of the cosmos, on
              these nine nights, Sadhaks do their Nine different Sadhanas to
              realize his/her true self and the existence of Eshwari and to
              offer special prayers to the ‘Nine Forms of Maa Eshwari to lead
              Holistic lives, Eshwari means cosmic mother, creator of the
              Universe and the Trinities.
            </p>
            <h2 className="special-title">
              <Comment />
              Prathamam Shailaputri cha dwitiyam brahmcharini. Tritiyam
              Chandrghanteti Kushmandeti Chaturthakam. Panchamam Skandmateti
              Shashtam Katyayniti cha. Saptamam Kalratri Maha Gauri cha
              Ashtamam. Navamam Siddhiidatri cha Nava Durga Prakirtitah
              <Comment /> Saptha shathi-Chandi kavacha -03
            </h2>
            <p>
              The Nine forms of Devi Eshwari has its own significance and the
              method of worships are in Kaulava tantra, Mishra and Samaya achara
              in both Vedic and profound tantric mystic methods. There are three
              types of meaning or in three levels one can explain her methods of
              worship, 1. Bahya artha - Superficial meaning , 2. Antar artha -
              Inner meaning , 3. Gudha artha - Mystic meaning let's check her
              two levels, the 3rd one is mystic let me teach or explain it some
              other day.
            </p>
          </Col>
        </Row>
        <Row className="mt-5 blog-section">
          {/* Shailputri  */}
          <div className="col-md-6 mb-3">
            <Card classname="shadow">
              <Card.Body>
                <Link to="shailputri">
                  <img alt="blog" src={shailputri} className="full-width" />

                  <h2 className="sub-title mt-4 mb-4">
                    Eshwari Shailaputri (Superficial meaning)
                  </h2>
                  <p>
                    Eshwari Shailaputri is the first manifestation of Goddess
                    Durga. She holds a Trishul in one hand and a lotus in the
                    other and rides a bull called Nandi. Goddess Parvati was
                    born as the daughter of Himalaya and in Sanskrit, Shaila
                    means the mountain, thus she is known as Shailaputri.
                  </p>
                </Link>
                <Link to="shailputri ">
                  <Button className="mt-3" variant="primary" size="lg">
                    Read More
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          {/* Brahmacharini */}
          <div className="col-md-6 mb-3">
            <Card classname="shadow">
              <Card.Body>
                <Link to="brahmacharini">
                  <img
                    alt="blog"
                    src={imageBhramhacharini}
                    className="full-width"
                  />

                  <h2 className="sub-title mt-4 mb-4">
                    Eshwari Brahmacharini(Superficial meaning)
                  </h2>
                  <p>
                    The second day of Navaratri is dedicated to Eshwari
                    Brahmacharini. The goddess walks bare feet with a rudraksh
                    mala in one hand and a sacred Kamandalu in the other. The
                    meditative form of this goddess symbolizes Goddess Parvati
                    when she is engaged in deep meditation to please Lord Shiva.
                  </p>
                </Link>
                <Link to="brahmacharini">
                  <Button className="mt-3" variant="primary" size="lg">
                    Read More
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          {/* Chandraghanta */}
          <div className="col-md-6 mb-3">
            <Card classname="shadow">
              <Card.Body>
                <Link to="chandraghanta">
                  <img alt="blog" src={Chandraghanta} className="full-width" />
                  <h2 className="sub-title mt-4 mb-4">Eshwari Chandraghanta</h2>
                  <p>
                    The third day of Navaratri is of Eshwari Chandraghanta. She
                    is a fierce 10-armed goddess with a crescent moon on her
                    forehead which gives her the name Chandraghanta. She rides
                    on a tiger to destroy all evil and wicked.
                  </p>
                </Link>
                <Link to="chandraghanta">
                  <Button className="mt-3" variant="primary" size="lg">
                    Read More
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          {/* Kushmanda */}
          <div className="col-md-6 mb-3">
            <Card classname="shadow">
              <Card.Body>
                <Link to="kushmanda">
                  <img alt="blog" src={kushmanda} className="full-width" />

                  <h2 className="sub-title mt-4 mb-4">Eshwari Kushmanda</h2>
                  <p>
                    Chaturthi or the fourth day of Navaratri is of Devi
                    Kushmanda. The name Kushmanda is derived from three words -
                    ‘Ku’ (little), ‘Ushma’ (warmth or energy) and ‘Anda’ (egg),
                    which means the creator of the universe.
                  </p>
                </Link>
                <Link to="kushmanda">
                  <Button className="mt-3" variant="primary" size="lg">
                    Read More
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          {/* Skandmata */}
          <div className="col-md-6 mb-3">
            <Card classname="shadow">
              <Card.Body>
                <Link to="skandmata">
                  <img alt="blog" src={skandmata} className="full-width" />

                  <h2 className="sub-title mt-4 mb-4">Eshwari Skandmata</h2>
                  <p>
                    Eshwari Skandmata who is worshipped on the fifth day is also
                    known as Panchami, Lalita Panchami at some places. Skandmata
                    is a four-armed deity, who carries a lotus in two of her
                    arms with a sacred Kamandalu and a bell in the other two.
                    She also carries a little Kartikeya on her lap and because
                    of this Kartikeya is also known as Skanda. She is seated on
                    a lotus.
                  </p>
                </Link>
                <Link to="skandmata">
                  <Button className="mt-3" variant="primary" size="lg">
                    Read More
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          {/* Katyayani */}
          <div className="col-md-6 mb-3">
            <Card classname="shadow">
              <Card.Body>
                <Link to="katyayani">
                  <img alt="blog" src={katyayani} className="full-width" />
                  <h2 className="sub-title mt-4 mb-4">Eshwari Katyayani</h2>
                  <p>
                    The sixth day of Navarathri is dedicated to Eshwari
                    Katyayani, who is a form of Shakti. Also known as the
                    warrior goddess, Katyayani is considered as one of the most
                    violent forms of Goddess Parvati. She has four arms and
                    carries a sword. She is the daughter of Sage Katyayan and
                    rides on a lion.
                  </p>
                </Link>
                <Link to="katyayani">
                  <Button className="mt-3" variant="primary" size="lg">
                    Read More
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          {/* Goddess Kaalrathri */}
          <div className="col-md-6 mb-3">
            <Card classname="shadow">
              <Card.Body>
                <Link to="kaalrathri">
                  <img alt="blog" src={kaalratri} className="full-width" />
                  <h2 className="sub-title mt-4 mb-4"> Eshwari Kaalrathri</h2>
                  <p>
                    Sapthami or the seventh day of Navaratri is of Eshwari
                    Kalaratri. As per legends she sacrificed her skin colour and
                    embraced a dark complexion to kill demons. She is a
                    four-armed deity who rides a donkey, carries a sword, a
                    trident, and a noose. She has a third eye on her forehead
                    that is believed to contain the entire universe.
                  </p>
                </Link>

                <Link to="kaalrathri">
                  <Button className="mt-3" variant="primary" size="lg">
                    Read More
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          {/* Eshwari Mahagauri */}
          <div className="col-md-6 mb-3">
            <Card classname="shadow">
              <Card.Body>
                <Link to="mahagauri">
                  <img alt="blog" src={mahagauri} className="full-width" />

                  <h2 className="sub-title mt-4 mb-4">Eshwari Mahagauri</h2>
                  <p>
                    Durga Asthami or the eight-day of Navaratri is dedicated to
                    Eshwari Mahagauri. She is a four-armed deity who rides on a
                    bull or a white elephant. She carries a trishul and a damru
                    in her hands.
                  </p>
                </Link>
                <Link to="mahagauri">
                  <Button className="mt-3" variant="primary" size="lg">
                    Read More
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          {/* Eshwari Siddhidatri*/}
          <div className="col-md-6 mb-3">
            <Card classname="shadow">
              <Card.Body>
                <Link to="siddhidatri">
                  <img
                    alt="blog"
                    src={siddhidatri}
                    className="full-width max-height"
                  />

                  <h2 className="sub-title mt-4 mb-4">Eshwari Siddhidatri</h2>
                  <p>
                    Durga Asthami or the eight-day of Navaratri is dedicated to
                    Eshwari Mahagauri. She is a four-armed deity who rides on a
                    bull or a white elephant. She carries a trishul and a damru
                    in her hands.
                  </p>
                </Link>
                <Link to="siddhidatri">
                  <Button className="mt-3" variant="primary" size="lg">
                    Read More
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
