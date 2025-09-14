import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from '../../assets/img/fia_logo.png';
import '/public/global.css'
import './HeaderPart1.css'

const HeaderPart1: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar variant="dark" expand="lg" sticky="top" style={{backgroundColor: "rgb(21, 21, 30)"}} onToggle={setMenuOpen} expanded={menuOpen}>
            <Container>
                <Navbar.Brand href="/">
                    <div className="logo-white">
                        <img
                            alt="F1 Logo"
                            src={logo}
                            width="40"
                            className="d-inline-block align-top"
                        />
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="f1-navbar-nav" />
                <Navbar.Collapse id="f1-navbar-nav">
                    <Nav className="ms-auto text-uppercase fw-semibold gap-3">
                        <Nav.Link href="/" >Authentics</Nav.Link>
                        <Nav.Link href="/">Store</Nav.Link>
                        <Nav.Link href="/">Ticket</Nav.Link>
                        <Nav.Link href="/">Hospitality</Nav.Link>
                        <Nav.Link href="/">Experience</Nav.Link>
                    </Nav>

                    <div className="ms-3">
                        <Button variant="outline-light" className="me-2 rounded-5">Sign In</Button>
                        <Button className={"rounded-5 border-black"} style={{backgroundColor: "#d80d0d"}}>Subscribe</Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderPart1;
