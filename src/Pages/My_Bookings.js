import React, { useState } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';

function My_Bookings() {

  const [toggle, settoggle] = useState(1)
  const navigate = useNavigate()

  const toggleTab = (index) => {
    settoggle(index)
  }

  const Navigate = () =>{
    navigate('/bookingdetails')
  }
  
  return (
    <>
      <Container className='min-vh-100 '>
        <h1 className='my-booking  text-center text-muted fs-2 my-4'>MY BOOKINGS</h1>
        <Row className='justify-content-center'>
          <Col lg={4} className='mt-4'>
            <CardGroup>
              <Card>
                <CardBody>
                  <Row className='my-booking-card border-bottom'>
                    <Col className='mt-1'>
                      <h5>29TH </h5>
                      <h6>APRIL ,  wednesday</h6>
                    </Col>
                    <Col className='text-end my-3 '>
                      <Button onClick={Navigate}>View Details</Button>
                    </Col>
                  <p className='text-success'><strong>Booking Status : </strong></p>

                
                  </Row>
                  <Col className='d-flex mt-3'>
                    <h6> <i class="fa-solid fa-location-dot me-3"></i> {"Shivaji Nagar"}</h6>
                    <i class="fa-solid fa-arrow-right mx-3 mt-1"></i>
                    <h6>{"Narhe"}</h6>
                  </Col>
                  <Col className='d-flex mt-2'>
                    <i class="fa-solid fa-clock me-3"></i><h6>8:30PM</h6>
                  </Col>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container >
    </>
  )
}

export default My_Bookings