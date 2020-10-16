import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import image from "../../assets/img/blog/ganesha.jpeg";
import image1 from "../../assets/img/blog/pitrupaksha.jpg";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div>
      <Header />
      <Container>
        <section className="blog-section">
          <div className="row">
            <div className="col-md-6 mb-3">
              <Card classname="shadow">
                <Card.Body>
                  <Link to="blogdetails">
                    <img alt="blog" src={image} className="img-fluid" />

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
            <div className="col-md-6 mb-3">
              <Card classname="shadow">
                <Card.Body>
                  <Link to="pitrupaksha">
                    <img alt="blog" src={image1} className="img-fluid" />
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
