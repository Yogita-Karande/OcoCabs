import { useEffect, useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../authentication_token/AuthProvider';

function Header() {
    const navigate = useNavigate();
    const [token, setToken] = useState();
    const { getToken } = useAuth()
    const {removeToken}= useAuth()

    useEffect(() => {
        const mytoken = getToken();
        console.log('Token:', mytoken);
        setToken(mytoken)
    }, [getToken]);

    const handleLogout = () => {
        removeToken();
        navigate('/login');
    }

    return (
        <>
            <Navbar expand="lg" className="nav_2 bg-body-tertiary ps-lg-5 pe-lg-5 nav_1 shadow-lg">
                <Navbar.Brand as={NavLink} to="/" className="text-white ms-lg-5">
                    <img src='https://www.ococabs.com/images/logo.png' width='200px' alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end flex-grow-1 pe-3 my-custom-nav ms-md-3">
                        <Nav.Link as={NavLink} className='header-nav with-border' to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} className='header-nav with-border' to="about-us">About Us</Nav.Link>
                        <Nav.Link as={NavLink} className='header-nav with-border' to="blogs">Blogs</Nav.Link>
                        <Nav.Link as={NavLink} className='header-nav with-border' to="contact-us">Contact Us</Nav.Link>
                        {token == null ? (
                            <Nav.Link as={NavLink} className='header-nav with-border' to="login">Login</Nav.Link>
                        ) : (
                            <Dropdown as={ButtonGroup}>
                                <NavLink className='nav-link my-account-dropdown with-border' to="my-home">My Account</NavLink>
                                <Dropdown.Toggle split className='my-account-dropdown btn btn-dark' id="dropdown-my-account-basic" />
                                <Dropdown.Menu>
                                    <NavDropdown.Item as={NavLink} to="update-profile">Update Profile</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="bookingdetails">My Bookings</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="notification">Notification</NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleLogout}> Logout</NavDropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Header;
