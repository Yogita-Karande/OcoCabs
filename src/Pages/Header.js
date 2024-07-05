import { useEffect, useState } from 'react';
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
    const { removeToken } = useAuth()

    useEffect(() => {
        const mytoken = getToken();
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
                            <Nav.Link as={NavLink} className='header-nav with-border' to="login"><i class="fa-regular fa-user me-3"></i>Login</Nav.Link>
                        ) : (
                            <NavDropdown
                                title='My Account'
                                className='header-nav dropdown-centered'
                                data-toggle="collapse" >
                                <NavDropdown.Item as={NavLink} to="update-profile"><i class="fa-regular fa-user me-3"></i>Update Profile</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="bookingdetails"><i class="fa-solid fa-car me-3"></i>My Bookings</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="notification"><i class="fa-regular fa-bell me-3"></i>Notification</NavDropdown.Item>
                                <NavDropdown.Item onClick={handleLogout}><i class="fa-solid fa-arrow-right-from-bracket me-3"></i>Logout</NavDropdown.Item>
                            </NavDropdown>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Header;
