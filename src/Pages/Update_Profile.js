import { useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Form, FormLabel, Image, Row } from 'react-bootstrap';
import { getProfile, updateProfile, uploadProfilePhoto } from '../api/Api';
import { useAuth } from '../authentication_token/AuthProvider';

function Update_Profile() {
    const [updateValues, setUpdateValues] = useState({ mobile_no: "", name: "", email: "", user_type: "user", });
    const [token, setToken] = useState();
    const [successUpdate, setSuccessUpdate] = useState('');
    const [getData, setGetData] = useState();
    const [uploadStatus, setUploadStatus] = useState('');
    const [loading, setLoading] = useState();
    const [file, setFile] = useState()
    const [newPreview, setNewPreview] = useState()
    const { getToken } = useAuth();
    const InputRef = useRef(null);


    /** GetToken from local storage */

    useEffect(() => {
        const mytoken = getToken();
        setToken(mytoken);
    }, [getToken]);

    /** Get Profile Details */

    useEffect(() => {
        async function fetchData() {
            if (token) {
                try {
                    const getProfileData = await getProfile(token);
                    setGetData(getProfileData);
                    console.log(getProfileData);
                    console.log(getProfileData.data.data);
                    
                } catch (error) {
                    console.error('Error fetching state data:', error);
                }
            }
        }
        fetchData();
    }, [token]);

    /*** Handle Profile Update */

    const handleUpdate = (e) => {
        setUpdateValues(prevValues => (
            { ...prevValues, [e.target.name]: e.target.value }
        ));
    };

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        try {
            if (token) {
                const submittedForm = await updateProfile({ ...updateValues, token });
                // const submittedForm = await updateProfile('update-profile', token , updateValues);

                if (submittedForm.status === 200) {
                    setSuccessUpdate(submittedForm.data.message);
                }
            }
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    /** Handle Image Submit */

    const handleImageClick = () =>{
        InputRef.current.click();
    }

    const handleImageSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('api', "upload-profile-photo")
        formData.append('token', token)
        formData.append('profile', file)

        for (let [key, value] of formData.entries()) {
            if (value instanceof File) {
              console.log(`${key}:`);
              console.log(`  name: ${value.name}`);
              console.log(`  size: ${value.size} bytes`);
              console.log(`  type: ${value.type}`);
            } else {
              console.log(`${key}: ${value}`);
            }
          }

        try {
            const uploadPhoto = await uploadProfilePhoto(formData);
            setUploadStatus(uploadPhoto.data.message);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false); // End loading
        }
    }

    const handleFileChange = (e) => {
        let getFile = e.target.files[0]
        setFile(getFile)

        // preview

        let generateUrl = URL.createObjectURL(getFile);
        setNewPreview(generateUrl)
    }

    return (
        <>
            <Container className='min-vh-100 mt-5 '>
                <h1 className='contact-text main-about text-center text-muted my-4 fs-2'>MY PROFILE</h1>
                <Row className='justify-content-center mx-auto'>
                <p>{}</p>
                    <Col lg={5} className='border px-4'>
                        <Form onSubmit={handleImageSubmit}>
                        <p className='text-center my-3 text-danger'>{uploadStatus} </p>                       
                            <Col onClick={handleImageClick} className='text-center my-3'>
                                {
                                    newPreview ?(<Image alt="Image" src={newPreview} width='150px' height='150px' roundedCircle />):(<Image src='./assets/images/upload_icon.svg' width="150px" roundedCircle />)
                                }
                                <Form.Control type='file' ref={InputRef} onChange={handleFileChange} style={{ display: 'none' }} />
                            </Col>
                            <Col className='text-center '>
                                <Button type="submit">Upload</Button>
                            </Col>
                        </Form>
                        <hr />
                        <p className='text-success text-center my-3'>{successUpdate}</p>
                        <Form onSubmit={handleUpdateSubmit}>
                            <FormLabel>Name</FormLabel>
                            <Form.Control
                                placeholder='Enter Your Name'
                                type='text'
                                name="name"
                                required
                                onChange={handleUpdate}
                            />
                            <FormLabel className='mt-4'>Number</FormLabel>
                            <Form.Control
                                placeholder='Enter Your Number'
                                type="tel"
                                name="mobile_no"
                                required
                                onChange={handleUpdate}
                            />
                            <FormLabel className='mt-4'>Email</FormLabel>
                            <Form.Control
                                placeholder='Enter Your Email'
                                type='email'
                                name="email"
                                required
                                onChange={handleUpdate}
                            />
                            <Col className="d-grid gap-2 mt-5">
                                <Button variant="primary" size="md" type='update'>
                                    Update
                                </Button>
                            </Col>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Update_Profile;
