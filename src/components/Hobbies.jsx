import React from 'react';
import { MdMonitor } from "react-icons/md";
import { LuFlower2 } from "react-icons/lu";
import { MdSportsCricket } from "react-icons/md";

import { FcReading } from "react-icons/fc";
import { BsCupHot } from "react-icons/bs";

import { IoMdMusicalNotes } from "react-icons/io";
import { IoVideocamOutline } from "react-icons/io5";
import { AiOutlineRise } from "react-icons/ai";
import { MdAutoAwesome } from "react-icons/md";


const Hobbies = () => {
    return (
        <div className='w-11/12 mx-auto min-h-screen content-center  my-10'>
            <div className='text-center space-y-7'>
                <h1 className='text-4xl font-bold max-sm:text-2xl'>Hobbies & Expertise
                </h1>
                <p className='text-stone-600'>Obviously I'm a Web Designer. Web Developer with over 2 years of experience. <br /> Experienced with all stages of the development.</p>

                 <section className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 justify-center'>
                   





<div className="card bg-base-100 w-72  shadow-xl border">
  <div className="items-center flex">

  <span className='bg-orange-50 p-2 rounded-lg m-3'><MdMonitor className='text-3xl text-orange-500' /></span>

    <div className="card-actions ">
       
    <span className='w-auto px-5 font-semibold'>Developing</span>

    </div>
  </div>
</div>




<div className="card bg-base-100 w-72  shadow-xl border">
  <div className="items-center flex">

  <span className='bg-orange-50 p-2 rounded-lg m-3'><LuFlower2 className='text-3xl text-orange-500' /></span>

    <div className="card-actions ">
       
    <span className='w-auto px-5 font-semibold'>Gardening</span>

    </div>
  </div>
</div>




<div className="card bg-base-100 w-72  shadow-xl border">
  <div className="items-center flex">

  <span className='bg-orange-50 p-2 rounded-lg m-3'><MdSportsCricket className='text-3xl text-orange-500' /></span>

    <div className="card-actions ">
       
    <span className='w-auto px-5 font-semibold'>Sports</span>

    </div>
  </div>
</div>



<div className="card bg-base-100 w-72  shadow-xl border">
  <div className="items-center flex">

  <span className='bg-orange-50 p-2 rounded-lg m-3'><FcReading className='text-3xl text-orange-500' /></span>

    <div className="card-actions ">
       
    <span className='w-auto px-5 font-semibold'>Reading</span>

    </div>
  </div>
</div>



<div className="card bg-base-100 w-72  shadow-xl border">
  <div className="items-center flex">

  <span className='bg-orange-50 p-2 rounded-lg m-3'><BsCupHot className='text-3xl text-orange-500' /></span>

    <div className="card-actions ">
       
    <span className='w-auto px-5 font-semibold'>Coffee</span>

    </div>
  </div>
</div>




<div className="card bg-base-100 w-72  shadow-xl border">
  <div className="items-center flex">

  <span className='bg-orange-50 p-2 rounded-lg m-3'><IoMdMusicalNotes className='text-3xl text-orange-500' /></span>

    <div className="card-actions ">
       
    <span className='w-auto px-5 font-semibold'>Music</span>

    </div>
  </div>
</div>




<div className="card bg-base-100 w-72  shadow-xl border">
  <div className="items-center flex">

  <span className='bg-orange-50 p-2 rounded-lg m-3'><IoVideocamOutline className='text-3xl text-orange-500' /></span>

    <div className="card-actions ">
       
    <span className='w-auto px-5 font-semibold'>Cinema</span>

    </div>
  </div>
</div>




<div className="card bg-base-100 w-72  shadow-xl border">
  <div className="items-center flex">

  <span className='bg-orange-50 p-2 rounded-lg m-3'><MdAutoAwesome className='text-3xl text-orange-500' /></span>

    <div className="card-actions ">
       
    <span className='w-auto px-5 font-semibold'>Designing</span>

    </div>
  </div>
</div>



<div className="card bg-base-100 w-72  shadow-xl border">
  <div className="items-center flex">

  <span className='bg-orange-50 p-2 rounded-lg m-3'><AiOutlineRise className='text-3xl text-orange-500' /></span>

    <div className="card-actions ">
       
    <span className='w-auto px-5 font-semibold'>More Activities</span>

    </div>
  </div>
</div>






                    
                 </section>
            </div>
        </div>
    );
};

export default Hobbies;