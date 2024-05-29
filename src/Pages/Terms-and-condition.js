import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getPageContent } from '../api/Api';

function Termsandcondition() {

  const [getAboutData, setAboutData] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const pageData = await getPageContent('terms-and-conditions');
        setAboutData(pageData);
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

        <p>By accessing this website we assume you accept these terms and conditions in full. Do not continue to use ococabs.com's website/mobile application   if you do not accept all of the terms and conditions stated on this page.</p>

        <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements:</p>

        <p>“Client”, “You” and “Your” refers to you, the person accessing this website and accepting the Company’s terms and conditions. </p>

        <p>“The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves, or either the Client or ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services/products, in accordance with and subject to, prevailing law of India.</p>

        <p>Any use of the above terminology or other words in the singular, plural, capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>

        <h6>Cookies</h6>

        <p>We employ the use of cookies. By using ococabs.com's website you consent to the use of cookies in accordance with ococabs.com’s privacy policy.</p>

        <p>Most of the modern day interactive web sites use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site to enable the functionality of this area and ease of use for those people visiting. Some of our affiliate / advertising partners may also use cookies.</p>

        <h6>Reservation of Rights</h6>

        <p>We reserve the right at any time and in its sole discretion to request that you remove all links or any particular link to our Web site. You agree to immediately remove all links to our Web site upon such request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuing to link to our Web site, you agree to be bound to and abide by these linking terms and conditions.</p>

        <h6>All cabs/taxis are not ours. We have partner with taxi owners. User have to follow safety guidelines and confirm all details provided and then provide OTP sent to driver to start journey.</h6>

        <h6>
          We do not responsible for any kind of loss during the journey. Customer must follow safety guidelines and keep valueable belongings to their own responsibility.</h6>

      </Container>
    </>
  )
}

export default Termsandcondition