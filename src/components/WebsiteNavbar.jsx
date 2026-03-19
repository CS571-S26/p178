import React, { useState, useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router";



function WebsiteNavbar(props) {



    //return the navbar
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand as={Link} to="/p178">My Website</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/p178">Home</Nav.Link>
                    <Nav.Link as={Link} to="/p178/about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default WebsiteNavbar;
