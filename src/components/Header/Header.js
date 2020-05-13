import React, { Component } from 'react';
import { Navbar, Form, Button, Nav, Container } from 'react-bootstrap';
import Logo from "../../assets/img/logo.png";

export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar className="shadow header" bg="light" expand="lg" fixed="top">
                    <Container fluid>
                        <Navbar.Brand href="#home">
                            <img className="logo" alt="I And You Foundation" src={Logo} />
                            <span className="logo-text">i and you being together foundation</span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#home">Workshop</Nav.Link>
                                <Nav.Link href="#home">Projects</Nav.Link>
                                <Nav.Link href="#link">I And You</Nav.Link>
                                <Nav.Link href="#home" className="mr-5">Shop</Nav.Link>
                            </Nav>
                            <Form inline>
                                <Button variant="primary">Programs</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}