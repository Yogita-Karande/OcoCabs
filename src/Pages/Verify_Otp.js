import { useState } from "react";
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from "react-router";
import { verifyNumber } from '../api/Api';

function Verify_Otp() {

  const { number } = useParams();
  const data = { number: number, otp: "" }
  const [formData, setformData] = useState(data)
  const [numberSucess, setNumberSuccess] = useState('')

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }
  console.log(formData)
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Assuming formData is defined somewhere in your code
    // and represents the data from the form.
    console.log(formData);
  
    try {
      
      if (!formData) {
        throw new Error("Form data is undefined or null.");
      }
  
      const submittedForm = await verifyNumber(formData);
  
      console.log("Submitted form:", submittedForm);
  
      if (!submittedForm || !submittedForm.status) {
        throw new Error("Invalid response from verifyNumber.");
      }
        
      console.log(submittedForm);
  
      if (submittedForm.status === 200) {
        setNumberSuccess(submittedForm.message);
      } else {
        // Handle errors here
        // For example, you can display error messages to the user
        // console.log(submittedForm.message);
      }
    } catch (error) {
      // Handle any unexpected errors
      console.error('Error:', error);
    }
  };

  return (
    <Container className="min-vh-100 pt-5 mt-5">
      <Row className='justify-content-center min-height'>
        <Col xs={10} lg={5} md={5} className='mx-auto'>
          <Form onSubmit={handleSubmit}>
            <Card className='shadow-lg' style={{ height: '250px' }}>
              <Card.Body>
                {numberSucess ?
                  <h1 className='text-success fs-3 text-center mt-3 '>{numberSucess}</h1> :
                  <h1 className='fs-3 text-center mt-3 text-muted'>Verify</h1>
                }

                <Form.Group controlId="exampleForm.ControlInput1" >
                  <Form.Control type="text" placeholder="Enter otp" required className='login mt-4 mx-auto' name="otp" value={formData.otp} onChange={handleChange} />

                </Form.Group>

                <Col className=" d-grid gap-2 text-center login-button mt-4 mx-lg-5" rounded>
                  <button size="md" type='submit' className='btn btn-md btn-block text-white'> Verify </button>
                </Col>
              </Card.Body>
            </Card>
          </Form >
        </Col>
      </Row>
    </Container>
  )
}

export default Verify_Otp