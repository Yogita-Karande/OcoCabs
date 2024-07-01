import { useState } from "react";
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { verifyOtp } from "../api/Api";
import { setToken } from "../authentication_token/Token";

function Verify_Otp() {

  const { mobile_no, message } = useParams();
  const data = { mobile_no: mobile_no, otp: "", fcm: "" }
  const [formData, setformData] = useState(data)
  const [message1, setMessage1] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }

 const dispatch =  useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submittedForm = await verifyOtp(formData);

    try {
      if (submittedForm.data.status === 200) {
        dispatch(setToken(submittedForm.data.data));
        console.log(submittedForm.data.data);
        navigate('/verification-success');
      } else {
        setMessage1(submittedForm.data.message);
        console.log(submittedForm.data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const token = setToken()

  return (
    <Container className="min-vh-100 pt-5 mt-5">
      <Row className='justify-content-center min-height'>
        <Col xs={10} lg={5} md={5} className='mx-auto'>
          <Form onSubmit={handleSubmit}>
            <Card className='shadow-lg' style={{ height: '300px' }}>
              <Card.Body>
                <h1 className='text-success fs-3 text-center mt-3'>{message}</h1>
                <Form.Group controlId="exampleForm.ControlInput1" >
                  <Form.Control
                    type="tel"
                    placeholder="Mobile Number"
                    required
                    className='login mt-4 mx-auto'
                    name="mobile_no"
                    value={mobile_no}
                    onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput2" >
                  <Form.Control
                    type="text"
                    placeholder="Enter otp"
                    required
                    className='login mt-4 mx-auto'
                    name="otp"
                    value={formData.otp}
                    onChange={handleChange} />
                </Form.Group>
                <Col className=" d-grid gap-2 text-center login-button mt-4 mx-lg-5" rounded>
                  <button size="md" type='submit' className='btn btn-md btn-block text-white'> Verify </button>
                </Col>
                <p className='text-danger  text-center mt-3'>{message1}</p>
              </Card.Body>
            </Card>
          </Form >
        </Col>
      </Row>
    </Container>
  )
}

export default Verify_Otp