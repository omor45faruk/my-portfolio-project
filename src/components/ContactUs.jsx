import React from 'react';
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

const ContactUs = () => {
    return (
        <div className='h-screen w-11/12 mx-auto  '>
           <div className='text-center space-y-7 mt-14'>
        <h1 className='text-4xl font-bold max-sm:text-2xl'>Get In Touch !
        </h1>
        <p className='text-stone-600'>Obviously I'm a Web Designer. Web Developer with over 2 years of experience. <br /> Experienced with all stages of the development.</p></div> 

        <section className='flex'>
            <div className='w-3/5 border mt-10 p-8 space-y-5 '>
            <span className='flex gap-5'>
            <input type="text" placeholder="Name : " className="input input-bordered w-full max-w-sm" />
            <input type="text" placeholder="Email : " className="input input-bordered w-full max-w-sm" />
            </span>
            <input type="text" placeholder="Subject : " className="input input-bordered w-full max-w-3xl" />
            <textarea
  placeholder="Bio"
  className="textarea textarea-bordered textarea-lg w-full max-w-3xl"></textarea>

  <button className='btn btn-ghost text-white w-1/5 bg-orange-400 '>Send Message</button>
            </div>
        

            
         <div className='flex-col place-content-center p-20 space-y-5'>
         <div>
                <div className='flex gap-5 items-center'>
                    <span>
                    <MdOutlineLocalPhone className='w-7 h-7' /> 
                    </span>
                    <span className=' '>
                    <h1 className='font-bold'>Phone</h1> 
                    <p className='text-gray-500'>01797775812</p>
                    </span>
                </div>
            </div>

            

            <div>
                <div className='flex gap-5 items-center'>
                    <span>
                    <IoMailOutline className='w-7 h-7'  /> 
                    </span>
                    <span className=' '>
                    <h1 className='font-bold'>Email</h1> 
                    <p className='text-gray-500'>omor45faruk@gmail.com</p>
                    </span>
                </div>
            </div>




            <div>
                <div className='flex gap-5 items-center'>
                    <span>
                    <IoLocationOutline className='w-7 h-7' /> 
                    </span>
                    <span className=''>
                    <h1 className='font-bold'>Location</h1> 
                    <p className='text-gray-500'>Voydobe,Panchbibi,Joypurhat,<br />
                    Rajsahi,Bangladesh
                    </p>
                    </span>
                </div>
            </div>
         </div>

        </section>



        </div>

    );
};

export default ContactUs;