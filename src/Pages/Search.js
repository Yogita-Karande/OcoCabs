import { useEffect, useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { createBooking } from '../api/Api';

function Search() {

    const [formvalues, setformvalues] = useState()
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [token, setToken] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const tokenFromStorage = localStorage.getItem('token');
        setToken(tokenFromStorage);
    }, []);

    const handleCreateBooking = async (e) => {
        e.preventDefault();
        try {
            const submittedForm = await createBooking(formvalues, token);
            console.log(submittedForm);

            if (submittedForm.status === 200) {
                setData(submittedForm.message);
                navigate('./booking-successful', { state: { submittedForm } });
            } else {
                setError(submittedForm.message);
            }
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    }

    return (
        <Container className='min-vh-100'>
            {/* <h1 className='fs-3 text-center mt-3  text-muted'>{type}</h1> */}
            <Col>
               {/* <h6><i className="fa-solid fa-circle-dot mt-3 me-2 border-0 pick-location"></i>{destination}</h6> */}
               {/* <h6><i className="fa-solid fa-circle-dot mt-2 me-2"></i>{source}</h6> */}
               {/* <h6><i className="far fa-calendar-alt mt-2 me-3"></i>{time}</h6> */}
               {
                // type == {ret_type} ? (<h6><i className="far fa-calendar-alt mt-2 me-3"></i>{ret_time}</h6>):('')
               }
               
            </Col>
                <Col>
                    {/* {notification && (
                        notification.map((item, index) => {
                            return (
                                <Card key={index} className="mx-3 text-muted my-3">
                                    <ul>
                                        <li className="my-3" value={item.id}>{item.notification}</li>
                                    </ul>
                                    <Col className="d-grid gap-2 text-center search-link text-white mt-4" rounded>
                                        <button size="md" type='search' className='btn btn-md btn-block text-white' onSubmit={handleCreateBooking}> Book Cab </button>
                                    </Col>
                                </Card>
                            );
                        })
                    )} */}
                </Col>
          
        </Container>
    )
}

export default Search;