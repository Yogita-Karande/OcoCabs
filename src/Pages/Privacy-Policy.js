import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getPageContent } from '../api/Api';
import Loader from './Loader';

function PrivacyPolicy() {

  const [getPageData, setPageData] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const pageData = await getPageContent('5');
        setPageData(pageData.data);
      } catch (error) {
        console.error('Error fetching state data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Container className='text-secondary min-vh-100  mb-5'>
      <h1 className='contact-text text-muted text-center py-4 fw-bold fs-2'> PRIVACY POLICY</h1>
        {
          !getPageData ? (<Loader />) : (<><p dangerouslySetInnerHTML={{ __html: getPageData }}></p></>)
        }
      </Container>
    </>
  )
}
export default PrivacyPolicy