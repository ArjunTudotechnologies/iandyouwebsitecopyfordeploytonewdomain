import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaEnvelopeOpen,
  FaPhoneAlt,
  FaFingerprint,
} from "react-icons/fa";
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
                <FaEnvelopeOpen />
                <span className="pl-2">info@iandyou.org</span>
              </li>
              <li>
                <FaPhoneAlt />
                <span className="pl-2">+91 990 002 2506</span>
              </li>
            </ul>
          </Col>
          <Col className="signup-languge" sm={12} md={4}>
            <ul>
              <li>
                <FaFingerprint /> <span className="pl-2">Sign Up</span>
              </li>
              <li>
                <MdTranslate /> <span className="pl-2">Language</span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
