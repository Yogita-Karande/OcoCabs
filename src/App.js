
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Pages/About-Us';
import Blogs from './Pages/Blogs';
import BookingDetails from './Pages/BookingDetails';
import Booking_Successful from './Pages/Booking_Successful';
import CancelBooking from './Pages/CancelBooking';
import CancelationPolicy from './Pages/Cancelation-Policy';
import ContactUs from './Pages/Contact-Us';
import Footer from './Pages/Footer';
import Header from './Pages/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import My_Bookings from './Pages/My_Bookings';
import Notification from './Pages/Notification';
import Previous_Journey from './Pages/Previous_Journey';
import PrivacyPolicy from './Pages/Privacy-Policy';
import RefundPolicy from './Pages/Refund-Policy';
import Search from './Pages/Search';
import Termsandcondition from './Pages/Terms-and-condition';
import Testmonials from './Pages/Testmonials';
import Upcoming_Journey from './Pages/Upcoming_Journey';
import Update_Profile from './Pages/Update_Profile';
import Verify_Otp from './Pages/Verify_Otp';

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
          <Route path='my-bookings' element={<My_Bookings />} />
          <Route path='update-profile' element={<Update_Profile />} />
          <Route path='verify-number' element={<Verify_Otp />} />
          <Route path='testmonials' element={<Testmonials />} />
          <Route path='previous-journey' element={<Previous_Journey />} />
          <Route path='upcoming-journey' element={<Upcoming_Journey />} />
          <Route path='notification' element={<Notification/>} />
          <Route path='bookingdetails' element={<BookingDetails/>} />
          <Route path='booking-successful' element={<Booking_Successful/>} />
          <Route path='cancelbooking' element={<CancelBooking/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
