import React, { Component } from "react";
import {
  Navbar,
  Form,
  Button,
  Nav,
  NavDropdown,
  Container,
} from "react-bootstrap";
import Logo from "../../assets/img/logo.png";
import Topbar from "../Topbar/Topbar";
import { Link } from "react-router-dom";
import { MdShoppingCart, MdSearch, MdPeople } from "react-icons/md";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Topbar />
        <Navbar className="shadow header" bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#">
              <Link to="/">
                <img className="logo" alt="I And You Foundation" src={Logo} />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link className="nav-link dropdown-item" to="/">
                  Home
                </Link>
                <Link className="nav-link dropdown-item" to="about">
                  About
                </Link>
                <li className="nav-item dropdown">
                  <Nav.Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="healthDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Sadhana & Dhyana
                  </Nav.Link>
                  <div
                    className="dropdown-menu dropdown-menu-left max-menu-small"
                    aria-labelledby="healthDropdown"
                  >
                    <div className="d-md-flex align-items-start justify-content-start p-2">
                      <div className="p-1">
                        <div className="dropdown-header p-2">
                          Eshwari sadhana
                        </div>
                        <NavDropdown.Divider />
                        <Link
                          className="nav-link dropdown-item"
                          to="eshwari-kriya"
                        >
                          -Eshwari Kriya
                        </Link>
                        <Link
                          className="nav-link dropdown-item"
                          to="eshwari-shakthi-kendra-sadhana"
                        >
                          -Eshwari Shakthi kendra sadhana
                        </Link>
                        <Link
                          className="nav-link dropdown-item"
                          to="eshwari-srividhya-sadhana"
                        >
                          - Eshwari Srividhya sadhana- level 1&2
                        </Link>
                        <Nav.Link className="dropdown-item" href="#">
                          - Udgamana sadhana
                        </Nav.Link>
                        <Nav.Link className="dropdown-item" href="#">
                          - Kala Bhairava Dhyana
                        </Nav.Link>
                        <Nav.Link className="dropdown-item" href="#">
                          - Guru pooja
                        </Nav.Link>
                        <Nav.Link className="dropdown-item" href="#">
                          - Eshwari shodhana kriya
                        </Nav.Link>
                      </div>
                      <div className="p-1">
                        <div className="dropdown-header p-2">
                          Dhanya prakriya
                        </div>
                        <NavDropdown.Divider />
                        <Nav.Link className="dropdown-item" href="#">
                          - Eshwari Dhyana
                        </Nav.Link>
                        <Nav.Link className="dropdown-item" href="#">
                          - Eshwari Sidha Dhyana -level 1&2
                        </Nav.Link>
                        <Link
                          className="nav-link dropdown-item"
                          to="immortal-process"
                        >
                          - Immortal process
                        </Link>
                        <Nav.Link className="dropdown-item" href="#">
                          - Know your purpose
                        </Nav.Link>
                        <Nav.Link className="dropdown-item" href="#">
                          - Amrut sadhana
                        </Nav.Link>
                        <Nav.Link className="dropdown-item" href="#">
                          - Mana prakshalya
                        </Nav.Link>
                        <Nav.Link className="dropdown-item" href="#">
                          - Kala Bhairava Dhyana
                        </Nav.Link>
                      </div>
                      <div className="p-1">
                        <div className="dropdown-header p-2">
                          Adhika sadhana
                        </div>
                        <NavDropdown.Divider />
                        <Link
                          className="nav-link dropdown-item"
                          to="jyothismathi"
                        >
                          <span>Jyothismathi:</span>
                        </Link>
                        <Nav.Link className="dropdown-item" href="#">
                          -Astrology / Vastu
                        </Nav.Link>
                        <Nav.Link className="dropdown-item" href="#">
                          -Sri yog
                        </Nav.Link>
                        <Nav.Link className="dropdown-item" href="#">
                          - Nirmali karana kriya- level 1&2
                        </Nav.Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Nav.Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="healthDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Kids Wellness
                  </Nav.Link>
                  <div
                    className="dropdown-menu dropdown-menu-left max-menu-small"
                    aria-labelledby="healthDropdown"
                  >
                    <div className="d-md-flex align-items-start justify-content-start p-2">
                      <div className="p-1">
                        <Nav.Link className="dropdown-item" href="#">
                          <span>Sanskar: </span>Personality and behavior
                          development
                        </Nav.Link>
                        <Nav.Link className="dropdown-item" href="#">
                          - Eshwari Kids Kriya
                        </Nav.Link>
                        <Nav.Link className="dropdown-item" href="#">
                          - Eahwari Kids Hata yoga
                        </Nav.Link>
                        <Nav.Link className="dropdown-item" href="#">
                          - Sanskar Teacher training
                        </Nav.Link>
                        <Nav.Link className="dropdown-item" href="#">
                          - Kids Social and Nature awareness program
                        </Nav.Link>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Nav.Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="eventsDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Events
                  </Nav.Link>
                  <div
                    className="dropdown-menu dropdown-menu-left max-menu-large"
                    aria-labelledby="eventsDropdown"
                  >
                    <div className="d-md-flex align-items-start justify-content-start p-2">
                      <div className="p-1">
                        <div className="dropdown-header p-2">
                          Monthly events
                        </div>
                        <NavDropdown.Divider />
                        <Nav.Link className="dropdown-item" href="#">
                          Amavasya Homa
                        </Nav.Link>
                        <Nav.Link className="dropdown-item" href="#">
                          Poornima Navavarana Dhyana
                        </Nav.Link>
                        <Nav.Link className="dropdown-item" href="#">
                          Poornima Dhyana (full moon meditation )
                        </Nav.Link>
                        <Nav.Link className="dropdown-item" href="#">
                          Rahukalam Aradhana (Sundays, Tuesdays and Fridays )
                        </Nav.Link>
                      </div>
                      <div className="p-1">
                        <div className="dropdown-header p-2">Annul events</div>
                        <NavDropdown.Divider />

                        <Nav.Link className="dropdown-item" href="#">
                          <span>Aham to shivam: </span>
                          <br />
                          Shivarathri Vigyan Bhirava Tantra Sadhana
                        </Nav.Link>
                        <Nav.Link className="dropdown-item" href="#">
                          <span>Sharan Navarathri:</span>
                          <br />
                          Sadhana and Homas
                        </Nav.Link>
                        <Nav.Link className="dropdown-item" href="#">
                          <span>Nagapanchami:</span>
                          <br />
                          Dosha Nivarana prasada
                        </Nav.Link>
                      </div>
                      <div className="p-1">
                        <div className="dropdown-header p-2">
                          Special events
                        </div>
                        <NavDropdown.Divider />

                        <Nav.Link className="dropdown-item" href="#">
                          <span>Sri-</span>Attract abundant of wealth
                        </Nav.Link>
                        <Nav.Link className="dropdown-item" href="#">
                          <span>Sri Kari -</span> Manifest your intentions
                        </Nav.Link>
                        <Nav.Link className="dropdown-item" href="#">
                          <span>Gratitude week -</span> Guruji's birthday
                          celebration through Seva
                        </Nav.Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Nav.Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="healthDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Projects New
                  </Nav.Link>
                  <div
                    className="dropdown-menu dropdown-menu-left max-menu-small"
                    aria-labelledby="healthDropdown"
                  >
                    <div className="d-md-flex align-items-start justify-content-start p-2">
                      <div className="p-1">
                        <div className="dropdown-header p-2">
                          Each one Educate one
                        </div>
                        <NavDropdown.Divider />
                        <Link
                          className="nav-link dropdown-item"
                          to="eshwari-kriya"
                        >
                          <span>I and you Vidhya </span>
                        </Link>
                        <Link className="nav-link dropdown-item" to="#">
                          - Educate and Empower a girl child
                        </Link>
                        <Link className="nav-link dropdown-item" to="#">
                          - Educate and Empower a dumb and deaf child
                        </Link>
                        <Link className="nav-link dropdown-item" to="#">
                          - Educate and Empower a blind Chid
                        </Link>
                        <Link className="nav-link dropdown-item" to="#">
                          - Educate and Empower a orphan child
                        </Link>
                        <Link className="nav-link dropdown-item" to="#">
                          - Educate and Support government schools
                        </Link>
                      </div>
                      <div className="p-1">
                        <div className="dropdown-header p-2">
                          Initiative towards Environment
                        </div>
                        <NavDropdown.Divider />
                        <Nav.Link className="dropdown-item" href="#">
                          <span>I and you green</span>
                        </Nav.Link>
                        <Link className="nav-link dropdown-item" to="#">
                          - MiNi forest formations
                        </Link>
                        <Link className="nav-link dropdown-item" to="#">
                          - Neem Saplings plantations
                        </Link>
                        <Link className="nav-link dropdown-item" to="#">
                          - Lake rejuvenation
                        </Link>
                        <Link className="nav-link dropdown-item" to="#">
                          - farmers borewell recharge
                        </Link>
                      </div>
                      <div className="p-1">
                        <div className="dropdown-header p-2">She's Divine</div>
                        <NavDropdown.Divider />
                        <Link className="nav-link dropdown-item" to="#">
                          - Awards and honoring <br />
                          women achivers every year
                        </Link>
                        <Link className="nav-link dropdown-item" to="#">
                          - Skilled job oriented workshops
                        </Link>
                        <Link className="nav-link dropdown-item" to="#">
                          - Handicraft training
                        </Link>
                      </div>
                      <div className="p-1">
                        <div className="dropdown-header p-2">
                          Monuments restoration
                        </div>
                        <NavDropdown.Divider />
                        <Link className="nav-link dropdown-iem" to="#">
                          - Maha Nandhikeshawara (Monolithic)
                        </Link>
                        <Link className="nav-link dropdown-iem" to="#">
                          - Madeshwara Monument of Ganga dynasty
                        </Link>
                        <Link className="nav-link dropdown-iem" to="#">
                          - Olden clan styled deities temple renovations and
                          constructions
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Nav.Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="healthDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Health
                  </Nav.Link>
                  <div
                    className="dropdown-menu dropdown-menu-left max-menu"
                    aria-labelledby="healthDropdown"
                  >
                    <div className="d-md-flex align-items-start justify-content-start p-2">
                      <div className="p-1">
                        <div className="dropdown-header p-2">
                          Yoga chikistha centre
                        </div>
                        <NavDropdown.Divider />
                        <Nav.Link className="dropdown-item" href="#">
                          Eshwari Ayurveda hospital
                        </Nav.Link>
                        <Nav.Link className="dropdown-item" href="#">
                          Eshwari holistic health center
                        </Nav.Link>
                        <Nav.Link className="dropdown-item" href="#">
                          Nirmalikarana centre
                        </Nav.Link>
                        <Nav.Link className="dropdown-item" href="#">
                          Yoga chikistha centre
                        </Nav.Link>
                      </div>
                      <div className="p-1">
                        <div className="dropdown-header p-2">
                          Yoga chikistha centre
                        </div>
                        <NavDropdown.Divider />

                        <Nav.Link className="dropdown-item" href="#">
                          - Hormones imbalance
                        </Nav.Link>
                        <Nav.Link className="dropdown-item" href="#">
                          - Weight loss
                        </Nav.Link>
                        <Nav.Link className="dropdown-item" href="#">
                          - Joints and musculoskeletal disorder
                        </Nav.Link>
                        <Nav.Link className="dropdown-item" href="#">
                          - Diabetic management
                        </Nav.Link>
                        <Nav.Link className="dropdown-item" href="#">
                          - Hypertension management
                        </Nav.Link>
                        <Nav.Link className="dropdown-item" href="#">
                          - General wellness
                        </Nav.Link>
                      </div>
                    </div>
                  </div>
                </li>
              </Nav>
              <Form inline>
                <Button variant="primary">Donate</Button>
                <ul className="shop-ul">
                  <li>
                    <Link className="shop-link" to="#">
                      <MdShoppingCart />
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link className="shop-link" to="#">
                      <MdPeople />
                      Volunteer
                    </Link>
                  </li>
                  <li>
                    <Link className="shop-link" to="#">
                      <MdSearch />
                      Search
                    </Link>
                  </li>
                </ul>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
