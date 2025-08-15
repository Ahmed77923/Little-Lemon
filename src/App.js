import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./compontens/Footer/Footer.jsx";

import CustomersSay from "./compontens/CustomersSay/CustomersSay.jsx";
import Navbar from "./compontens/Navbar/Navbar.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import BookingPage from "./compontens/BookingPage/BookingPage.jsx";
import Chicago from "./compontens/Chicago/Chicago.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/CustomersSay" element={<CustomersSay />} />
        <Route path="/Chicago" element={<Chicago />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
