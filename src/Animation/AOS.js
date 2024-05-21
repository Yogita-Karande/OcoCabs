import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function AOS() {
   
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>

    </>
  )
}

export default AOS