// src/pages/HomePage.jsx
import Chicago from "../../compontens/Chicago/Chicago";
import CustomersSay from "../../compontens/CustomersSay/CustomersSay";
import Specials from "../../compontens/Specials/Specials";
import Contact from './../../compontens/contact/contact'
import Hero from "../../compontens/Hero/Hero";


const HomePage = () => {
  return (
    <>
       <main>
        
      <Hero />
      <Specials />
      <Chicago />
      <CustomersSay />
      <Contact />
    </main>
    </>
  );
};

export default HomePage;
