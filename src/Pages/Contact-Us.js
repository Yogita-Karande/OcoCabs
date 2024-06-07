import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { makeEnquiry } from '../api/Api';

function ContactUs() {

  const initialvalues = { name: "", number: "", email: "", type: "", subject: "", message: "" }
  const [formvalues, setformvalues] = useState(initialvalues)
  const [successMessage, setSuccessMessage] = useState()

  const handleChange = (e) => {
    setformvalues(prevValues => ({ ...prevValues, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formvalues)
      const contactEnquiryData = await makeEnquiry(formvalues);
      console.log(contactEnquiryData)
      setSuccessMessage(contactEnquiryData.message);
    } catch (error) {
      console.error("Error making enquiry:", error);
    }
  }

  return (
    <Container className='text-white' >
      <h1 className='contact-text main-about text-center text-muted mt-4 fs-2'>CONTACT US</h1>
      <Form className="paragraph contact-text form mt-5 text-muted contact-form"
        onSubmit={handleSubmit}
        data-aos="fade-right"
      >
        <Row className='justify-content-center'>
          <Col lg={4}>
            <h3 className='mt-3 mb-5'>Keep in touch</h3>
            <h5><i class="fa-solid fa-location-dot me-3"></i> Office Address</h5>
            <p className='ms-5'>S NO 23/2A Wing Sidhivinayak Hights,<br />
              Abhinav Collage, Narhe, Pune, <br />
              Maharashtra 411041</p>
            <h5><i class="fa-solid fa-phone me-3 mt-5"></i> Lets Talk</h5>
            <a href="tel:+918421777463" className='nav-link ms-5 text-orange'>+918421777463</a>
            <h5><i class="fa-solid fa-envelope me-3 mt-5"></i> General Support</h5>
            <a href="mailto:info@ococabs.com" className='nav-link ms-5 text-orange'>info@ococabs.com</a>
          </Col>

          <Col lg={5} className='mt-3 gap-3'>
            <Form.Group controlId="validationCustom01">
              <Form.Control
                type="text"
                placeholder='Enter Name'
                required
                className='contact-input mb-3'
                name="name"
                value={formvalues.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="validationCustom02">
              <Form.Control
                type="text"
                placeholder='Enter Mobile No.'
                required
                className='contact-input mb-3'
                name="number"
                value={formvalues.number}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="validationCustom03">
              <Form.Control
                type="email"
                placeholder='Enter Email'
                required
                className='contact-input mb-3'
                name="email"
                value={formvalues.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="validationCustom04">
              <Form.Control
                type="text"
                placeholder='Type'
                required
                className='contact-input mb-3'
                name="type"
                value={formvalues.type}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="validationCustom05">
              <Form.Control
                type="text"
                placeholder='Subject'
                required
                className='contact-input mb-3'
                name="subject"
                value={formvalues.subject}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="validationCustom06">
              <Form.Control
                as="textarea"
                style={{ height: '100px' }}
                required
                placeholder='Enter your message/query'
                name="message"
                value={formvalues.message}
                onChange={handleChange}
                className='contact-input mb-3'
              />
            </Form.Group>

            {
              successMessage ? ("") : (<Col className='mt-3 mb-4'>
                <button size="md" type='submit' className=' contact-input contact-button btn btn-md btn-block'> Send Message </button>
              </Col>)
            }

            <p >{successMessage && (
              <span className='text-orange fw-bold'>{successMessage}</span>
            )}</p>
          </Col>
        </Row>
      </Form>
    </Container >
  )
}

export default ContactUs