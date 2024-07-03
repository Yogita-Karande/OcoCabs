import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getPageContent } from '../api/Api';

function Termsandcondition() {

  const [getAboutData, setAboutData] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const pageData = await getPageContent('6');
        setAboutData(pageData.data);
      } catch (error) {
        console.error('Error fetching state data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Container className='mb-5'>
        <h1 className='contact-text text-muted text-center py-4 fw-bold fs-2'> TERMS AND CONDITIONS</h1>
          <p dangerouslySetInnerHTML={{ __html: getAboutData}}></p>
      </Container>
    </>
  )
}

export default Termsandcondition