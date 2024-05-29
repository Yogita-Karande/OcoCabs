import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getPageContent } from '../api/Api';

function RefundPolicy() {

  const [getAboutData, setAboutData] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const pageData = await getPageContent('refund-policy');
        setAboutData(pageData);
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

        <p>As per the bank/payment gateway policy, the refund will be processed. It may take<b> 7 to 10 business days </b>for the refund to reflect into your account.</p>

        <h5>For one-way/round trip</h5>
        <ul>
          <li>If you have cancelled trip before 12 hours you will get 100% refund</li>
          <li>If you cancelled trip before 6 hours of your journey time then 50% amount will be refunded.</li>
          <li>If you cancelled trip just before 1 hour of journey time then no refund will be given.</li>
          <li>If car is left towards your boarding location no refund will be given.</li>
          <li>For round trip(or two different trips oneway that is connected/associated and given discount (extra discount), the extra discounted amount for one way will be deducted from refund and remaining amount if any will be transfered.)</li>
        </ul>

        <h5>For local/day rental/airport taxi</h5>

        <ul>
          <li>If you have cancelled trip before 6 hours you will get 100% refund.</li>
          <li>If you cancelled trip before 3 hours of your journey time then 50% amount will be refunded.</li>
          <li>If you cancelled trip just before 1 hour of journey time then no refund will be given.</li>
          <li>If car is left towards your boarding location no refund will be given.</li>
        </ul>
      </Container>
    </>
  )
}

export default RefundPolicy