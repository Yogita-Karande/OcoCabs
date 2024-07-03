// import { useEffect, useState } from 'react';
// import { Button, Card, CardBody, CardGroup, Col, Container, Row } from 'react-bootstrap';
// import { useNavigate } from 'react-router';
// import { getUserBooking } from '../api/Api';
// import { getToken } from '../authentication_token/Token';

// function My_Bookings() {
//   const data1  ={token:''}
//   const Navigate = useNavigate()
//   const [data, setData] = useState();
//   const [error, setError] = useState();
//   const [token, setToken] = useState();
//   const [bookings , setBookings] =useState()

 

//   useEffect(() => {
//     setToken(getToken());
// }, []);

// useEffect(() => {
//   async function fetchData() {
//       try {
//           const bookingDetails = await getUserBooking(token)
//           setBookings(bookingDetails.message)
//           console.log(bookingDetails.message)
//       }
//       catch (error) {
//           console.log(error)
//       }
//   }
//   fetchData()
// }, [])

  
//   return (
//     <>
//       <Container className='min-vh-100 '>
//         <h1 className='my-booking  text-center text-muted fs-2 my-4'>MY BOOKINGS</h1>
//         {bookings ? (<Row className='justify-content-center'>
//           <Col lg={4} className='mt-4'>
//             <CardGroup>
//               <Card>
//                 <CardBody>
//                   <Row className='my-booking-card border-bottom'>
//                     <Col className='mt-1'>
//                       <h5>29TH </h5>
//                       <h6>APRIL ,  wednesday</h6>
//                     </Col>
//                     <Col className='text-end my-3 '>
//                       <Button onClick={Navigate}>View Details</Button>
//                     </Col>
//                   <p className='text-success'><strong>Booking Status : </strong></p>

                
//                   </Row>
//                   <Col className='d-flex mt-3'>
//                     <h6> <i className="fa-solid fa-location-dot me-3"></i> {"Shivaji Nagar"}</h6>
//                     <i className="fa-solid fa-arrow-right mx-3 mt-1"></i>
//                     <h6>{"Narhe"}</h6>
//                   </Col>
//                   <Col className='d-flex mt-2'>
//                     <i className="fa-solid fa-clock me-3"></i><h6>8:30PM</h6>
//                   </Col>
//                 </CardBody>
//               </Card>
//             </CardGroup>
//           </Col>
//         </Row>):("No Booking Found")
//         }
        
//       </Container >
//     </>
//   )
// }

// export default My_Bookings