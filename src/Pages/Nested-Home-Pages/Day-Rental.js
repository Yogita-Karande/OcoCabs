import { useEffect, useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { useNavigate } from 'react-router-dom';
import { getRentalPackage, routeDetails } from '../../api/Api';
import { getToken } from '../../authentication_token/Token';

function DayRental() {

    const initialvalues = { city: "", rental_package: "", type: "", journeydatetime: "", token: "" }
    const navigate = useNavigate()

    /** States */

    const [formvalues, setformvalues] = useState(initialvalues)
    const [startDate, setStartDate] = useState(null);
    const [token, setToken] = useState();
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [rentalPackage, setRentalPackage] = useState()

    /** set token here */

    useEffect(() => {
        setToken(getToken());
    }, []);

    /** fetch rental package data from API  */

    useEffect(() => {
        async function fetchData() {
            try {
                const rentalPackageData = await getRentalPackage('get-rental-package')
                setRentalPackage(rentalPackageData)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    /** Handle Changes */

    const handleChange = (e) => {
        setformvalues(prevValues => ({ ...prevValues, [e.target.name]: e.target.value }));
    }

    /** Handle Submit */

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
                    <Form.Select
                        className="mt-1 border-0"
                        name="city" 
                        value={formvalues.city}
                        onChange={handleChange}
                        required
                        >
                        <option value="" className='text-muted'>Select City</option>
                    </Form.Select>
                </Form.Group>
                <hr className='ms-4' />
            </Col>

            <Col className='mt-3 d-flex'>
                <span>
                    <i class="fa-solid fa-circle-dot mt-2 me-2"></i>
                </span>
                <Form.Select
                    aria-label="Default select example"
                    className="border-0 "
                    required
                    value={formvalues.rental_package}
                    onChange={handleChange}
                    name='rental_package'>
                    <option value="" className='text-muted'>Rental Package</option>
                    {/* {
                    rentalPackage && (
                    rentalPackage.map((item, index) => (
                    <option key={index} value={item.id} >{item.hours}{item.kms}</option>
                )))} */}

                </Form.Select>
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

            <Col className="d-grid gap-2 text-center search-link text-white mt-4" rounded>
                <button size="md" type='search' className='btn btn-md btn-block text-white'> Search Cab </button>
            </Col>
        </Form>
    )
}

export default DayRental;