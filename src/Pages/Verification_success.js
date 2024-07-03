import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useAuth } from '../authentication_token/AuthProvider';

function Verification_success() {
  const  [token , setToken] =useState()
  const navigate = useNavigate()
  const {getToken} = useAuth()
  // useEffect(() => {
  //   const tokenFromStorage = localStorage.getItem('token');
  //   setToken(tokenFromStorage);
  // }, []);

  useEffect(() => {
    const mytoken = getToken();
    console.log('Token:', mytoken);
    setToken(mytoken)
    // Use the token as needed
}, [getToken]);

  console.log(token)

  const handleNavigate = () => {
    navigate('/')
  }

  return (
    <>
    {
      token == null ?('loading...'):(<Container className='min-vh-100 verification-success'>
        <Row>
          <Col>
              <Col className='text-center'>
                <span >
                  <i className="fa-solid fa-check mt-2 mb-2 text-success fs-1" ></i>
                </span>
                <h5 className='text-success fs-2'>Verified</h5>
                <p className='text-success'>You have successfully verified  account !</p>
                <button type="button" class="btn btn-success mt-4" onClick={handleNavigate}>Go To Home</button>
              </Col>
            </Col>
          </Row>
      </Container>)
    }
      
    </>
  )
}

export default Verification_success