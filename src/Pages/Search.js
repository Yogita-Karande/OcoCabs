import { useState } from 'react';
import { Card, CardBody, CardGroup, Col, Container, Form, Row } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { useNavigate } from 'react-router';
import { createBooking } from '../api/Api';

function Search() {

  const initialvalues = { source: "", destination: "", journeydatetime: "", token: "" }
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [formvalues, setformvalues] = useState(initialvalues)
  const navigate = useNavigate();

  /** States */

  const handleCreateBooking = async (e) => {
    e.preventDefault();
    try {
      const submittedForm = await createBooking('create-booking', formvalues);
      console.log(submittedForm);

      if (submittedForm.status === 200) {
        setData(submittedForm.message);
        navigate('./booking-successful', { state: { submittedForm } });
      } else {
        setError(submittedForm.message);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  }
  return (
    <Container className='min-vh-100'>
      <h1 className='fs-3 text-center mt-3  text-muted'>SEARCH</h1>
      <Row>
        <Col lg={4}>
          <CardGroup >
            <Card>
              <CardBody >
                <Form onSubmit={handleCreateBooking}>
                  <Col>
                    <Form.Group controlId="formGridPhoneNo" className='d-flex' >
                      <span>
                        <i class="fa-solid fa-circle-dot mt-3 me-2 border-0 pick-location"></i>
                      </span>
                      <Form.Control
                        className="mt-1 border-0"
                        value={'hey'}
                        readOnly
                      />
                    </Form.Group>
                    <hr className='ms-4' />
                  </Col>

                  <Col className='mt-3 d-flex'>
                    <span>
                      <i class="fa-solid fa-circle-dot mt-2 me-2"></i>
                    </span>
                    <Form.Control
                      aria-label="Default select example"
                      className="border-0 "
                      value={'hlo'}
                      readOnly
                     />
                  </Col>
                  <hr className='ms-4' />

                  <Col className='mt-3'>
                    <Form.Group controlId="formGridPhoneNo" className='d-flex' >
                      <span>
                        <i class="fa-solid fa-phone mt-2 me-2"></i>
                      </span>
                      <Form.Control
                        type="text"
                        placeholder='type'
                        className="border-0"
                        value={'hii'}
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                  <hr className='ms-4' />

                  <Col>
                    <i className="far fa-calendar-alt mt-2 me-3"></i>
                    <DatePicker
                      placeholderText="Select Journey Date and Time"
                      showTimeSelect
                      dateFormat="MMMM d, yyyy h:mm aa"
                      className='border-0'
                      value={"m,,"}
                      name='calender'
                      readOnly
                    />
                  </Col>
                  <Col className="d-grid gap-2 text-center search-link text-white mt-4" rounded>
                    <button size="md" type='search' className='btn btn-md btn-block text-white'> Search Cab </button>
                  </Col>
                </Form>
              </CardBody>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Search