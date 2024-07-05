import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useAuth } from '../authentication_token/AuthProvider';
import Loader from './Loader';

function Verification_success() {
  const [token, setToken] = useState()
  const navigate = useNavigate()
  const { getToken } = useAuth()
  const [ loading , setLoading] = useState(false);

  useEffect(() => {
    const mytoken = getToken();
    setToken(mytoken)
  }, [getToken]);

  console.log(token)

  const handleNavigate = () => {
    setLoading(true)
    navigate('/')
  }

  return (
    <>
{
  loading ? (
    <Loader />
  ) : (
    token == null ? (
      <Loader />
    ) : (
      <Container className="min-vh-100 verification-success">
        <Row>
          <Col>
            <Col className="text-center">
              <span>
                <i className="fa-solid fa-check mt-2 mb-2 text-success fs-1"></i>
              </span>
              <h5 className="text-success fs-2">Verified</h5>
              <p className="text-success">You have successfully verified your account!</p>
              <button type="button" className="btn btn-success mt-4" onClick={handleNavigate}>
                Go To Home
              </button>
            </Col>
          </Col>
        </Row>
      </Container>
    )
  )
}
    </>
  )
}

export default Verification_success