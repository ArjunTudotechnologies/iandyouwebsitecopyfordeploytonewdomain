import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import VidoImage from "../../../../src/assets/img/video/bg.jpg";

import { FaPlay } from "react-icons/fa";

export default class VideoSection extends Component {
    render() {
        return (
            <>
                <section className="video-section">
                    <Container>
                        <Row>
                            <Col md={7}><h2 className="big-title mb-4">Free Guided Meditation Eshwari Kriya Online</h2>
                                <p>Most people say that their act was Crying and i hope most of us will agree with that but
                                if you ask me, I would say it’s a big No, do you know why ? because the 1st immediate act which we perform was Breathing...</p>
                                <div className="position-relative">
                                    <div className="video-card">
                                        <div className="image-overlay">
                                            <img src={VidoImage} alt="Eshwari Kriya" />
                                        </div>
                                        <div className="video-card-content">
                                            <h2 className="title">Eshwari Kriya <br/> <span>Celebrate Life</span></h2>
                                            <p>Most people say that their act was Crying and i hope most of us will agree with that but if you ask me,</p>
                                            <Button variant="primary" size="lg">Register Now</Button>
                                            <div className="play-video-button">
                                                <div class="pulse-icon">
                                                    <div class="icon-wrap">
                                                        <FaPlay />
                                                    </div>
                                                    <div class="elements">
                                                        <div class="circle circle-outer"></div>
                                                        <div class="circle circle-inner"></div>
                                                        <div class="pulse pulse-1"></div>
                                                        <div class="pulse pulse-2"></div>
                                                        <div class="pulse pulse-3"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Col>
                            <Col md={5}>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        )
    }
}
