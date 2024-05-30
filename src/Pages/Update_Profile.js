import { useEffect, useState } from 'react';
import { Button, Col, Container, Form, FormLabel, Row } from 'react-bootstrap';
import { updateProfile } from '../api/Api';
import { getToken } from '../authentication_token/Token';

function Update_Profile() {

    const [updateValues, setUpdateValues] = useState();

    const handleUpdate = (e) => {
        setUpdateValues(prevValues => (
            { ...prevValues, [e.target.name]: e.target.value }
        ));
    }

    const handleUpdateSubmit = (e) =>{
        e.preventDefault();
        console.log(updateValues)
    }

    const [token , setToken] = useState ('');
    const [data , setData] = useState();

    useEffect(() => {
        setToken(getToken());
    }, []);
    
    useEffect(() => {
        async function fetchData() {
          try {
 
            const dataResponse = await updateProfile('get-update', token);
            // console.log(dataResponse.profile);
            setData(dataResponse.profile);
    
          } catch (error) {
            console.error('Error fetching state data:', error);
          }
        }
        fetchData();
        }, []);

    return (
        <>
            <Container className='min-vh-100 mt-5 '>
                <h1 className='contact-text main-about text-center text-muted my-4 fs-2'>MY ACCOUNT</h1>

                <Row className='justify-content-center mx-auto'>
                    <Col lg={5} className='border px-4'>
                        <Form onSubmit={handleUpdateSubmit}>
                            <h1 className='fs-4 mt-5 text-center text-muted'>PROFILE DETAILS</h1>
                            <FormLabel className='mt-4'>Name</FormLabel>
                            <Form.Control placeholder='Enter Your Name'type='text' name="fullname" onChange={handleUpdate} />
                            <FormLabel className='mt-4'>Number</FormLabel>
                            <Form.Control placeholder='Enter Your Number' type="tel" name="mobilenumber" onChange={handleUpdate} />
                            <FormLabel className='mt-4'>Email</FormLabel>
                            <Form.Control placeholder='Enter Your Email' type='email' name="email" onChange={handleUpdate} />
                            <Col className="d-grid gap-2 my-5">
                                <Button variant="primary" size="md" type='submit'>
                                    Update
                                </Button>
                            </Col>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Update_Profile