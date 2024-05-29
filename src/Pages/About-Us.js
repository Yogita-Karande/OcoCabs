import { useEffect, useState } from 'react';
import { getPageContent } from '../api/Api';

function AboutUs() {

  const [getAboutData, setAboutData] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const pageData = await getPageContent('about-us');
        setAboutData(pageData);
      } catch (error) {
        console.error('Error fetching state data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className='about-main mt-4 min-vh-100 ' data-aos="fade-right">
      <h1 className='contact-text main-about text-center text-muted'>ABOUT US</h1>
      <p className='col-lg-10 mx-lg-auto pt-5 ms-4 me-4'>
        we are India's leader for taxi travels provider. we are promise you safe ,reliable and cost-effective inter-city taxis all over Maharashtra and India. our mission is to simplify outstation travel for all Indians and we welcome your suggestions for improvement always.' Ococabs 'vision is to enable easier, safer and reliable outstation travel across India at all comfort and price levels. we strive to provide the most enjoyable outstation taxis travel experience at the best possible prices with a provider partner network that is whetted to deliver great service. we believe that the intercity travel space can be vastly re-organized to the advantage of consumer, taxi operators and deliver by the use of technology. the Ococabs team is continuously striving to make improvements and are happy to receive your suggestions and feedback. write to us at www.ococabs.com</p>
    </div>
  )
}

export default  AboutUs