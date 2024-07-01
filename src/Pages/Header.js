
import { useEffect, useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { getToken, removeToken } from '../authentication_token/Token';

function Header() {
    const navigate = useNavigate();
    const [token, setToken] = useState('')

    useEffect(() => {
        const fetchedToken = getToken();
        setToken(fetchedToken);
        console.log(fetchedToken)
    }, []);

    useEffect(() => {
        console.log(token);
    }, [token]); // Log token only when it changes

    const handleLogout = () => {
        removeToken();
        console.log(token)
        navigate('/login');
        console.log('Logged out and token removed!');
    };

    return (
        <>
            <Navbar expand="lg" className=" nav_2 bg-body-tertiary ps-lg-5 pe-lg-5 nav_1 shadow-lg">
                <Navbar.Brand as={NavLink} to="/" className="text-white ms-lg-5"><img src='https://www.ococabs.com/images/logo.png' width='200px' /></Navbar.Brand>

                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end flex-grow-1 pe-3 my-custom-nav ms-md-3">
                        <Nav.Link as={NavLink} className='header-nav with-border' to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} className='header-nav with-border' to="about-us">About Us</Nav.Link>
                        <Nav.Link as={NavLink} className='header-nav with-border' to="blogs">Blogs</Nav.Link>
                        <Nav.Link as={NavLink} className='header-nav with-border' to="contact-us">Contact Us</Nav.Link>

                        {token == null ? (
                            <Nav.Link as={NavLink} className='header-nav' to="login">Login</Nav.Link>
                        ) : (
                            <Dropdown as={ButtonGroup}>
                                <NavLink className='nav-link my-account-dropdown with-border' to="my-home">My Account</NavLink>
                                <Dropdown.Toggle split className='my-account-dropdown btn btn-dark' id="dropdown-my-account-basic" />
                                <Dropdown.Menu>
                                    <Nav.Link as={NavLink} className='header-nav' to="my-bookings">My Bookings</Nav.Link>
                                    <Nav.Link as={NavLink} className='header-nav' to="update-profile">Update Profile</Nav.Link>
                                    <Nav.Link as={NavLink} className='header-nav' onClick={handleLogout}>Logout</Nav.Link>
                                    <Nav.Link as={NavLink} className='header-nav' to="notification">Notification</Nav.Link>
                                </Dropdown.Menu>
                            </Dropdown>)}
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        </>
    );
}
export default Header