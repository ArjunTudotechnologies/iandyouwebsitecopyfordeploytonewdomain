import React, { Component } from 'react';
import { Navbar, Form, Button, Nav, NavDropdown, Container } from 'react-bootstrap';
import Logo from "../../assets/img/logo.png";
import Topbar from '../Topbar/Topbar';

export default class Header extends Component {

    render() {
        return (
            <div>
                <Topbar />
                <Navbar className="shadow header" bg="light" expand="lg"  >
                    <Container>
                        <Navbar.Brand href="#home">
                            <img className="logo" alt="I And You Foundation" src={Logo} />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home" className="ml-5">Home</Nav.Link>
                                <li class="nav-item px-4 dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="servicesDropdown">
                                        <a class="dropdown-item" href="#">What we do</a>
                                        <a class="dropdown-item" href="#">How we fit your needs</a>
                                        <div class="dropdown-divider"></div>
                                        <div class="d-md-flex align-items-start justify-content-start">
                                            <div>
                                                <div class="dropdown-header">Development</div>
                                                <a class="dropdown-item" href="#">Bespoke software</a>
                                                <a class="dropdown-item" href="#">Mobile apps</a>
                                                <a class="dropdown-item" href="#">Websites</a>
                                            </div>
                                            <div>
                                                <div class="dropdown-header">Professional Services</div>
                                                <a class="dropdown-item" href="#">Project rescue</a>
                                                <a class="dropdown-item" href="#">Source code recovery</a>
                                                <a class="dropdown-item" href="#">Application support &amp; maintenance</a>
                                            </div>
                                            <div>
                                                <div class="dropdown-header">Fixed Price Services</div>
                                                <a class="dropdown-item" href="#">Add cookie consent</a>
                                                <a class="dropdown-item" href="#">Add captcha</a>
                                                <a class="dropdown-item" href="#">Add core data</a>
                                                <a class="dropdown-item" href="#">Custom error pages</a>
                                                <a class="dropdown-item" href="#">Contact form creation</a>
                                                <a class="dropdown-item" href="#">Automated backups</a>
                                                <a class="dropdown-item" href="#">Image to HTML</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <NavDropdown title="Yoga & Meditation" id="basic-nav-dropdown-yoga">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Projects" id="basic-nav-dropdown-projects">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Events" id="basic-nav-dropdown-events">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Courses" id="basic-nav-dropdown-courses">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#home">Shop</Nav.Link>

                            </Nav>
                            <Form inline>
                                <Button variant="primary">Donate</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
