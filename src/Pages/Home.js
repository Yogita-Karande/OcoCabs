import React, { useState } from 'react';
import { Card, CardBody, Col, Image, NavLink, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/esm/Container';
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import DayRental from './Nested-Home-Pages/Day-Rental';
import OneWay from './Nested-Home-Pages/One-Way';
import RoundTrip from './Nested-Home-Pages/Round-Trip';
import Testmonials from './Testmonials';

function Home() {
  const [activeTab, setActiveTab] = useState(1);

   // Function to toggle active tab
   const toggleTab = (tab) => {
     setActiveTab(tab);
   };

  const navigate = useNavigate()
  const navigateTo = () => navigate('/about-us');

  return (
    <Container fluid className="px-0">
      <Row className="position-relative m-0">
        <Col lg={8} className='d-inline p-0'>
          <Image src='./assets/images/travel-by-car-summer-holiday_135595-51439.jpg' width='100%' className='h-lg-800px' />
        </Col>

        {/* Find Cab page section */}

        <Col lg={4} md={6} className='bg-dark'>
          <Card className='bg-form margin-right position-absolute top-0 end-0'>
            <Card.Body>
              <Nav defaultActiveKey="1" className='Nav-Link'>
                <Nav.Item >
                  <Nav.Link eventKey="1" onClick={() => toggleTab(1)}  style={{ borderBottom: activeTab === 1 ? '2px solid black' : 'none' }} className='text-dark'>ONE-WAY</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="2" onClick={() => toggleTab(2)} style={{ borderBottom: activeTab === 2 ? '2px solid black' : 'none' }} className='text-dark'>ROUND TRIP</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="3" onClick={() => toggleTab(3)}  style={{ borderBottom: activeTab === 3 ? '2px solid black' : 'none' }} className='text-dark'>DAY RENTAL</Nav.Link>
                </Nav.Item>
              </Nav>
              {activeTab === 1 && <OneWay />}
              {activeTab === 2 && <RoundTrip />}
              {activeTab === 3 && <DayRental />}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Short About Section*/}

      <Row className="mb-3">

        <Col lg={8} className='mx-auto'  data-aos="fade-right">
          <h1 className='about mb-3 text-center mt-lg-5 contact-text'>ABOUT US</h1>
          <p className='ms-4 me-4'>we are India's leader for taxi travels provider. we are promise you safe ,reliable and cost-effective inter-city taxis all over Maharashtra and India. our mission is to simplify outstation travel for all Indians and we welcome your suggestions for improvement always.' Ococabs 'vision is to enable easier, safer and reliable outstation travel acro...
          </p>
          <Col className='read-more-button text-center m-4 mx-auto'>
            <NavLink onClick={navigateTo}>Read More</NavLink>
          </Col>
          
        </Col>
      </Row>

      {/*  Why Choose Us Section */}

      <h2 className='color m-4 text-center contact-text'> WHY CHOOSE US ?</h2>
      <Row className='mb-4'  data-aos="fade-right">
        <Col lg={4} className='mx-auto'>
          <Card className='m-4 accordian-cards'>
            <CardBody>
              <h4><i class="fas fa-arrow-down me-3"></i>Less Price</h4>
              <p>We are customer oriented so we always look towards best fit price for their journey. We charge less amount which is reasonale for customers.</p>
            </CardBody>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className='m-4 accordian-cards'>
            <CardBody>
              <h4><i class="fa-solid fa-car me-3"></i>Clean & Neat Cars</h4>
              <p>We highly maintain our cars inner atmoshphere. We are dedicated towards provide healthy environment inside cab/car.</p>
            </CardBody>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className='m-4 accordian-cards'>
            <CardBody>
              <h4><i class="fa-solid fa-person me-3"></i>Well Trained Drivers</h4>
              <p>Our drivers and partners are well mannered and customer friendly in nature.</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Testmonials/>
      </Row>
    </Container>
  )
}
export default Home;