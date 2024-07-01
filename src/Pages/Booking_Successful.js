import { Col, Container } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
function Booking_Successful() {
    const location = useLocation();
    const { submittedForm } = location.state || {};

    return (
        <Container className='min-vh-100 mt-4'>
            {submittedForm ? (<Col className='text-center'>
                <i className="fa-solid fa-check icon-circle" ></i>
                <h1 className='fs-4 mt-4 text-success'>{submittedForm.message}</h1>
                <Col className='mx-auto d-flex justify-content-center align-items-center'>
                    <NavLink className='nav-link mt-4 done-button ' to='my-booking'>Done</NavLink>
                </Col>
            </Col>) : <p>No booking data available.</p>
            }
        </Container>
    )
}

export default Booking_Successful