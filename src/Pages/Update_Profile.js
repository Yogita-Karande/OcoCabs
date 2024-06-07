import { useEffect, useState } from 'react';
import { Button, Col, Container, Form, FormLabel, Image, Row } from 'react-bootstrap';
import { getProfile, updateProfile } from '../api/Api';
import { getToken } from '../authentication_token/Token';

function Update_Profile() {

    const [updateValues, setUpdateValues] = useState({ fullname: "", email: "", token: "", });
    const [errorMessage, setErrorMessage] = useState('');
    const [successUpdate, setSuccessUpdate] = useState('');
    const [token, setToken] = useState('');
    const [getData, setGetData] = useState();
    const [uploadProfile, setUploadProfile] = useState();

    useEffect(() => {
        setToken(getToken());
    }, []);

    useEffect(() => {
        async function fetchData() {
            try {
                const getProfileData = await getProfile('get-profile', token);
                setGetData(getProfileData);

                const uploadProfilePhoto = await uploadProfile('upload-profile', token);
                setUploadProfile(uploadProfilePhoto);

            } catch (error) {
                console.error('Error fetching state data:', error);
            }
        }
        fetchData();
    }, []);

    const handleUpdate = (e) => {
        setUpdateValues(prevValues => (
            { ...prevValues, [e.target.name]: e.target.value }
        ));
    }

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        console.log(updateValues)
        try {
            const submittedForm = await updateProfile('update-profile', updateValues);
            console.log(submittedForm);

            if (submittedForm.status === 200) {
                setSuccessUpdate(submittedForm.message);
            } else {
                // show errors 
                setErrorMessage(submittedForm.message);
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            // Handle error - maybe show an error message to the user
        }
    }

    return (
        <>
            <Container className='min-vh-100 mt-5 '>
                <h1 className='contact-text main-about text-center text-muted my-4 fs-2'>MY PROFILE</h1>
                <Row className='justify-content-center mx-auto'>
                    <Col lg={5} className='border px-4'>
                        <Form onSubmit={handleUpdateSubmit}>
                            <Col className='profile-image mt-3'>
                                <Image
                                    src='./assets/images/form_bg_image.jpg'
                                    roundedCircle
                                    width='200px'
                                    height='200px'
                                    onChange={handleUpdate}
                                    name="profileimage">
                                </Image><br/>
                            </Col>
                            <hr />
                            <FormLabel>Name</FormLabel>
                            <Form.Control
                                placeholder='Enter Your Name'
                                type='text' name="fullname"
                                onChange={handleUpdate}
                            />
                            <FormLabel className='mt-4'>Number</FormLabel>
                            <Form.Control
                                placeholder='Enter Your Number'
                                type="tel"
                                name="mobilenumber"
                                onChange={handleUpdate}
                            />
                            <FormLabel className='mt-4'>Email</FormLabel>
                            <Form.Control
                                placeholder='Enter Your Email'
                                type='email'
                                name="email"
                                onChange={handleUpdate}
                            />
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