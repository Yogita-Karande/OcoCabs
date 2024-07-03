import { useEffect, useState } from 'react';
import { Col, Form, FormSelect } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { useNavigate } from 'react-router-dom';
import { getRouteDetails } from '../../api/Api';
import { getToken } from '../../authentication_token/Token';

function RoundTrip() {

    const initialvalues = { pickuplocation: "", droplocation: "", type: "", time: "", ret_time: "", }
    const navigate = useNavigate()
    const [formvalues, setformvalues] = useState(initialvalues)
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
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
            const submittedForm = await getRouteDetails(formvalues);
            console.log(submittedForm.data);

            if (submittedForm.data.status === 200) {
                setData(submittedForm);
                navigate(`/round-trip-cab/${formvalues.pickuplocation}/${formvalues.droplocation}/${formvalues.type}/${formvalues.time}/${formvalues.ret_time}`)
            } else {
                setError(submittedForm.data.message);
                alert(submittedForm.data.message);
            }
        } catch (error) {
            console.error('Error updating profile:', error);
        }

    }

    const handleDateChange = (date, name) => {

        if (name === 'time') {
            setStartDate(date);
            setformvalues({
                ...formvalues,
                time: date,
            });
        } else if (name === 'ret_time') {
            setEndDate(date);
            setformvalues({
                ...formvalues,
                ret_time: date,
            });
        }
    };

    return (
        <Form className='mt-4' onSubmit={handleSubmit}>
            <Col>
                <Form.Group controlId="formGridPhoneNo" className='d-flex' >
                    <span>
                        <i className="fa-solid fa-circle-dot mt-3 me-2 border-0 pick-location"></i>
                    </span>
                    <FormSelect
                        className="mt-1 border-0"
                        name="pickuplocation"
                        value={formvalues.pickuplocation}
                        onChange={handleChange}
                        type="text"
                        required
                    >
                        <option value="">Select Pickup Location</option>
                        <option>narhe</option>

                    </FormSelect>
                </Form.Group>
                <hr className='ms-4' />
            </Col>

            <Col className='mt-3'>
                <Form.Group controlId="formGridPhoneNo" className='d-flex' >
                    <span>
                        <i className="fa-solid fa-circle-dot mt-2 me-2"></i>
                    </span>
                    <FormSelect
                        className="border-0"
                        name="droplocation"
                        value={formvalues.droplocation}
                        onChange={handleChange}
                        type='text'
                        placeholder='Drop location'
                        required
                    >
                        <option value="">Select Drop Location</option>
                        <option>shivaji Nagar</option>

                    </FormSelect>
                </Form.Group>
            </Col>
            <hr className='ms-4' />

            <Col className='mt-3'>
                <Form.Group controlId="formGridPhoneNo" className='d-flex' >
                    <span>
                        <i className="fa-solid fa-car-side mt-2"></i>
                    </span>
                    <FormSelect
                        type="text"
                        className="border-0"
                        placeholder='Type'
                        name="type"
                        value={formvalues.type}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Type</option>
                        <option className='text-muted'>One Way</option>
                        <option className='text-muted'>Day Rental</option>
                        <option className='text-muted'>Round Trip</option>
                    </FormSelect>
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
                    onChange={(date) => handleDateChange(date, 'journeydatetime')}
                    value={formvalues.time}
                    name='time'
                    required
                />
            </Col>
            <hr className='ms-4' />
            <Col>
                <i className="far fa-calendar-alt mt-2 me-3"></i>
                <DatePicker
                    selected={endDate}
                    placeholderText="Select Return Date and Time"
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mm aa"
                    className='border-0'
                    onChange={(date) => handleDateChange(date, 'returndatetime')}
                    value={formvalues.ret_time}
                    name='ret_time'
                    required
                />
            </Col>

            <Col className="d-grid gap-2 text-center search-link text-white mt-4" rounded>
                <button size="md" type='search' className='btn btn-md btn-block text-white'> Search Cab </button>
            </Col>
        </Form>
    )
}

export default RoundTrip