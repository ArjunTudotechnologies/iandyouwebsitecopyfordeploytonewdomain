import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import image from "../../assets/img/blog/ganesha.jpeg";
import { Container, Row, Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CardBody } from "react-bootstrap";

export default function Blog() {
  return (
    <div>
      <Header />
      <Container>
        <section>
          <div className="row">
            <div className="col-md-5">
              <Card classname="shadow">
                <Card.Body>
                  <Link to="blogdetails">
                    <img src={image} className="img-fluid" />

                    <h2 className="title mt-4 mb-4">Unfold Ganesha In You</h2>
    <p>
                      //Om Gajaananam Bhoota Ganaadi Sevitam ....Namaami
                      Vighneshwara paada pankajam// <br /> O! Lord of Elephant
                      face, He who is served by the Celestial beings ,He who
                      eats the essence of the kaith-wood apple ...
                    </p>
                  </Link>
                  <Link to="blogdetails">
                    <Button variant="primary" size="lg">
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
