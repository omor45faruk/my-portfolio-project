import React from 'react';
import { Link } from 'react-router-dom';
 
const Banner = () => {
    return (
        <div className=' lg:min-h-screen items-center     
         bg-base-200 min-h-4
          ' 
           >
       
<div className='  bg-opacity-60 align-middle flex max-sm:flex-col justify-between w-11/12 items-center mx-auto lg:min-h-screen  '>
            <div className=' py-8'>

            <h4 className="  font-bold text-orange-600">Hello !! </h4>
            <h1 className="  w-full max-sm:text-3xl text-4xl font-bold">I  am <span className='text-orange-500'>Omor Faruk.</span></h1>
            <h3 className=" max-sm:text-xl text-3xl font-bold mt-3"><span className='text-gray-600'>A Freelance </span><span className='text-orange-500 ' >Web Designer</span>.</h3>
            <p className='text-gray-600'>Obviously I'm a Web Designer. Web Developer with over 2 years of experience. <br /> Experienced with all stages of the development.</p>
            
            <div className='mt-5'>
            <button className="btn btn-outline text-orange-500 bg-orange-500 bg-opacity-10">Download CV</button>
            <Link to='/contact' className=" btn btn-outline ml-4 text-orange-500 bg-orange-500 bg-opacity-10">Hire me</Link>
            </div>
        

            </div>


            
            <div className='lg:min-h-screen md:min-h-screen content-center pt-4'>
                <img className='w-[400px] h-full' src="https://i.ibb.co/2j5H7LV/file-3.png" alt="" />
            </div>


</div>
           


            {/* banner end */}



        </div>
    );
};

export default Banner;