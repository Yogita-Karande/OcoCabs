import { useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Form, FormLabel, Image, Row } from 'react-bootstrap';
import { getProfile, updateProfile, uploadProfilePhoto } from '../api/Api';
import { useAuth } from '../authentication_token/AuthProvider';

function Update_Profile() {
    const [token, setToken] = useState('');
    const { getToken } = useAuth();
    const [successUpdate, setSuccessUpdate] = useState('');
    const [getData, setGetData] = useState();
    const [preview, setPreview] = useState('');
    const [uploadStatus, setUploadStatus] = useState('');
    const InputRef = useRef(null);
    const [image, setImage] = useState();
    const [loading , setLoading] = useState();


    useEffect(() => {
        const mytoken = getToken();
        setToken(mytoken);
    }, [getToken]);

    const [updateValues, setUpdateValues] = useState({ mobile_no: "", name: "", email: "", user_type: "user", token: "" });

    useEffect(() => {
        async function fetchData() {
            if (token) {
                try {
                    const getProfileData = await getProfile(token);
                    setGetData(getProfileData.data.data);
                } catch (error) {
                    console.error('Error fetching state data:', error);
                }
            }
        }
        fetchData();
    }, [token]);

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
                if (submittedForm.status === 200) {
                    setSuccessUpdate(submittedForm.data.message);
                    console.log(submittedForm.data.message);
                }
            }
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    //  Upload photo on server

    const handleImageClick = () =>{
        InputRef.current.click();
    }

    const handleImageChange = (e) =>{
        const file = e.target.files[0]
        setImage(file)

        let  GenerateUrl = URL.createObjectURL(file);
        setPreview(GenerateUrl)
        
    }

    useEffect(() => {
        async function fetchData() {
        //   if (!image){
        //     alert('Please select your image')
        //     return
        //   }
    
          const formData = new FormData();
          formData.append('photo', image);
          console.log(formData)
                        
          setLoading(true); // Start loading
    
          try {
            const uploadPhoto = await uploadProfilePhoto(formData,token);
            setUploadStatus(uploadPhoto.data.message);
            console.log(uploadPhoto)
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false); // End loading
          }
        }
    
        fetchData();
      }, [token, image]);
    
    return (
        <>
            <Container className='min-vh-100 mt-5 '>
                <h1 className='contact-text main-about text-center text-muted my-4 fs-2'>MY PROFILE</h1>
                <Row className='justify-content-center mx-auto'>
                    <Col lg={5} className='border px-4'>
                        <Form onSubmit={handleUpdateSubmit}>
                            <p className='text-center my-3 text-danger'>{uploadStatus}</p>
                            <Col className='text-center mt-3' onClick={handleImageClick}>
                            {preview ? (
                                <Image src={preview} width="200px" height='200px' roundedCircle />
                            ) : (
                                <Image src='./assets/images/upload_icon.svg' width="200px" roundedCircle />
                            )}
                            <Form.Control type='file' ref={InputRef} onChange={handleImageChange} style={{ display: 'none' }} />
                        </Col>
                            <hr />
                        
                            <p className='text-success text-center my-3'>{successUpdate}</p>
                            <FormLabel>Name</FormLabel>
                            <Form.Control
                                placeholder='Enter Your Name'
                                type='text'
                                name="name"
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


// //////////////////////////
   {/* <Col lg={5} className='border px-4'>
                        <Form onSubmit={handleImageSubmit}>
                            <input type='file' onChange={handleFileChange}></input>
                            {
                                newPreview && <Image alt="Image" src={newPreview} width='100px' height='100px'/>
                            }

                            <Button type="submit">Submit</Button>
                        </Form>
                    </Col> */}