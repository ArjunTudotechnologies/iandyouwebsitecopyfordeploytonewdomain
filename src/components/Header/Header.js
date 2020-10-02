import React, { useState } from "react";
import {
  Navbar,
  Form,
  Button,
  Nav,
  NavDropdown,
  Container,
  Modal,
} from "react-bootstrap";
import Logo from "../../assets/img/logo.png";
import Topbar from "../Topbar/Topbar";
import { Link } from "react-router-dom";
import { MdShoppingCart, MdSearch, MdPeople } from "react-icons/md";

function payNow() {
  var options = {
    key: "rzp_test_BZW768t6Yakl8K", // Enter the Key ID generated from the Dashboard
    amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "Acme Corp",
    description: "Test Transaction",
    image: "https://example.com/your_logo",
    // order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    handler: function (response) {
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
    prefill: {
      name: "Gaurav Kumar",
      email: "gaurav.kumar@example.com",
      contact: "9999999999",
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#F37254",
    },
  };
  var rzp1 = new window.Razorpay(options);
  rzp1.open();

  // document.getElementById("rzp-button1").onclick = function (e) {
  //   rzp1.open();
  //   e.preventDefault();
  // };
}

export default function Header() {
  const [lgShow, setLgShow] = useState(false);
  return (
    <div>
      <Topbar />
      <Navbar className="shadow header" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img className="logo" alt="I And You Foundation" src={Logo} />
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
              <Link className="nav-link dropdown-item" to="iandyou">
                I And You
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
                      <div className="dropdown-header p-2">Eshwari sadhana</div>
                      <NavDropdown.Divider />
                      <Link
                        className="nav-link dropdown-item"
                        to="eshwari-kriya"
                      >
                        - Eshwari Kriya
                      </Link>
                      <Link
                        className="nav-link dropdown-item"
                        to="eshwari-shakthi-kendra-sadhana"
                      >
                        - Eshwari Shakthi kendra sadhana
                      </Link>
                      <Link
                        className="nav-link dropdown-item"
                        to="eshwari-srividhya-sadhana"
                      >
                        - Srividhya Eshwari sadhana- level 1&2
                      </Link>
                      <Nav.Link className="dropdown-item" href="udgamana">
                        - Udgamana sadhana
                      </Nav.Link>
                      <Nav.Link className="dropdown-item" href="guru-puja">
                        - Guru pooja
                      </Nav.Link>
                      <Nav.Link className="dropdown-item" href="guru-puja">
                        - Eshwari shodhana kriya
                      </Nav.Link>
                    </div>
                    <div className="p-1">
                      <div className="dropdown-header p-2">Dhanya prakriya</div>
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
                      <Nav.Link
                        className="dropdown-item"
                        href="know-your-purpose"
                      >
                        - Know your purpose
                      </Nav.Link>
                      <Nav.Link className="dropdown-item" href="#">
                        - Amrut sadhana
                      </Nav.Link>
                      <Nav.Link
                        className="dropdown-item"
                        href="manah-prakshalya"
                      >
                        - Manah Prakshalya
                      </Nav.Link>
                      <Nav.Link
                        className="dropdown-item"
                        href="kala-bhirava-dhyana"
                      >
                        - Kala Bhairava Dhyana
                      </Nav.Link>
                    </div>
                    <div className="p-1">
                      <div className="dropdown-header p-2">Adhika sadhana</div>
                      <NavDropdown.Divider />
                      <Link
                        className="nav-link dropdown-item"
                        to="jyothismathi"
                      >
                        <span>Jyothismathi:</span>
                      </Link>
                      <Nav.Link className="dropdown-item" href="astrology">
                        -Astrology / Vastu
                      </Nav.Link>
                      <Nav.Link className="dropdown-item" href="sriyog">
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
                      <div className="dropdown-header p-2">Monthly events</div>
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
                        Astami Kalabairava dhyana
                      </Nav.Link>
                      <Nav.Link className="dropdown-item" href="#">
                        Poornima Gurupooja with navavarana Dhyana
                      </Nav.Link>

                      <div className="dropdown-header p-2 mt-5">
                        Special events
                      </div>
                      <NavDropdown.Divider />

                      <Nav.Link className="dropdown-item" href="sri">
                        <span>Sri-</span>Attract abundant of wealth
                      </Nav.Link>
                      <Nav.Link className="dropdown-item" href="#">
                        <span>Sri Kari -</span> Manifest your intentions
                      </Nav.Link>
                      <Nav.Link className="dropdown-item" href="#">
                        <span>Gratitude week -</span> Guruji's birthday
                        <br />
                        celebration through Seva
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
                  Projects
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
                      <a
                        className="nav-link dropdown-item"
                        href="http://iandyouvidhya.org/"
                      >
                        <span>I and you Vidhya </span>
                      </a>
                      <a
                        className="nav-link dropdown-item"
                        href="http://iandyouvidhya.org/"
                      >
                        - Educate and Empower a girl child
                      </a>
                      <a
                        className="nav-link dropdown-item"
                        href="http://iandyouvidhya.org/"
                      >
                        - Educate and Empower a dumb and deaf child
                      </a>
                      <a
                        className="nav-link dropdown-item"
                        href="http://iandyouvidhya.org/"
                      >
                        - Educate and Empower a blind Chid
                      </a>
                      <a
                        className="nav-link dropdown-item"
                        href="http://iandyouvidhya.org/"
                      >
                        - Educate and Empower a orphan child
                      </a>
                      <a
                        className="nav-link dropdown-item"
                        href="http://iandyouvidhya.org/"
                      >
                        - Educate and Support government schools
                      </a>

                      <div className="dropdown-header p-2 mt-5">
                        She's Divine
                      </div>
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
                      <Link className="nav-link dropdown-item" to="#">
                        &nbsp;
                      </Link>
                      <div className="dropdown-header p-2 mt-5">
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
              {/* <Link className="shop-link" to="donate">
            </Link> */}
              <Button variant="primary" onClick={() => setLgShow(true)}>
                Donate
              </Button>
              <Modal
                // size="sm"
                show={lgShow}
                onHide={() => setLgShow(false)}
                backdrop="static"
                keyboard={false}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                    Donate Now
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Whether it is through cash contributions or donations in kind,
                  time or expertise, Isha Foundation offers a variety of
                  opportunities for you to extend your support. Donations can be
                  made directly to specific Isha projects of your choice or to
                  the general fund of the Foundation that supports a host of
                  activities.
                  <hr />
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select a campaign</Form.Label>
                    <Form.Control as="select">
                      <option value="I And You Vidhya">I And You Vidhya</option>
                      <option value="I And You Green">I And You Green</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Enter an amount</Form.Label>
                    <Form.Control type="text" placeholder="Enter an amount" />
                  </Form.Group>
                  <Button
                    className="mt-4 mb-3"
                    variant="primary"
                    size="lg"
                    block
                    // id="rzp-button1"
                    onClick={payNow}
                  >
                    Submit
                  </Button>
                </Modal.Body>
              </Modal>
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
