import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getPageContent } from '../api/Api';

function CancelationPolicy() {

  const [getAboutData, setAboutData] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const pageData = await getPageContent('8');
        setAboutData(pageData.data);
      } catch (error) {
        console.error('Error fetching state data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <Container className='mb-5'>
      <h1 className='contact-text text-muted text-center py-4 fw-bold fs-2'> CANCELATION POLICY</h1>
      <p dangerouslySetInnerHTML={{ __html: getAboutData }}></p>
    </Container>
  )
}

export default CancelationPolicy