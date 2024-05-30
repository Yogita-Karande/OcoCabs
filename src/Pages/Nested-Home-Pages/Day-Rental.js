import { useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { useNavigate } from 'react-router-dom';

function DayRental() {

    const initialvalues = { pickuplocation: "", droplocation: "", journeydatetime: "", contact: "" }
    const navigate = useNavigate()

    const [formvalues, setformvalues] = useState(initialvalues)
    const [startDate, setStartDate] = useState(null);

    const handleChange = (e) => {
        setformvalues(prevValues => ({ ...prevValues, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <Form className='mt-4' onSubmit={handleSubmit}>
            <Col>
                <Form.Group controlId="formGridPhoneNo" className='d-flex' >
                    <span>
                        <i class="fa-solid fa-circle-dot mt-3 me-2 border-0 pick-location"></i>
                    </span>
                    <Form.Control className="mt-1 border-0" name="pickuplocation" value={formvalues.pickuplocation} onChange={handleChange}
                        placeholder='City'
                        type="search" required />
                </Form.Group>
                <hr className='ms-4' />
            </Col>

            <Col className='mt-3'>
                <Form.Group controlId="formGridPhoneNo" className='d-flex' >
                    <span><i class="fa-solid fa-circle-dot mt-2 me-2"></i></span>
                    <Form.Control className="border-0  " name="droplocation" value={formvalues.droplocation} onChange={handleChange} type='text' placeholder='Rental Package'
                        required />
                </Form.Group>
            </Col>
            <hr className='ms-4' />

            <Col className='mt-3'>
                <Form.Group controlId="formGridPhoneNo" className='d-flex' >
                    <span><i class="fas fa-phone-alt mt-2 me-2"></i></span>
                    <Form.Control type="text" className="border-0" placeholder='Contact Number' name="contact" value={formvalues.contact} onChange={handleChange} required />
                </Form.Group>
            </Col>
            <hr className='ms-4' />

            <Col>
                <i className="far fa-calendar-alt mt-2 me-3"></i>
                <DatePicker
                    selected={startDate}
                    placeholderText="Select Journey Date and Time"
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mm aa"
                    className='border-0'
                    onChange={date => setStartDate(date)}
                    value={formvalues.calender}
                    name='calender'
                    required
                />
            </Col>

            <Col className="d-grid gap-2 text-center search-link text-white mt-4" rounded>
                <button size="md" type='search' className='btn btn-md btn-block text-white'> Search Cab </button>
            </Col>
        </Form>
    )
}

export default DayRental;