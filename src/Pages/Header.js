
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Header() {
    const [activeTab, setActiveTab] = useState(1);

    // Function to toggle active tab
    const toggleTab = (tab) => {
      setActiveTab(tab);
    };
 
    return (
        <>
            <Navbar className="bg-body-tertiary ps-lg-5 pe-lg-5 nav_1">
                <Navbar.Brand as={NavLink} to="/" className="text-white ms-lg-5"><img src='https://www.ococabs.com/images/logo.png' width='200px' /></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end enquiry-end-margin  mt-0">
                    <Navbar.Text >
                        <NavLink to="tel:+918421777463" className='nav-link enquiry-button' rounded> Enquiry Call </NavLink>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>

            <Navbar expand="lg" className=" nav_2 ">
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-center flex-grow-1 pe-3 my-custom-nav ms-md-3">
                        <Nav.Link as={NavLink} className='header-nav'  to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} className='header-nav' to="about-us">About Us</Nav.Link>
                        <Nav.Link as={NavLink} className='header-nav' to="blogs">Blogs</Nav.Link>
                        <Nav.Link as={NavLink} className='header-nav' to="login">Login</Nav.Link>
                        <Nav.Link as={NavLink} className='header-nav' to="contact-us">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        </>
    );
}

export default Header