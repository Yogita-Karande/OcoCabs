import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getPageContent } from '../api/Api';

function CancelationPolicy() {

  const [getAboutData, setAboutData] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const pageData = await getPageContent('cancelation-policy');
        setAboutData(pageData);
      } catch (error) {
        console.error('Error fetching state data:', error);
      }
    }
    fetchData();
  }, []);
  
  return (
    <Container className='mb-5'>
    <h1 className='contact-text text-muted text-center py-4 fw-bold fs-2'> CANCELATION POLICY</h1>

    <ul>
      <li>You may cancel your booking with us any time before the schedule date and time of your pick-up by calling us on our 24x7 Customer Care helpline number.</li>
      <li>In case of date change please do not cancel your trip call our executive and ask for date change(After date change if anyone cancels trip then no refund will be given whatever may be the date.)</li>
      <li>Although a cancellation charge will be applicable as per below :</li>
      <ul>
        <li>If driver / car details are not yet provided: No Cancellation Charges will be levied on you.</li>
        <li>If driver / car details are already provided: You are liable to forfeit the advance amount paid by you for booking, as cancellation charges</li>
        <li>For round trip if you get any extra discount and cancel return trip then the Discounted Amount will get deducted from refund amount. If you are eligible according to refund policy you will get remaining amount within 5 to 7 business working days.</li>
      </ul>
    </ul>
    </Container>
  )
}

export default CancelationPolicy