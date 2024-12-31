import { Link, Links, Navigate, NavLink } from "react-router-dom";
 

 
const NavBer = () => {

    const link= 
    
   <>

    <NavLink to='/' className='ml-10 font-semibold '>Home</NavLink>
    <NavLink  to='/about'  className='ml-10 font-semibold '> About</NavLink> 
    
    <NavLink  to='/services' className='ml-10 font-semibold '> Services</NavLink> 
    <NavLink  to='/skill' className='ml-10 font-semibold '> Skills</NavLink> 
    <NavLink  to='/contact' className='ml-10 font-semibold '> Contact</NavLink>
 
   
   </>


    return (
        <div className="navbar w-11/12 mx-auto bg-base-100">

        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
               {link}
            </ul>
          </div>
          <h3 className="nav-title font-extrabold text-3xl">Om<span className="text-orange-600">o</span>r</h3>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
             {link}
          </ul>
        </div>
        
      </div>
    );
};

export default NavBer;