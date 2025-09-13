import React from 'react';
import { Container, Row, Col, Nav, Dropdown } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.css';

import AppStoreBadge from '../../assets/img/AppStoreBadge.png'

const Footer: React.FC = () => {
    return (
        <footer className="site-footer-v2 mt-5">
            <Container fluid="lg">
                {/* Top Section: App Download */}
                <Row className="footer-app-section align-items-center mb-4 ">
                    <Col xs={12} md={6}>
                        <h3 className="app-download-title fs-3">DOWNLOAD THE OFFICIAL F1 APP</h3>
                    </Col>
                    <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-end app-badges">
                        <a href="#" className="me-2 ">
                            <img src={AppStoreBadge} alt="App Store" className={"border rounded-2 border-white"} />
                        </a>
                        <a href="#">
                            <img src="https://www.formula1.com/etc/designs/fom-website/images/svg/google-play-badge.svg" alt="Google Play" className={"border rounded-2 border-white"} />
                        </a>
                    </Col>
                </Row>

                {/* Main Navigation */}
                <Nav className="footer-main-nav justify-content-start align-items-center d-flex gap-3">
                    <Nav.Item><Nav.Link href="#">Schedule</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="#">Drivers</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="#">News</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="#">Teams</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="#">Fantasy & Gaming</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="#">Cookie Preferences</Nav.Link></Nav.Item>
                    <Dropdown as={Nav.Item} className="ms-auto">
                        <Dropdown.Toggle as={Nav.Link} className="footer-dropdown-toggle">
                            More
                        </Dropdown.Toggle>
                        <Dropdown.Menu variant="dark" className={"footer-mega-menu"}>
                            <Dropdown.Item href="#">F1 TV</Dropdown.Item>
                            <Dropdown.Item href="#">F1 Experiences</Dropdown.Item>
                            <Dropdown.Item href="#">F1 Authentics</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>

                <div className="footer-divider-container">
                    <img src="https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg" alt="F1 Logo" className="divider-logo" />
                    <div className="divider-bar"></div>
                </div>

                <Row className="footer-bottom-section align-items-center">
                    <Col xs={12} md={6} className="social-links-bottom mb-3 mb-md-0">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaYoutube /></a>
                    </Col>
                    <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-end">
                        <Dropdown>
                            <Dropdown.Toggle variant="dark" className="footer-dropdown-toggle display-mode">
                                Display mode
                            </Dropdown.Toggle>
                            <Dropdown.Menu variant="dark">
                                <Dropdown.Item href="#">Auto</Dropdown.Item>
                                <Dropdown.Item href="#">Dark</Dropdown.Item>
                                <Dropdown.Item href="#">Light</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>

                <p className="copyright-text-bottom">© 2003-2025 Formula One World Championship Limited</p>
            </Container>
        </footer>
    );
};

export default Footer;