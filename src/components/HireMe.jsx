import React from 'react';
import { Link } from 'react-router-dom';

const HireMe = () => {
    return (
        <div
  className="hero bg-cover bg-current "
  style={{
    backgroundImage: "url(https://img.freepik.com/free-vector/realistic-neon-lights-background_23-2148907367.jpg?ga=GA1.1.883984216.1721251693&semt=ais_hybrid)",
  }} 
    
    >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-2xl font-bold">I Am Available For Freelancer Projects.</h1>
      <p className="mb-5">
      Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.
      </p>
      <Link to='/contact' className="btn btn-ghost bg-orange-500 text-white">Hire Me</Link>
    </div>
  </div>
</div>
    );
};

export default HireMe;