import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Footer() {

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <Container fluid>
      <Row>
      <Col className='list-style p-4 text-center bg-dark text-white'>
        <h5 className='mb-4'>SUPPORT NUMBER (24X7)</h5>
        <Col className='footer mb-2 gap-2'>
          <NavLink className='nav-link with-border' to='tel:+918421777463'>New Booking: +918421777463</NavLink>
          <NavLink className='nav-link with-border' to='tel:+918421777463'>Existing Booking: +918421777463</NavLink>
          <NavLink className='nav-link with-border' to='tel:+918421994130'>Attach Taxi/Cab: +918421994130</NavLink>
          <NavLink className='nav-link with-border' to='tel:+918421777463'>Customer Helpline: +918421777463</NavLink>
        </Col>
        <Col className='d-flex footer mb-2'>
          <NavLink className='nav-link' to='https://www.facebook.com/Akshada-Info-System-767861740053468/'><i className="fa-brands fa-square-facebook" style={{ fontSize: '35px' }}></i></NavLink>
          <NavLink className='nav-link' to='https://twitter.com/AkshadaInfo'><i className="fa-brands fa-square-twitter" style={{ fontSize: '35px' }}></i></NavLink>
          <NavLink className='nav-link' to='https://api.whatsapp.com/send?phone=918421777463'><i className="fa-brands fa-square-whatsapp" style={{ fontSize: '35px' }}></i></NavLink>
          <NavLink className='nav-link' to='https://www.instagram.com/akshadainfosystem/'><i className="fa-brands fa-square-instagram" style={{ fontSize: '35px' }}></i></NavLink>
          <NavLink className='nav-link' to='https://in.linkedin.com/company/akshada-info-system'><i className="fa-brands fa-linkedin" style={{ fontSize: '35px' }}></i></NavLink>
          <NavLink className='nav-link' to='https://www.youtube.com/@ococabs9550'><i className="fa-brands fa-square-youtube" style={{ fontSize: '35px' }}></i></NavLink>
        </Col>
        <Col className=' footer gap-2'>
          <NavLink className='nav-link with-border' to='terms-and-condition'>Terms & Conditions</NavLink>
          <NavLink className='nav-link with-border' to='privacy-policy'>Privacy Policy</NavLink>
          <NavLink className='nav-link with-border' to='refund-policy'>Refund Policy</NavLink>
          <NavLink className='nav-link with-border' to='cancelation-policy'>Cancellation Policy</NavLink>
        </Col>
      </Col>
      </Row>
      <Row className='text-center footer2 p-4'>
        <Col >
          <span>&copy;2024 All rights reserved</span>
        </Col>
      </Row>
    </Container>
  )
}
export default Footer;