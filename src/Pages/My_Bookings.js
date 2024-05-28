import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function My_Bookings() {
  return (
    <>
        <Container className='min-vh-100'>
        <h1 className='contact-text main-about text-center text-muted my-4 fs-2'>MY BOOKINGS</h1>
            <Row>
                <Col>
                    <h1 className='text-center text-danger fs-3 mt-5'>You haven't use our cab service yet. To enjoy comfortable journey, travel by our cabs.</h1>
                </Col>
            </Row>
        </Container>
    </>
  )
} 

export default My_Bookings