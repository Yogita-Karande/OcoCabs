import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
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
    <Container fluid data-aos="fade-right">
      <Row className='text-white pt-4 pb-4 bg-dark'>
        <Col className='list-style footer'>
          <h5 className='mb-4'>SUPPORT NUMBER (24X7)</h5>
          <NavLink className='nav-link' to='tel:+918421777463'>New Booking: +918421777463</NavLink>
          <NavLink className='nav-link' to='tel:+918421777463'>Existing Booking: +918421777463</NavLink>
          <NavLink className='nav-link' to='tel:+918421994130'>Attach Taxi/Cab: +918421994130</NavLink>
          <NavLink className='nav-link' to='tel:+918421777463'>Customer Helpline: +918421777463</NavLink>
        </Col>

        <Col className='footer'> 
          <h5 className='mb-4'>POLICIES</h5>
          <NavLink className='nav-link' to='terms-and-condition'>Terms & Conditions</NavLink>
          <NavLink className='nav-link' to='privacy-policy'>Privacy Policy</NavLink>
          <NavLink className='nav-link' to='refund-policy'>Refund Policy</NavLink>
          <NavLink className='nav-link' to='cancelation-policy'>Cancellation Policy</NavLink>
        </Col>

        <Col className= 'footer'>
          <Image src='./assets/images/Ococabs_logo/short_logo.png' />
          <Col className='d-flex mt-4'>
            <NavLink className='nav-link' to='https://www.facebook.com/Akshada-Info-System-767861740053468/'><i class="fa-brands fa-square-facebook" style={{ fontSize: '24px' }}></i></NavLink>
            <NavLink className='nav-link' to='https://twitter.com/AkshadaInfo'><i class="fa-brands fa-square-twitter" style={{ fontSize: '24px' }}></i></NavLink>
            <NavLink className='nav-link' to='https://api.whatsapp.com/send?phone=918421777463'><i class="fa-brands fa-square-whatsapp" style={{ fontSize: '24px' }}></i></NavLink>
            <NavLink className='nav-link' to='https://www.instagram.com/akshadainfosystem/'><i class="fa-brands fa-square-instagram" style={{ fontSize: '24px' }}></i></NavLink>
            <NavLink className='nav-link' to='https://in.linkedin.com/company/akshada-info-system'><i class="fa-brands fa-linkedin" style={{ fontSize: '24px' }}></i></NavLink>
            <NavLink className='nav-link' to='https://www.youtube.com/@ococabs9550'><i class="fa-brands fa-square-youtube" style={{ fontSize: '24px' }}></i></NavLink>
          </Col>
        </Col>
      </Row>
      <Row className='footer2 text-center p-4'>
        <Col >
          <span>&copy;2024 All rights reserved</span>
        </Col>
      </Row>
    </Container>
  )
}
export default Footer;