import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './SharedPage.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar className='navbar' collapseOnSelect expand="lg" sticky='top'>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <h3 className=" title mt-2 mb-1">Your Warehouse</h3>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mt-1 ms-auto">
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link as={Link} to="home#productAll">Products</Nav.Link>
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                        </Nav>

                        <Nav className="mt-1">
                            {
                                user
                                    ?
                                    <>
                                        <Nav.Link as={Link} to="manageProducts"> ManageProducts </Nav.Link>
                                        <Nav.Link as={Link} to="myProducts"> MyProducts </Nav.Link>
                                        <Nav.Link as={Link} to="addProducts"> AddProducts </Nav.Link>
                                        <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign-out</button>
                                    </>

                                    :
                                    <Nav.Link as={Link} to="signIn"> Sign-in </Nav.Link>

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;