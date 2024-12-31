import React from 'react';
import { PiMonitorPlay } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";

import { CiSettings } from "react-icons/ci";

import { FaRegCompass } from "react-icons/fa";
import { IoIosAperture } from "react-icons/io";
import { CiCamera } from "react-icons/ci";
const Service = () => {
    return (
    <div className='py-14 bg-base-200'>
    <div className='text-center space-y-7'>
        <h1 className='text-4xl font-bold max-sm:text-2xl'>What do i offer?
        </h1>
        <p className='text-stone-600'>Obviously I'm a Web Designer. Web Developer with over 2 years of experience. <br /> Experienced with all stages of the development.</p></div>
        <div className=' w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 py-10'>



            <div className="card card-compact bg-base-100 w-96 shadow-xl border  ">
  <figure className='my-5  '>
     <PiMonitorPlay className='w-12 h-12 text-orange-500'></PiMonitorPlay>
  </figure>
  <div className="card-body">
    <h2 className="card-title">UX / UI Design</h2>
    <p className='text-gray-500'>The phrasal sequence of the is now so that many campaign and benefit</p>
    <div className="card-actions  ">
      <button className="btn btn-ghost">Read More <FaArrowRight /></button>
    </div>
  </div>
</div>



<div className="card card-compact bg-base-100 w-96 shadow-xl border  ">
  <figure className='my-5  '>
     <IoIosAperture  className='w-12 h-12 text-orange-500'></IoIosAperture>
  </figure>
  <div className="card-body">
    <h2 className="card-title">Ios App Designer</h2>
    <p className='text-gray-500'>The phrasal sequence of the is now so that many campaign and benefit</p>
    <div className="card-actions  ">
      <button className="btn btn-ghost">Read More <FaArrowRight /></button>
    </div>
  </div>
</div>

<div className="card card-compact bg-base-100 w-96 shadow-xl border  ">
  <figure className='my-5  '>
    <CiCamera className='w-12 h-12 text-orange-500'></CiCamera>
  </figure>
  <div className="card-body">
    <h2 className="card-title">Photography</h2>
    <p className='text-gray-500'>The phrasal sequence of the is now so that many campaign and benefit</p>
    <div className="card-actions  ">
      <button className="btn btn-ghost">Read More <FaArrowRight /></button>
    </div>
  </div>
</div>

<div className="card card-compact bg-base-100 w-96 shadow-xl border  ">
  <figure className='my-5  '>
     <FaRegCompass  className='w-12 h-12 text-orange-500'></FaRegCompass >
  </figure>
  <div className="card-body">
    <h2 className="card-title">Graphic Designer</h2>
    <p className='text-gray-500'>The phrasal sequence of the is now so that many campaign and benefit</p>
    <div className="card-actions  ">
      <button className="btn btn-ghost">Read More <FaArrowRight /></button>
    </div>
  </div>
</div>

<div className="card card-compact bg-base-100 w-96 shadow-xl border  ">
  <figure className='my-5  '>
     <CiSettings  className='w-12 h-12 text-orange-500'></CiSettings >
  </figure>
  <div className="card-body">
    <h2 className="card-title">Web Security</h2>
    <p className='text-gray-500'>The phrasal sequence of the is now so that many campaign and benefit</p>
    <div className="card-actions  ">
      <button className="btn btn-ghost">Read More <FaArrowRight /></button>
    </div>
  </div>
</div>


<div className="card card-compact bg-base-100 w-96 shadow-xl border  ">
  <figure className='my-5  '>
     <MdOutlineSecurity  className='w-12 h-12 text-orange-500'></MdOutlineSecurity >
  </figure>
  <div className="card-body">
    <h2 className="card-title">UX / UI Design</h2>
    <p className='text-gray-500'>The phrasal sequence of the is now so that many campaign and benefit</p>
    <div className="card-actions  ">
      <button className="btn btn-ghost">Read More <FaArrowRight /></button>
    </div>
  </div>
</div>

        </div>
        </div>
    );
};

export default Service;