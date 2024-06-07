import { useEffect, useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { useNavigate } from 'react-router-dom';
import { routeDetails } from '../../api/Api';
import { getToken } from '../../authentication_token/Token';

function OneWay() {
    const initialvalues = { pickuplocation: "", droplocation: "", journeydatetime: "", contact: "" }
    const navigate = useNavigate()

    const [formvalues, setformvalues] = useState(initialvalues)
    const [startDate, setStartDate] = useState(null);
    const [token, setToken] = useState();
    const [data, setData] = useState();
    const [error, setError] = useState();
    
    /** set token here */

    useEffect(() => {
        setToken(getToken());
    }, []);

    const handleChange = (e) => {
        setformvalues(prevValues => ({ ...prevValues, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const submittedForm = await routeDetails('get-route-details', formvalues);
            console.log(submittedForm);

            if (submittedForm.status === 200) {
                setData(submittedForm);
                navigate('/search')
                
            } else {
                setError(submittedForm.message);
            }
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    }


    return (
        <Form className='mt-4' onSubmit={handleSubmit}>
            <Col>
                <Form.Group controlId="formGridPhoneNo" className='d-flex' >
                    <span>
                        <i class="fa-solid fa-circle-dot mt-3 me-2 border-0 pick-location"></i>
                    </span>
                    <Form.Control
                        className="mt-1 border-0"
                        name="pickuplocation"
                        value={formvalues.pickuplocation}
                        onChange={handleChange}
                        placeholder='Pick Up Location'
                        type="search"
                        required
                    />
                </Form.Group>
            </Col>
            <hr className='ms-4' />

            <Col className='mt-3'>
                <Form.Group controlId="formGridPhoneNo" className='d-flex' >
                    <span>
                        <i class="fa-solid fa-circle-dot mt-2 me-2"></i>
                    </span>
                    <Form.Control
                        className="border-0  "
                        name="droplocation"
                        value={formvalues.droplocation}
                        onChange={handleChange}
                        type='search'
                        placeholder='Drop location'
                        required />
                </Form.Group>
            </Col>
            <hr className='ms-4' />

            <Col className='mt-3'>
            <Form.Group controlId="formGridPhoneNo" className='d-flex' >
                    <span>
                        <i class="fa-solid fa-car-side mt-2"></i>
                    </span>
                    <Form.Control
                        type="text"
                        className="border-0"
                        placeholder='Type'
                        name="type" value={formvalues.type}
                        onChange={handleChange} required />
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

            <Col className="d-grid gap-2 search-link text-center mt-4" rounded>
                <button size="md" type='search' className='btn btn-md btn-block text-white '> Search Cab </button>
            </Col>
        </Form>
    )
}

export default OneWay