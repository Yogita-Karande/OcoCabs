import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { cancelBooking } from '../api/Api';
import { getToken } from "../authentication_token/Token";

function CancelBooking() {
    const [token, setToken] = useState()
    const navigate = useNavigate()
    const [formvalues, setFormValues] = useState({ id: "" });

    const handleChange = (e) => {
        setFormValues(prevValues => ({ ...prevValues, [e.target.name]: e.target.value }));
    }

    useEffect(() => {
        setToken(getToken());
    }, []);

    const handleCancelBooking = async (e) => {
        e.preventDefault();
        try {
            const submittedForm = await cancelBooking('cancel-booking', token , formvalues);
            console.log(submittedForm);

            if (submittedForm.status === 200) {
                // setSuccessUpdate(submittedForm.message);
                navigate('/')
            } else {
                // show errors 
                // setErrorMessage(submittedForm.message);
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            // Handle error - maybe show an error message to the user
        }
    }
    return (
        <>
            <Container className="min-vh-100">
                <Col lg={4} className='mx-auto my-5 '>
                    <Card className='shadow-lg' style={{ height: '250px' }}>
                        <Card.Body>
                            <h1 className='fs-4 text-center mt-3 text-muted'>CANCEL BOOKING</h1>
                            <Form onSubmit={handleCancelBooking}>
                                <Form.Group controlId="exampleForm.ControlInput1" >
                                    <Form.Control type="text" placeholder="Enter Your Reference Id" className='login mt-4 mx-auto' name="number" required value={formvalues.id} onChange={handleChange} />
                                </Form.Group>
                                <Col className=" d-grid gap-2 text-center login-button mt-4" rounded>
                                    <button size="md" type='submit' className='btn btn-md btn-block text-white'> Cancel Booking </button>
                                </Col>
                            </Form >
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        </>
    )
}


export default CancelBooking