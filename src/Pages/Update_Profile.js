import React from 'react'
import { Button, Col, Container, Form, FormLabel, Row } from 'react-bootstrap'

function Update_Profile() {
    return (
        <>
            <Container className='min-vh-100 mt-5 '>
            <h1 className='contact-text main-about text-center text-muted my-4 fs-2'>MY ACCOUNT</h1>
                <Form >
                    <Row className='justify-content-center mx-auto'>
                        <Col lg={5} className='border px-4'>
                            <h1 className='fs-3 mt-5 text-center'>Profile Details</h1>
                            <FormLabel  className='mt-4'>Name</FormLabel>
                            <Form.Control placeholder='Enter Your Name' />
                            <FormLabel  className='mt-4'>Number</FormLabel>
                            <Form.Control value={9309211604} />
                            <FormLabel  className='mt-4'>Email</FormLabel>
                            <Form.Control placeholder='Enter Your Email'/>
                            <Col className="d-grid gap-2 my-5">
                                <Button variant="primary" size="md">
                                    Update
                                </Button>
                            </Col>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    )
}

export default Update_Profile