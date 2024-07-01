import { useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Form, FormLabel, Image, Row } from 'react-bootstrap';
import { getProfile, updateProfile, uploadProfilePhoto } from '../api/Api';
import { getToken } from '../authentication_token/Token';

function Update_Profile() {

    const [updateValues, setUpdateValues] = useState({ name: "", email: "", mobile_no: "" });
    const [successUpdate, setSuccessUpdate] = useState('');
    const [token, setToken] = useState('');
    const [getData, setGetData] = useState();
    const [preview, setPreview] = useState('');
    const [uploadStatus, setUploadStatus] = useState('');
    const fileInputRef = useRef(null);

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);

            // Upload the file automatically
            const formData = new FormData();
            formData.append('upload-image', file);

            try {
                const submittedForm = await uploadProfilePhoto(token);
                console.log(token)
                console.log(submittedForm)
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }

    const handleImageClick = () => {
        fileInputRef.current.click();
    };


    useEffect(() => {
        setToken(getToken());
    }, []);

    useEffect(() => {
        async function fetchData() {
            try {
                const getProfileData = await getProfile(token);
                setGetData(getProfileData);
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
        try {
            const submittedForm = await updateProfile(updateValues, token);
            if (submittedForm.status === 200) {
                setSuccessUpdate(submittedForm.message);
            }
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    }

    return (
        <>
            <Container className='min-vh-100 mt-5 '>
                <h1 className='contact-text main-about text-center text-muted my-4 fs-2'>MY PROFILE</h1>
                <Row className='justify-content-center mx-auto'>
                    <Col lg={5} className='border px-4'>
                        <Form onSubmit={handleUpdateSubmit}>
                            <Col className="mb-3 mt-4 text-center">
                                <Image
                                    src={preview || './assets/images/form_bg_image.jpg'}
                                    roundedCircle
                                    width='200px'
                                    height='200px'
                                    alt="Profile"
                                    onClick={handleImageClick}
                                    style={{ cursor: 'pointer' }}
                                />
                                <br />
                                <Form.Control
                                    type='file'
                                    name="upload-image"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    style={{ display: 'none' }}

                                />
                            </Col>
                            <hr />
                            <FormLabel>Name</FormLabel>
                            <Form.Control
                                placeholder='Enter Your Name'
                                type='text' name="name"
                                onChange={handleUpdate}
                            />
                            <FormLabel className='mt-4'>Number</FormLabel>
                            <Form.Control
                                placeholder='Enter Your Number'
                                type="tel"
                                name="mobile_no"
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
                                <Button variant="primary" size="md" type='update'>
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