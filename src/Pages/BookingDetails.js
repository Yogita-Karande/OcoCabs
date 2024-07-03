import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { getUserBooking } from '../api/Api';
// import Loader from "./Loader";

function BookingDetails() {

  const [data, setData] = useState();
  const [bookingerror, setError] = useState();
  const [token, setToken] = useState();
  const [error, pageError] = useState();
  const navigate = useNavigate()
  const navigateTo = () => navigate('notification');

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem('token');
    setToken(tokenFromStorage);
  }, []);

  useEffect(() => {
    async function fetchData() {
      const submittedForm = await getUserBooking(token);
      console.log(submittedForm)
      try {
        if (submittedForm.status === 200) {
          // setData(submittedForm.data)
          setError(submittedForm.message);
        }
      } catch (error) {
        alert('undefined data');
      }
    }
    fetchData();
  }, []);


  const cancelBooking = async (e) => {
    e.preventDefault();
    try {
      const submittedForm = await getUserBooking(token);
      if (submittedForm.status === 200) {
        setData(submittedForm.message);
      } else {
        setError(submittedForm.message);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  }


  return (
    <>
      <Container className='min-vh-100 mb-5'>
        <Col className='d-flex'>
          <h1 className='my-booking text-muted fs-4 my-4 text-danger'>BOOKING DETAILS</h1>
          {/* <NavLink onClick={navigateTo}><i className="fa-solid fa-bell notification-icon"></i></NavLink> */}
        </Col>

        {
          data == null ? <p>{bookingerror}</p> : (<Form>
            <Row>
              <Col lg={3}>
                <Card className='shadow-lg' >
                  <Col className='text-center'>
                    <span >
                      <i className="fa-solid fa-check mt-2 text-success"></i>
                    </span>
                    <h5 className='text-success'>Booking successful!</h5>
                    <p className='text-success'>Congratulations your booking is done!</p>
                    <hr />
                    <Col className='text-muted'>
                      <p>Booked on 21 may , 2024</p>
                    </Col>
                    <Col className='text-muted'>
                      <p>Booking reference no.<br />56696586</p>
                    </Col>
                  </Col>
                </Card>
              </Col>
              <Col className='customer-name'>
                <h5><strong>Dear Ravindra Mane,</strong> <br /><span className='fs-5 mt-1 text-muted'>Your Booking for shivaji Nagar to Narhe is confirmed</span></h5>
              </Col>
              <Col className='text-end'>
                <Button className='cancel-booking' onClick={cancelBooking}>Cancel Booking</Button>
              </Col>
            </Row>
            <Card className='mt-5'>
              <Row>
                <Col lg={8} className='mt-3 ms-4'>
                  <h6>PACKAGE DETAILS</h6>
                  <hr />
                  <h5>Pune and Ahmadnagar</h5>
                  <p>Travellers - 2 adult , 1 child</p>
                  <Row>
                    <Col>
                      <p>From Date & Time </p>
                      <p>29 June Wednesday, 2:30PM</p>
                    </Col>
                    <Col>
                      <p>To Date & Time </p>
                      <p>30 June Thursday, 5:00PM</p>
                    </Col>
                  </Row>
                </Col>
                <Col className='mt-3 me-4'>
                  <h6>TRAVELER DETAILS</h6>
                  <hr />
                  <Col>
                    <h5><strong> <i className="fa-solid fa-user me-3"></i>Ravindra Mane,</strong> </h5>
                    <p><i className="fa-solid fa-envelope me-3"></i>ravindra234@gmail.com</p>
                    <p><i className="fa-solid fa-phone me-3"></i>+919309211604</p>
                  </Col>
                </Col>
              </Row>
            </Card>
            <Card className='mt-5'>
              <Col className='mt-3 mx-4'>
                <h6>AMOUNT PAYABLE</h6>
                <hr />
              </Col>
              <Row className=' mx-4'>
                <Col>
                  <p>Total Amount</p>
                </Col>
                <Col className='text-end'>
                  <p>500.00</p>
                </Col>
                <hr />
              </Row>
              <Row className=' mx-4'>
                <Col>
                  <p>-Discount</p>
                </Col>
                <Col className='text-end'>
                  <p>100.00</p>
                </Col>
                <hr />
              </Row>
              <Row className=' mx-4'>
                <Col>
                  <p>Extra Charges</p>
                </Col>
                <Col className='text-end'>
                  <p>50.00</p>
                </Col>
                <hr />
              </Row>
              <Row className=' mx-4 '>
                <Col className='text-end'>
                  <p>Total : 400.00</p>
                </Col>
              </Row>
            </Card>
          </Form>)
        }
      </Container>
    </>
  )
}

export default BookingDetails