import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getPageContent } from '../api/Api';
import Loader from './Loader';

function RefundPolicy() {

  const [getPageData, setPageData] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const pageData = await getPageContent('7');
        setPageData(pageData.data);
      } catch (error) {
        console.error('Error fetching state data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Container className='text-muted mb-5'>
        <h1 className='contact-text text-muted text-center py-4 fw-bold fs-2'>REFUND POLICY</h1>
        {
          !getPageData ? (<Loader />) : (<p dangerouslySetInnerHTML={{ __html: getPageData }}></p>)
        }
      </Container>

    </>
  )
}

export default RefundPolicy