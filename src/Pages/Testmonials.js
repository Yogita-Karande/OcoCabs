import React from 'react';
import { Carousel, Container, Image, Row } from 'react-bootstrap';
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


    return(
        <Container fluid>
            <Row className='justify-content-center text-center slide' data-aos="fade-right">
                <Carousel slide={false}>
                    {testimonials.map((testimonial, index) => (
                        <Carousel.Item key={index} className='mt-3'>
                            <h3 className='mb-3 text-white contact-text'>TESTIMONIALS</h3>
                            <Image src={testimonial.image} height='200px' roundedCircle width='200px' /><br />
                            <h3 className='content-margin'>{testimonial.name}</h3>
                            {[...Array(5)].map((star, i) => (
                                <span key={i} className={`fa fa-star ${i < testimonial.rating ? 'checked' : ''} star`}></span>
                            ))}
                            <p className='content-margin2'>{testimonial.message}</p>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Row>
        </Container>
    )
}

export default Testmonials