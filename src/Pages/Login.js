import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { receiveotp } from '../api/Api';
import Loader from './Loader';

function Login() {
  const initialvalues = { mobile_no: "" }
  const [formvalues, setformvalues] = useState(initialvalues)
  const [pageError, setPageError] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformvalues({
      ...formvalues,
      [name]: value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const submittedForm = await receiveotp(formvalues);
      if (submittedForm.status === 200) {
        navigate(`/verify-number/${formvalues.mobile_no}/${submittedForm.data.message}`);
      } else {
        setPageError(submittedForm.message);
      }
    } catch (error) {
      setPageError('An error occurred. Please try again.');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 1000); 
  }, []);

  return (
    <>
    <Container className="min-vh-100 pt-5 mt-5">
      {
        pageLoading ? (
          <Loader/>
        ) : (
          loading ? (            
           <Loader/>
          ) : (
            <Row className='justify-content-center min-height'>
              <Col xs={10} lg={5} md={5} className='mx-auto'>
                <Card className='shadow-lg' style={{ height: '250px' }}>
                  <Card.Body>
                    <h1 className='fs-3 text-center mt-3 text-muted'>LOGIN</h1>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control
                          type="tel"
                          placeholder="Enter Mobile Number"
                          className='login mt-4 mx-auto'
                          name="mobile_no"
                          required
                          value={formvalues.mobile_no}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Col className="d-grid gap-2 text-center login-button mt-4 mx-lg-5">
                        <Button size="md" type='submit' className='btn btn-md btn-block text-white'>
                          Login
                        </Button>
                      </Col>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )
        )
      }
    </Container>
  </>
  )
}

export default Login