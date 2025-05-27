import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
    const onClick =(e) =>{
        e.preventDefault ()

      setTimeout(() => {
      console.log("Logged in successfully!");
      navigate('/OwnerRegister'); 
      }, 1000);
    };

  return (
    <div className='w-full border border-slate-200 bg-white mb-14'>
      <div className='flex justify-between px-36 pt-10'>
         
        <div>
          <h2 className="text-3xl font-bold">
            <span className="text-blue-600 font-semibold">Lanka</span>
            <span className="text-blue-900 font-semibold">Stay.</span>
          </h2>

          <p className='font-semibold text-lg text-gray-500 mt-4'>
            We kaboom your beauty holiday <br />
            instantly and memorable
          </p>
        </div>

        {/* Hotel Owner Section */}
        <div className='text-right'>
          <p className='text-2xl text-blue-950 font-semibold'>Become Hotel Owner</p>
          <button 
          onClick={onClick}
          className='bg-blue-600 w-40 h-12 rounded-lg mt-4 text-white'
          >Register Now</button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='bg-blue-600 text-white text-center text-xl py-2 mt-10'>
        © 2025. All rights reserved. Salman Faris
      </div>
    </div>
  );
};

export default Footer;
