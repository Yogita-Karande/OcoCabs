import React, { useState } from 'react';
import { Card, Col, Container, Nav, Row } from 'react-bootstrap';
import Previous_Journey from './Previous_Journey';
import Upcoming_Journey from './Upcoming_Journey';

function My_Bookings() {

  const [toggle, settoggle] = useState(1)

  const toggleTab = (index) => {
    settoggle(index)
  }

  return (
    <>
      <Container fluid className='min-vh-100 '>
        <h1 className='my-booking  text-center text-muted fs-2 my-3'>MY BOOKINGS</h1>
        <Row>
          <Col>
            <Card className='py-3 p-3'>
              <Card.Body >
                <Nav fill variant="tabs" defaultActiveKey="link-1" className='mb-3'>
                  <Nav.Item >
                    <Nav.Link className="btn1" onClick={() => toggleTab(1)} eventKey="link-1">Previous Journey</Nav.Link>
                  </Nav.Item >
                  <Nav.Item>
                    <Nav.Link className="btn2" onClick={() => toggleTab(2)} eventKey="link-2">Upcoming Journey</Nav.Link>
                  </Nav.Item>
                </Nav>
                {toggle === 1 && <Previous_Journey />}
                {toggle === 2 && <Upcoming_Journey />}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default My_Bookings