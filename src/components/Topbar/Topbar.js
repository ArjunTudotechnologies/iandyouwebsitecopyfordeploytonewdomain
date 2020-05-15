import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaEnvelopeOpen, FaPhoneAlt, FaFingerprint } from "react-icons/fa";
import { MdTranslate } from "react-icons/md";

export default function Topbar() {
    return (
        <div className="top-bar">
            <Container>
                <Row>
                    <Col sm={12} md={3}>
                        <ul className="social-icons">
                            <li>
                                <FaFacebookF />
                            </li>
                            <li>
                                <FaTwitter />
                            </li>
                            <li>
                                <FaLinkedinIn />
                            </li>
                            <li>
                                <FaYoutube />
                            </li>
                            <li>
                                <FaInstagram />
                            </li>
                        </ul>
                    </Col>
                    <Col className="email-phone" sm={12} md={5}>
                        <ul>
                            <li>
                                <a href="mailto:info@iandyou.org"><FaEnvelopeOpen /><span>info@iandyou.org</span></a>
                            </li>
                            <li>
                                <a href="tel:+91 990 002 2506"><FaPhoneAlt /><span>+91 990 002 2506</span></a>
                            </li>
                        </ul>
                    </Col>
                    <Col className="signup-languge" sm={12} md={4}>
                        <ul>
                            <li>
                                <a href="#"><FaFingerprint /><span>Sign Up</span></a>
                            </li>
                            <li>
                                <a href="#"><MdTranslate /><span>Language</span></a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}