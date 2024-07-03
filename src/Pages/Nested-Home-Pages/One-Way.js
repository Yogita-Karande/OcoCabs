import { useState } from 'react';
import { Col, Form, FormSelect } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { useNavigate } from 'react-router-dom';
import { getRouteDetails } from '../../api/Api';

function OneWay() {
    const initialvalues = { destination: "", source: "", type: "",time:""}
    const navigate = useNavigate()

    const [formvalues, setformvalues] = useState(initialvalues)
    const [startDate, setStartDate] = useState(null);
    const [data, setData] = useState();
    const [error, setError] = useState();

    const handleDateChange = (time) => {
        setStartDate(time);
        setformvalues({
                ...formvalues,
                time: time,
        });
    };

    const handleChange = (e) => {
        setformvalues(prevValues => ({ ...prevValues, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formvalues)
        try {
            const submittedForm = await getRouteDetails(formvalues);
            console.log(submittedForm.data)
            if (submittedForm.data.status === 200) {
                setData(submittedForm);
                navigate('/search')
            }
             else {
                setError(submittedForm.data.message);
                alert(submittedForm.data.message);
            }
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    }

    return (
        <Form className='mt-4' onSubmit={handleSubmit}>
            <Col></Col>
            <Col>
            {/* <p className='text-center text-danger'>{error}</p> */}
                <Form.Group controlId="formGridPhoneNo" className='d-flex' >
                    <span>
                        <i className="fa-solid fa-circle-dot mt-3 me-2 border-0 pick-location"></i>
                    </span>
                    <FormSelect
                        className="mt-1 border-0"
                        name="destination"
                        value={formvalues.destination}
                        onChange={handleChange}
                        placeholder='Pick Up Location'
                        type="text"
                        required
                        >
                        <option value="">Select Pickup Location</option>
                        {/* add city details map here */}
                        <option>Narhe</option>
                    </FormSelect>
                </Form.Group>
            </Col>
            <hr className='ms-4' />

            <Col className='mt-3'>
                <Form.Group controlId="formGridPhoneNo" className='d-flex' >
                    <span>
                        <i className="fa-solid fa-circle-dot mt-2 me-2"></i>
                    </span>
                    <FormSelect
                        className="border-0  "
                        name="source"
                        value={formvalues.source}
                        onChange={handleChange}
                        type='text'
                        placeholder='Drop location'
                        required >
                        <option value="">Select Drop Location</option>
                        {/* add location map here also */}
                        <option>Shivaji Nagar</option>
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
                        required>
                        <option className='text-muted'>Select Type</option>
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
                    value={formvalues.time}
                    onChange={handleDateChange}
                    name='time'
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