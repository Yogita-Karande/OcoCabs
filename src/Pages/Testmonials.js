import React from 'react';
import { Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import { testimonials } from './Testmonials_Data';

function Testmonials() {

    // const [testimonials , setTestmonials] = useState([])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const getData = await getStates();
    //             setTestmonials(getData);
    //         } catch (error) {
    //             console.log('Error fetching state data:', error);
    //         }
    //     }
    //     fetchData();
    // }, []);


    return (
        <Container fluid>
            <Row className='justify-content-center text-center slide' data-aos="fade-right">
                <Carousel slide={false}>
                    {testimonials.map((testimonial, index) => (
                        <Carousel.Item key={index} className='mt-3'>
                            <h3 className='text-white contact-text'>TESTIMONIALS</h3>
                            <p className='mb-3 text-white contact-text'>See what people are saying.</p>
                            <Row className='justify-content-center mt-5'>
                                <Col lg={2}>
                                    <Image src={testimonial.image} height='200px' roundedCircle
                                    width='200px' /><br />
                                   
                                </Col>
                                <Col lg={3} className='message mt-3'>
                                    {[...Array(5)].map((star, i) => (
                                        <span key={i} className={`fa fa-star ${i < testimonial.rating ? 'checked' : ''} star`}></span>
                                    ))}
                                    <p className='content-margin2 text-white'>{testimonial.message}</p>
                                    <h3 className='text-center text-white content-margin'>{testimonial.name}</h3>
                                    
                                </Col>
                            </Row>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Row>
        </Container>
    )
}

export default Testmonials