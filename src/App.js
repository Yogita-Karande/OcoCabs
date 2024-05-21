
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Pages/About-Us';
import Blogs from './Pages/Blogs';
import CancelationPolicy from './Pages/Cancelation-Policy';
import ContactUs from './Pages/Contact-Us';
import Footer from './Pages/Footer';
import Header from './Pages/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import PrivacyPolicy from './Pages/Privacy-Policy';
import RefundPolicy from './Pages/Refund-Policy';
import Search from './Pages/Search';
import Termsandcondition from './Pages/Terms-and-condition';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about-us' element={<AboutUs />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='login' element={<Login />} />
          <Route path='contact-us' element={<ContactUs />} />
          <Route path='search' element={<Search />} />
          <Route path='terms-and-condition' element={<Termsandcondition />} />
          <Route path='privacy-policy' element={<PrivacyPolicy />} />
          <Route path='refund-policy' element={<RefundPolicy />} />
          <Route path='cancelation-policy' element={<CancelationPolicy />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
