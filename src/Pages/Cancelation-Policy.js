import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getPageContent } from '../api/Api';
import Loader from './Loader';

function CancelationPolicy() {

  const [getPageData, setPageData] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const pageData = await getPageContent('8');
        setPageData(pageData.data);
      } catch (error) {
        console.error('Error fetching state data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <>   
      <Container className='mb-5 min-vh-100 py-4 '>
      <h1 className='contact-text text-muted text-center py-4 fw-bold fs-2'> CANCELATION POLICY</h1>
        {
          !getPageData ? (<Loader/>):(<><p dangerouslySetInnerHTML={{ __html: getPageData }}></p></>)        
        }        
      </Container>
    </>
  )
}

export default CancelationPolicy