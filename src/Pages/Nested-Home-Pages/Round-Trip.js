import { useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { useNavigate } from 'react-router-dom';

function OneWayReusable() {


    const initialvalues = { pickuplocation: "", droplocation: "", journeydatetime: "", contact: "" }
    const navigate = useNavigate()
    const navigateTo = () => navigate('/search');

    const [formvalues, setformvalues] = useState(initialvalues)
    const [formErrors, setFormErrors] = useState({})
    const [date, setDate] = useState(new Date());
    const [dateTime, setDateTime] = useState(null);
    // const [startDate, setStartDate] = useState(new Date());
    const [startDate, setStartDate] = useState(null);


    const handleChange = (e) => {
        setformvalues(prevValues => ({ ...prevValues, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setformErrors(validate(formvalues));
        const errors = validate(formvalues);
        setFormErrors(errors);

        if (Object.keys(errors).length !== 0) {
            navigate('/search');
        }
    }

    const validate = (values) => {
        const errors = {};

        if (!values.pickuplocation) {
            errors.pickuplocation = "This field is required";
        }

        if (!values.droplocation) {
            errors.droplocation = "This field is required";
        }

        if (!values.journeydatetime) {
            errors.journeydatetime = "This field is required";
        }

        if (!values.contact) {
            errors.contact = "This field is required";
        }

        if (!values.calender) {
            errors.calender = "This field is required";
        }

        return errors;
    };

    return (
        <Form className='mt-4' onSubmit={handleSubmit}>
            <Col>
                <Form.Group controlId="formGridPhoneNo" className='d-flex' >
                    <span>
                        <i class="fa-solid fa-circle-dot mt-3 me-2 border-0 pick-location"></i>
                    </span>
                    <Form.Control className="mt-1 border-0" name="pickuplocation" value={formvalues.pickuplocation} onChange={handleChange}
                        placeholder='Pick Up Location'
                        type="search" required/>
                </Form.Group>
                <p className='text-danger'>{formErrors.pickuplocation}</p>
                <hr className='ms-4' />
            </Col>

            <Col className='mt-3'>
                <Form.Group controlId="formGridPhoneNo" className='d-flex' >
                    <span><i class="fa-solid fa-circle-dot mt-2 me-2"></i></span>
                    <Form.Control className="border-0  " name="droplocation" value={formvalues.droplocation} onChange={handleChange} type='search' placeholder='Drop location'
                    required/>
                </Form.Group>
                <p className='text-danger'>{formErrors.droplocation}</p>
            </Col>
            <hr className='ms-4' />

            <Col className='mt-3'>
                <Form.Group controlId="formGridPhoneNo" className='d-flex' >
                    <span><i class="fas fa-phone-alt mt-2 me-2"></i></span>
                    <Form.Control type="text" className="border-0" placeholder='Contact Number' name="contact" value={formvalues.contact} onChange={handleChange} required/>
                </Form.Group>
                <p className='text-danger'>{formErrors.contact}</p>
            </Col>
            <hr className='ms-4' />

            <Col>
                {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
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
                <p className='text-danger'>{formErrors.calender}</p>
            </Col>
            <hr className='ms-4' />

            <Col>
                <i className="far fa-calendar-alt mt-2 me-3"></i>
                <DatePicker
                    selected={startDate}
                    placeholderText="Select Return Date and Time"
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mm aa"
                    className='border-0'
                    onChange={date => setStartDate(date)}
                    value={formvalues.calender}
                    name='calender'
                    required
                />
                <p className='text-danger'>{formErrors.calender}</p>
            </Col>

            <Col className="d-grid gap-2 text-center search-link text-white mt-4" rounded>
                <button size="md" type='search' className='btn btn-md btn-block text-white'> Search Cab </button>
            </Col>
        </Form>
    )
}

export default OneWayReusable