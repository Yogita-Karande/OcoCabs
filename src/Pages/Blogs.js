import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { getPageContent } from '../api/Api';


function Blogs() {

  const [getDocumentsData, setDocumentsData] = useState();
  const [getPageData, setPageData] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const pageData = await getPageContent('blogs');
        setPageData(pageData);

        // const Documents = await getDocuments();
        // setDocumentsData(Documents);
        
      } catch (error) {
        console.error('Error fetching state data:', error);
      }
    }
    fetchData();
  }, []);
  
  return (
    <Container className='min-vh-100 mt-3'>
      <h1 className='contact-text main-about text-center text-muted'>BLOGS</h1>
      <Row>
     
      <Col  lg={4}>
          <div className='image-container'>
            <Image className='Blogs-Image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe0SDbbiZABES1jB48fM1exctbMf89mRXKba7EZQ022A&s' width='100%'></Image>
           
          </div>
            <h3>Redefine Your Travel Experience with Outstation Cabs: Book Your Journey Today</h3>
            <p className='mt-4'>Traveling to outstation destinations can be an exciting and enriching experience. However, one of the key decisions you'll need to make when planning your journey is whether to book an outstation cab or take the wheel and self-drive. Both options have their merits, and the choice largely depends on your preferences, requirements, and the nature of your trip.</p>
        </Col>
    
        <Col lg={4}>
          <div className='image-container'>
            <Image className='Blogs-Image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe0SDbbiZABES1jB48fM1exctbMf89mRXKba7EZQ022A&s' width='100%'></Image>
          </div>
            <h3>Redefine Your Travel Experience with Outstation Cabs: Book Your Journey Today</h3>
            <p className='mt-4'>Traveling to outstation destinations can be an exciting and enriching experience. However, one of the key decisions you'll need to make when planning your journey is whether to book an outstation cab or take the wheel and self-drive. Both options have their merits, and the choice largely depends on your preferences, requirements, and the nature of your trip.</p>
        </Col>

        <Col lg={4}>
          <div className='image-container'>
            <Image className='Blogs-Image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe0SDbbiZABES1jB48fM1exctbMf89mRXKba7EZQ022A&s' width='100%'></Image>
          </div>
            <h3>Redefine Your Travel Experience with Outstation Cabs: Book Your Journey Today</h3>
            <p className='mt-4'>Traveling to outstation destinations can be an exciting and enriching experience. However, one of the key decisions you'll need to make when planning your journey is whether to book an outstation cab or take the wheel and self-drive. Both options have their merits, and the choice largely depends on your preferences, requirements, and the nature of your trip.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Blogs