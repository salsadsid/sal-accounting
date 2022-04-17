import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

import './Header.css'
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/' className='fw-bold'>SAL ACCOUNTING</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#capabilities">Capabilities</Nav.Link>
                            <Nav.Link href="#pricing">Blogs</Nav.Link>
                            <Nav.Link href="#deets">About</Nav.Link>
                        </Nav>
                        <Nav>
                            {user ?
                                <button onClick={handleSignOut} className='btn btn-link text-decoration-none text-white'>Sign out</button>
                                :
                                <Nav.Link as={Link} to='/login' className='text-white'>
                                    Login
                                </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;