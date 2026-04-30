import React, { useState, useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router";
import logo from "../assets/COGC Logo2.jpg";



function WebsiteNavbar(props) {



    //return the navbar
    return (
        <Navbar bg="black" expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand as={Link} to="/p178">
                    <img
                        alt=""
                        src={logo}
                        width="80"
                        height="80"
                        className="d-inline-block align-top"
                    />{' '}                
                </Navbar.Brand>
                <Nav className="me-auto navbar-brand">
                    <Nav.Link as={Link} to="/p178">Home</Nav.Link>
                    <Nav.Link as={Link} to="/p178/QuoteOTM">Quote of the Month</Nav.Link>
                    <Nav.Link as={Link} to="/p178/quotes">Quotes</Nav.Link>
                    <Nav.Link as={Link} to="/p178/about">About</Nav.Link>
                </Nav>

                {/* RIGHT SIDE */}
                <Nav className="navbar-brand">
                    <Nav.Link as={Link} to="/p178/login">Login</Nav.Link>
                    <Nav.Link as={Link} to="/p178/register">Register</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default WebsiteNavbar;
