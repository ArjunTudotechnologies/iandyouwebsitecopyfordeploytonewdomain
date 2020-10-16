import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Button } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelopeOpen,
  FaPhoneAlt,
} from "react-icons/fa";
import Logo from "../../assets/img/logo.png";
import ISO from "../../assets/img/iso-logo.png";

export default function Footer() {
  return (
    <div className="footer">
      <Container className="footer-content">
        <Row className="logo-header">
          <Col md={8}>
            <h2>
              <img
                src={Logo}
                className="footer-logo pr-2"
                alt="I And You Foundation"
              />
              <span className=" footer-logo-text">
                I And You Being Together Foundation
              </span>
            </h2>
          </Col>
          <Col md={4}>
            <Row className="jd-flex justify-content-center align-items-center  row">
              <Col md={3}>
                <img
                  src={ISO}
                  className="iso-logo pr-2"
                  alt="I And You Foundation"
                />
              </Col>
              <Col md={9}>
                <p className="pb-0 mb-0">ISO 9001:2015/0821Q11720</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={5} lg={3} xl={4}>
            <h2>Contact</h2>
            <p>
              <b>
                <span>
                  <FaMapMarkerAlt />
                </span>
                I and You Foundation
              </b>
              <br />
              1460, Behind Sri. Vasuki Naga Eshwari Temple, <br />
              HAF (P) Kaveri Layout, Hebbal, Dasarahalli, <br />
              Bangalore, Karnataka – 560024.
            </p>
            <p>
              <span>
                <FaEnvelopeOpen />
              </span>
              info@iandyou.org
            </p>
            <p>
              <span>
                <FaPhoneAlt />
              </span>
              +91 990 002 2506
            </p>
          </Col>
          <Col xs={4} md={3} lg={2} xl={2}>
            <h2>Useful Links</h2>
            <ul className="menu-links">
              <li>
                <Link style={linkText} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link style={linkText} to="/about">
                  I And You
                </Link>
              </li>
              <li>
                <Link style={linkText} to="/about">
                  Events
                </Link>
              </li>
              <li>
                <Link style={linkText} to="/about">
                  Blogs
                </Link>
              </li>
              <li>
                <Link style={linkText} to="/about">
                  Shop
                </Link>
              </li>
              <li>
                <Link style={linkText} to="/about">
                  Donate
                </Link>
              </li>
              <li>
                <Link style={linkText} to="/about">
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={4} md={2} lg={2} xl={2}>
            <h2>&nbsp;</h2>
            <ul className="menu-links">
              <li>
                <Link style={linkText} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link style={linkText} to="/about">
                  I And You
                </Link>
              </li>
              <li>
                <Link style={linkText} to="/about">
                  Events
                </Link>
              </li>
              <li>
                <Link style={linkText} to="/about">
                  Blogs
                </Link>
              </li>
              <li>
                <Link style={linkText} to="/about">
                  Shop
                </Link>
              </li>
              <li>
                <Link style={linkText} to="/about">
                  Donate
                </Link>
              </li>
              <li>
                <Link style={linkText} to="/about">
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={4} md={2} lg={2} xl={2}>
            <h2>&nbsp;</h2>
            <ul className="menu-links">
              <li>
                <Link style={linkText} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link style={linkText} to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link style={linkText} to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link style={linkText} to="/about">
                  Yoga & Meditation
                </Link>
              </li>
              <li>
                <Link style={linkText} to="/about">
                  Projects
                </Link>
              </li>
              <li>
                <Link style={linkText} to="/about">
                  Events
                </Link>
              </li>
              <li>
                <Link style={linkText} to="/about">
                  About
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={8} md={12} lg={3} xl={2}>
            <h2>Social Media</h2>
            <ul className="socialMediaLinks">
              <li>
                <a
                  href="https://www.facebook.com/iandyoubeingtogether"
                  target="blank"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="blank">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sri-prasad-548896107/"
                  target="blank"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UC5cFun3Kj54ZeiSjShTDghQ"
                  target="blank"
                >
                  <FaYoutube />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/iandyoubeingtogether/"
                  target="blank"
                >
                  <FaInstagram />
                </a>
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
                <Link style={linkText} to="/about">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link style={linkText} to="/about">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const linkText = {
  color: "#ffffff69",
};
