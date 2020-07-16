import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import CovidBannerImg from "../../assets/img/covid-banners/banner.png";
import { MdArrowForward } from "react-icons/md";
import DonateModal from "../DonateModal/DonateModal";

export default function IandyouBanner() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="wow fadeInUp" data-wow-delay="0s">
      <section className="covid-banner-section">
        <Container fluid>
          <h2
            className="big-title text-center   mb-5 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            I And You Vidhya
            <br />
            <span className="gradient-text">Each One Educate One</span>
          </h2>
          <Card className="covid-card shadow-lg">
            <Card.Body>
              <div className="image-overlay">
                <img
                  alt="Covid-19"
                  src={process.env.PUBLIC_URL + "img/others/vidya-banner.jpg"}
                  className="covid-banner-image"
                />
              </div>
            </Card.Body>
          </Card>
        </Container>

        <DonateModal show={modalShow} onHide={() => setModalShow(false)} />
      </section>
    </div>
  );
}
