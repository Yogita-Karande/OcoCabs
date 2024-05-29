
import React from 'react'
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Image, Row } from 'react-bootstrap'

function Search() {
  return (
    <Container className='min-vh-100'>
      <h1 className='fs-3 text-center mt-3  text-muted'>SEARCH</h1>
      <Row>
        <Col lg={3}>
          <CardGroup >
            <Card>
              <CardBody >
                <Image src="./assets/images/car.jpg" width="270px" height="270px" />
                <Col className='text-center'>
                  <Form.Group controlId="formGridPhoneNo" className='d-flex' >
                    <span>
                      <i class="fa-solid fa-circle-dot me-3 mt-3 pick-location"></i>
                    </span>
                    <Form.Control className="mt-1 border-0 m" name="pickuplocation"
                      placeholder='Pick Up Location'
                      type="search" required />
                  </Form.Group>
                </Col>
                {/* <hr className='ms-3' /> */}
                <Col>
                  <Form.Group controlId="formGridPhoneNo" className='d-flex' >
                    <span><i class="fa-solid fa-circle-dot mt-2 me-3"></i></span>
                    <Form.Control className="border-0  " name="droplocation" placeholder='Drop Location'
                      required />
                  </Form.Group>
                </Col>
                {/* <hr className='ms-3' /> */}
                <p className='my-2 ms-5'>Price : <strong>355/-</strong></p>
                <Col className='text-center d-grid mt-3'>
                  <Button size="md">Book OcoCab</Button>
                </Col>
              </CardBody>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Search