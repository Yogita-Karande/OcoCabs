import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getPageContent } from '../api/Api';

function PrivacyPolicy() {

  const [getAboutData, setAboutData] = useState();
  // console.log(getAboutData)
  useEffect(() => {
    async function fetchData() {
      try {
        const pageData = await getPageContent('5');
        setAboutData(pageData.data);
        // console.log('Page Data:', pageData.data);
      } catch (error) {
        console.error('Error fetching state data:', error);
      }
    }
    fetchData();
  }, []);

  return (

    <>
    <Container className='text-secondary mb-5'>
      <h1 className='contact-text text-muted text-center py-4 fw-bold fs-2'> PRIVACY POLICY</h1>
      {/* {getAboutData.map((item, index) => (
        <div key={index}>
          <p>Data: {item.data}</p>
        </div>
      ))} */}
      <p dangerouslySetInnerHTML={{ __html: getAboutData }}></p>
      </Container>
    </>

  )
}

export default PrivacyPolicy