import React, { Component } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import ProgramsBig from "../../../components/Programs/ProgramsBig";
import ProgramsSmall from "../../../components/Programs/ProgramsSmall";

export default class ProgramsSection extends Component {
  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  }
  render() {
    return (
      <section className="pb-0 pt-0">
        <Container fluid className="position-relative">
          <Row>
            <Col md={6} className="p-0">
              <ProgramsBig title="Sri Care" titleOne="A Shoppe for sadhana." />
            </Col>
            <Col md={6}>
              <Row>
                <Col md={12} className="p-0">
                  <div className="programs" style={{ height: "400px" }}>
                    <div className="programs-image-overlay">
                      <img
                        className="program-small-img"
                        src={process.env.PUBLIC_URL + "img/others/audio.jpg"}
                        alt="program name"
                      />
                    </div>
                    <div className="program-content">
                      <h2 className="program-small-title">
                        Explore the Journey Within.. Listen to Guru Puja Audio
                      </h2>
                      <Button onClick={this.playAudio}>Play</Button>
                      <audio className="audio-element">
                        <source
                          src={process.env.PUBLIC_URL + "img/others/audio.mp4"}
                        ></source>
                      </audio>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="p-0">
                  <ProgramsSmall
                    image="blog.jpg"
                    title="I And You Blog"
                    btnname="Read More"
                    link="blog"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
