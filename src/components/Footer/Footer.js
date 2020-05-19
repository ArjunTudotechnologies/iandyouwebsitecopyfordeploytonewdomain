import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Container, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaMapMarkerAlt, FaEnvelopeOpen, FaPhoneAlt } from "react-icons/fa";
import Logo from "../../assets/img/logo.png";

export default function Footer() {
    return (
        <div className="footer">
            <Container className="footer-content">
                <Row className="logo-header">
                    <Col md={12}>
                        <h2><img src={Logo} className="footer-logo pr-2" alt="I And You Foundation" /><span className=" footer-logo-text">I And You Being Together Foundation</span></h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <h2>Contact</h2>
                        <p>
                            <b><span><FaMapMarkerAlt /></span>I and You Foundation</b> <br />
                            1460, Behind Sri. Vasuki Naga Eshwari Temple, <br />
                            HAF (P) Kaveri Layout, Hebbal, Dasarahalli, <br />
                            Bangalore, Karnataka – 560024.
                        </p>
                        <p><span><FaEnvelopeOpen /></span>info@iandyou.org</p>
                        <p><span><FaPhoneAlt /></span>+91 990 002 2506</p>
                    </Col>
                    <Col md={2}>
                        <h2>Usefull Links</h2>
                        <ul className="menu-links">
                            <li>
                                <Link style={linkText} to="/">Home</Link>
                            </li>
                            <li>
                                <Link style={linkText} to="/about">About</Link>
                            </li>
                            <li>
                                <Link style={linkText} to="/about">About</Link>
                            </li>
                            <li>
                                <Link style={linkText} to="/about">Yoga & Meditation</Link>
                            </li>
                            <li>
                                <Link style={linkText} to="/about">Projects</Link>
                            </li>
                            <li>
                                <Link style={linkText} to="/about">Events</Link>
                            </li>
                            <li>
                                <Link style={linkText} to="/about">About</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h2>&nbsp;</h2>
                        <ul className="menu-links">
                            <li>
                                <Link style={linkText} to="/">Home</Link>
                            </li>
                            <li>
                                <Link style={linkText} to="/about">About</Link>
                            </li>
                            <li>
                                <Link style={linkText} to="/about">About</Link>
                            </li>
                            <li>
                                <Link style={linkText} to="/about">Yoga & Meditation</Link>
                            </li>
                            <li>
                                <Link style={linkText} to="/about">Projects</Link>
                            </li>
                            <li>
                                <Link style={linkText} to="/about">Events</Link>
                            </li>
                            <li>
                                <Link style={linkText} to="/about">About</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h2>&nbsp;</h2>
                        <ul className="menu-links">
                            <li>
                                <Link style={linkText} to="/">Home</Link>
                            </li>
                            <li>
                                <Link style={linkText} to="/about">About</Link>
                            </li>
                            <li>
                                <Link style={linkText} to="/about">About</Link>
                            </li>
                            <li>
                                <Link style={linkText} to="/about">Yoga & Meditation</Link>
                            </li>
                            <li>
                                <Link style={linkText} to="/about">Projects</Link>
                            </li>
                            <li>
                                <Link style={linkText} to="/about">Events</Link>
                            </li>
                            <li>
                                <Link style={linkText} to="/about">About</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h2>Social Media</h2>
                        <ul className="socialMediaLinks">
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
                        <hr />
                        <h2>Our Events</h2>
                        <Button variant="primary">Register Now</Button>
                    </Col>
                </Row>
            </Container>

            <Container className="copyright-div">
                <Row>
                    <Col md={6} className="left">
                        <p>&copy; I And You Foundation 2020</p>
                    </Col>
                    <Col md={6} className="right">
                        <ul>
                            <li>
                                <Link style={linkText} to="/about">Terms and Conditions</Link>
                            </li>
                            <li>
                                <Link style={linkText} to="/about">Privacy Policy</Link>
                            </li>
                        </ul>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}


const linkText = {
    color: "#ffffff69"

}