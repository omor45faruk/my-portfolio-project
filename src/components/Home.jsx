import React from 'react';
 
import Banner from './Banner';
import AboutMe from './AboutMe';
import Hobbies from './Hobbies';
import Education from './Education';
import Footer from './Footer';
import Service from './Service';
import ContactUs from './ContactUs';
import NavBer from './NavBer';
import HireMe from './HireMe';
 

const Home = () => {
    return (
        <div  >
    
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Hobbies></Hobbies>
            <Service></Service>
            <HireMe></HireMe>
            <Education></Education>
            <ContactUs></ContactUs>
              
        </div>
    );
};

export default Home;