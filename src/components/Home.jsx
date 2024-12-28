import React from 'react';
import Navber from './Navber';
import Banner from './Banner';
import AboutMe from './AboutMe';
import Hobbies from './Hobbies';
import Education from './Education';
import Footer from './Footer';
import Service from './Service';
import ContactUs from './ContactUs';
 

const Home = () => {
    return (
        <div  >
            <Navber></Navber>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Hobbies></Hobbies>
            <Service></Service>
            <Education></Education>
            <ContactUs></ContactUs>
             <Footer></Footer>
        </div>
    );
};

export default Home;