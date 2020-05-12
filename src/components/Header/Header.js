import React, { Component } from 'react';
import { Navbar, NavDropdown, Form, Button, Nav, Container } from 'react-bootstrap';
import Logo from "../../assets/img/logo.png";

// export default function Header() {
// export class Header extends React.Component {
export default class Header extends Component {

    constructor(props) {
        super(props)
        this.state = { isOpen: false }
    }

    handleOpen = () => {
        this.setState({ isOpen: true })
    }

    handleClose = () => {
        this.setState({ isOpen: false })
    }
    render() {
        return (
            <div>
                <Navbar className="shadow header" bg="light" expand="lg" fixed="top">
                    <Container fluid>
                        <Navbar.Brand href="#home"><img className="logo" alt="I And You Foundation" src={Logo} /> <span className="logo-text">i and you being together foundation</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <NavDropdown onMouseEnter={this.handleOpen}
                                    onMouseLeave={this.handleClose}
                                    open={this.state.isOpen} title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#home">Workshop</Nav.Link>
                                <Nav.Link href="#home">Projects</Nav.Link>
                                <Nav.Link href="#link">I And You</Nav.Link>
                                <Nav.Link href="#home">Shop</Nav.Link>

                            </Nav>
                            <Form inline>
                                <Button variant="primary">Contact</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}