import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Header.css'
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/' className='fw-bold'>SAL ACCOUNTING</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Services</Nav.Link>
                            <Nav.Link href="#pricing">Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">About</Nav.Link>
                            <Nav.Link as={Link} to='/login'>
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;