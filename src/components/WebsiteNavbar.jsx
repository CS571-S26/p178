import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/COGC Logo2.jpg";

function WebsiteNavbar({ isLoggedIn, setIsLoggedIn, setShowLogin, setShowRegister }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("loggedIn");
        setIsLoggedIn(false);
        navigate("/p178");
    };

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
                    />
                </Navbar.Brand>

                <Nav className="me-auto navbar-brand">
                    <Nav.Link as={Link} to="/p178">Home</Nav.Link>
                    <Nav.Link as={Link} to="/p178/QuoteOTM">Quote of the Month</Nav.Link>
                    <Nav.Link as={Link} to="/p178/quotes">Quotes</Nav.Link>
                    <Nav.Link as={Link} to="/p178/about">About</Nav.Link>
                </Nav>

                <Nav className="navbar-brand">
                    {!isLoggedIn ? (
                        <>
                            <Nav.Link onClick={() => setShowLogin(true)}>
                                Login
                            </Nav.Link>

                            <Nav.Link onClick={() => setShowRegister(true)}>
                                Register
                            </Nav.Link>
                        </>
                    ) : (
                        <Nav.Link onClick={handleLogout}>
                            Logout
                        </Nav.Link>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
}

export default WebsiteNavbar;