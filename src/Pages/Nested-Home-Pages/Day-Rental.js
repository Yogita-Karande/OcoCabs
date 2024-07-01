import { useEffect, useState } from 'react';
import { Col, Form, FormSelect } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { useNavigate } from 'react-router-dom';
import { getRouteDetails } from '../../api/Api';
import { getToken } from '../../authentication_token/Token';
import {getRentalPackage} from '../../api/Api'

function DayRental() {
    const initialvalues = { pickuplocation: "", droplocation: "", type: "", time:'',  }
    const navigate = useNavigate()

    const [formvalues, setformvalues] = useState(initialvalues)
    const [startDate, setStartDate] = useState(null);
    const [token, setToken] = useState();
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [rental , setRental] = useState()

    const handleDateChange = (date) => {
        setStartDate(date);     
        setformvalues({
                ...formvalues,
                journeydatetime: date, // Update journeydatetime in form values           
        });
    };

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
            console.log(submittedForm.data)
            if (submittedForm.status === 200) {
                setData(submittedForm);
                navigate(`/one-way-cab/${formvalues.city}/${formvalues.rentalpackage}/${formvalues.type}/${formvalues.journeydatetime}`)
            } else {
                setError(submittedForm.message);
            }
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const rentalPackageData = await getRentalPackage('day-rental')
                setRental(rentalPackageData)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])


    return (
        <Form className='mt-4' onSubmit={handleSubmit}>
            <Col>
                <Form.Group controlId="formGridPhoneNo" className='d-flex' >
                    <span>
                        <i className="fa-solid fa-circle-dot mt-3 me-2 border-0 pick-location"></i>
                    </span>
                    <FormSelect
                        className="mt-1 border-0"
                        name="city"
                        value={formvalues.city}
                        onChange={handleChange}
                        placeholder='Pick Up Location'
                        type="text"
                        required
                        >
                        <option value="">Select Pickup Location</option>
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
                        name="rentalpackage"
                        value={formvalues.rentalpackage}
                        onChange={handleChange}
                        type='text'
                        placeholder='Drop location'
                        required >
                        <option value="">Select Rental Package</option>
                        {
                            rental && (
                                rental.map((item, index) => (
                                    <option className="text-dark" key={index} value={index.id}>{item.name}</option>
                                )))}
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
                        <option value="" className='text-muted'>Select Type</option>
                        <option className='text-muted'>day rental</option>
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
                    value={formvalues.journeydatetime}
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

export default DayRental;