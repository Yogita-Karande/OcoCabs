import React from 'react'

function Verify_Otp() {
  return (
    <Form onSubmit={handleSubmit}>
    <Container className="min-vh-100 pt-5 mt-5">
      <Row className='justify-content-center min-height'>
        <Col xs={10} lg={5} md={5} className='mx-auto'>
          <Card className='shadow-lg' style={{ height: '250px' }}>
            <Card.Body>
              <h1 className='fs-3 text-center mt-3 text-muted'>LOGIN</h1>

              <Form.Group controlId="exampleForm.ControlInput1" >
                <Form.Control type="tel" placeholder="Enter Mobile Number" className='login mt-4 mx-auto' name="number" value={formvalues.number} onChange={handleChange} />
              <p className='text-danger ms-5 mt-2'>{formErrors.number}</p>

              </Form.Group>
              <Col className=" d-grid gap-2 text-center login-button mt-4 mx-lg-5" rounded>
                <button size="md" type='submit' className='btn btn-md btn-block text-white'> Login </button>
              </Col>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  </Form >
  )
}

export default Verify_Otp