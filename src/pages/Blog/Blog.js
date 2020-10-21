import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import image from "../../assets/img/blog/ganesha.jpeg";

import image1 from "../../assets/img/blog/pitrupaksha.jpeg";
import imageBhramhacharini from "../../assets/img/blog/brahmacharini.jpg";
import shailputri from "../../assets/img/blog/shailputri.jpg";
import Chandraghanta from "../../assets/img/blog/chandraghanta.jpg";
import skandmata from "../../assets/img/blog/skandmata.jpg";
import kushmanda from "../../assets/img/blog/kushmanda.jpg";
import katyayani from "../../assets/img/blog/katyanani.jpg";
import kaalratri from "../../assets/img/blog/kaalratri.jpg";
import mahagauri from "../../assets/img/blog/mahagauri.jpg";
import siddhidatri from "../../assets/img/blog/siddhidatri.jpg";

import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div>
      <Header />
      <Container>
        <section className="blog-section">
          <div className="row">
            {/* Sharan Navarathri */}
            <div className="col-md-6 mb-3">
              <Card classname="shadow">
                <Card.Body>
                  <Link to="sharan-navarathri">
                    <img alt="blog" src={shailputri} className="full-width" />

                    <h2 className="sub-title mt-4 mb-4">SHARAN NAVARATHRI</h2>
                    <p>
                      Sharan Navrathri is a nine-days Celebration in which nine
                      forms of Goddess Eshwari are worshipped. It is one of the
                      most significant celebration in Shaktha traditions and
                      celecrated across India with great fervor.
                    </p>
                  </Link>
                  <Link to="sharan-navarathri">
                    <Button className="mt-3" variant="primary" size="lg">
                      Read More
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            {/* Shailputri  */}
            <div className="col-md-6 mb-3">
              <Card classname="shadow">
                <Card.Body>
                  <Link to="shailputri">
                    <img alt="blog" src={shailputri} className="full-width" />

                    <h2 className="sub-title mt-4 mb-4">
                      Eshwari Shailputri (Superficial meaning)
                    </h2>
                    <p>
                      Goddess Shailputri is the first manifestation of Goddess
                      Durga. She holds a Trishul in one hand and a lotus in the
                      other and rides a bull called Nandi. Goddess Parvati was
                      born as the daughter of Himalaya and in Sanskrit, Shail
                      means the mountain, thus she is known as Shailputri.
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
                      The second day of Navarathri is dedicated to Goddess
                      Brahmacharini. The goddess walks bare feet with a rudraksh
                      mala in one hand and a sacred Kamandalu in the other. The
                      meditative form of this goddess symbolizes Goddess Parvati
                      when she is engaged in her deep meditation to please Lord
                      Shiva.
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
                    <img
                      alt="blog"
                      src={Chandraghanta}
                      className="full-width"
                    />
                    <h2 className="sub-title mt-4 mb-4">
                      Eshwari Chandraghanta
                    </h2>
                    <p>
                      The third day of Navarathri is of Goddess Chandraghanta.
                      She is a fierce 10-armed goddess with a crescent moon on
                      her forehead, which gives her the name Chandraghanta. She
                      rides on a tiger to destroy all evil and wicked.
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
                      Chaturthi or the fourth day of Navarathri is of Devi
                      Kushmanda. The name Kushmanda is derived from three words
                      - ‘Ku’ (little), ‘Ushma’ (warmth or energy) and ‘Anda’
                      (egg), which means the creator of the universe.
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
                      Goddess Skandmata who is worshipped on the fifth day is
                      also known as Panchami, as Lalita Panchami in some places.
                      Skandmata is a four-armed deity, who carries a lotus in
                      two of her arms with a sacred Kamandalu and a bell in the
                      other two. She also carries a little Kartikeya on her lap
                      and because of this Kartikeya is also known as Skanda. She
                      is seated on a lotus.
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
                      The sixth day of Navarathri is dedicated to Goddess
                      Katyayani, who is a form of Shakti. Also known as the
                      warrior goddess, Katyayani is considered as one of the
                      most violent forms of Goddess Parvati. She has four arms
                      and carries a sword. She is the daughter of Sage Katyayan
                      and rides on a lion.
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
                    <h2 className="sub-title mt-4 mb-4"> Goddess Kaalrathri</h2>
                    <p>
                      Saptami or the seventh day of Navarathri is of Goddess
                      Kalarathri. As per legends she sacrificed her skin colour
                      and embraced a dark complexion to kill demons. She is a
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
            {/* Goddess Mahagauri */}
            <div className="col-md-6 mb-3">
              <Card classname="shadow">
                <Card.Body>
                  <Link to="mahagauri">
                    <img alt="blog" src={mahagauri} className="full-width" />

                    <h2 className="sub-title mt-4 mb-4">Goddess Mahagauri</h2>
                    <p>
                      Durga Asthami or the eight-day of Navarathri is dedicated
                      to Goddess Mahagauri. She is a four-armed deity who rides
                      on a bull or a white elephant. She carries a Trishul and a
                      damru in her hands.
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
            {/* Goddess Siddhidatri*/}
            <div className="col-md-6 mb-3">
              <Card classname="shadow">
                <Card.Body>
                  <Link to="siddhidatri">
                    <img
                      alt="blog"
                      src={siddhidatri}
                      className="full-width max-height"
                    />

                    <h2 className="sub-title mt-4 mb-4">Goddess Siddhidatri</h2>
                    <p>
                      The ninth or the final day of Navarathri is of Goddess
                      Siddhidhatri. She is projected as a four-armed deity
                      sitting on a lotus, holding a mace, discus and a book and
                      lotus in her hands. This form of Goddess Durga signifies
                      perfection.
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

            {/* Unfold Ganesha In You */}
            <div className="col-md-6 mb-3">
              <Card classname="shadow">
                <Card.Body>
                  <Link to="blogdetails">
                    <img alt="blog" src={image} className="full-width" />

                    <h2 className="sub-title mt-4 mb-4">
                      Unfold Ganesha In You
                    </h2>
                    <p>
                      Om Gajaananam Bhoota Ganaadi Sevitam ....Namaami
                      Vighneshwara paada pankajam <br /> O! Lord of Elephant
                      face, He who is served by the Celestial beings ,He who
                      eats the essence of the kaith-wood apple ...
                    </p>
                  </Link>
                  <Link to="blogdetails">
                    <Button className="mt-3" variant="primary" size="lg">
                      Read More
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            {/* pitrupaksha */}
            <div className="col-md-6 mb-3">
              <Card classname="shadow">
                <Card.Body>
                  <Link to="pitrupaksha">
                    <img
                      alt="blog"
                      src={image1}
                      className="full-width -fluid"
                    />
                    <h2 className="sub-title mt-4 mb-4">
                      what is the significance of Pithrupaksha , why should we
                      perform such a ritual ?
                    </h2>
                    <p>
                      I often keep telling that our Traditions and Cultures we
                      follow in our country are based on Three fundamentals of
                      living they are Celebrations, Realization and Liberation,
                      the realization however is the way for celebration and
                      liberation.
                    </p>
                  </Link>
                  <Link to="pitrupaksha">
                    <Button className="mt-3" variant="primary" size="lg">
                      Read More
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </div>
  );
}
