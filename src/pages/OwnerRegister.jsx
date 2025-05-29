import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OwnerRegister = () => {
  const navigate = useNavigate();
    const onClick =(e) =>{
      e.preventDefault ()

      setTimeout(() => {
      navigate('/Login'); 
    }, 1000);
  };
  const onClick2 =(e) =>{
      e.preventDefault ()

      setTimeout(() => {
      navigate('/OwnerRegisterSuccess'); 
    }, 1000);
  };

  return (
    <div className='flex min-h-screen bg-white mx-16'>
      {/* Left Form Section (Owner Info) */}
      <div className='w-1/2 flex flex-col justify-center px-20 border-r-2 border-l-slate-100 pl-12'>
        <h2 className="text-4xl font-bold mb-10 mt-12.">
          <span className="text-blue-600 font-semibold">Lanka</span>
          <span className="text-blue-900 font-semibold">Stay.</span>
        </h2>
        <form className='space-y-6'>
          <div>
            <label htmlFor='name' className='block text-black text-lg mb-1'>Name</label>
            <input type='text' name='name' placeholder='Enter your name' className='w-5/6 border border-gray-300 p-4 rounded-md text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500' />
          </div>
          <div>
            <label htmlFor='email' className='block text-black text-lg mb-1'>E-mail</label>
            <input type='email' name='email' placeholder='name@gmail.com' className='w-5/6 border border-gray-300 p-4 rounded-md text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500' />
          </div>
          <div>
            <label htmlFor='phone' className='block text-black text-lg mb-1'>Phone No</label>
            <input type='text' name='phone' placeholder='With country code' className='w-5/6 border border-gray-300 p-4 rounded-md text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500' />
          </div>
          <div>
            <label htmlFor='country' className='block text-black text-lg mb-1'>Country</label>
            <input type='text' name='country' placeholder='Country name' className='w-5/6 border border-gray-300 p-4 rounded-md text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500' />
          </div>
          <div>
            <label htmlFor='nic' className='block text-black text-lg mb-1'>NIC</label>
            <input type='text' name='nic' placeholder='National Identity Card' className='w-5/6 border border-gray-300 p-4 rounded-md text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500' />
          </div>
          <div>
            <label htmlFor='username' className='block text-black text-lg mb-1'>Username</label>
            <input type='text' name='username' placeholder='Username' className='w-5/6 border border-gray-300 p-4 rounded-md text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500' />
          </div>
          <div>
            <label htmlFor='password' className='block text-black text-lg mb-1'>Password</label>
            <input type='password' name='password' placeholder='6+ characters' className='w-full border border-gray-300 p-4 rounded-md text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500' />
          </div>
        </form>
      </div>

      {/* Right Form Section (Hotel Info) */}
      <div className='w-1/2 flex flex-col justify-center px-20'>
        <h2 className="text-4xl font-bold mb-10">
         Register Your Hotel
        </h2>
        <form className="space-y-6">
          <div>
            <label htmlFor='name' className='block text-black text-lg mb-1'>Hotel Name</label>
            <input type='text' name='name' placeholder='Full name' className='w-5/6 border border-gray-300 p-4 rounded-md text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500' />
          </div>
          <div>
            <label htmlFor='No' className='block text-black text-lg mb-1'>Registration No</label>
            <input type='text' name='name' placeholder='PVT(ltd)' className='w-5/6 border border-gray-300 p-4 rounded-md text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500' />
          </div>
          <div>
            <label htmlFor='name' className='block text-black text-lg mb-1'>Address</label>
            <input type='text' name='name' placeholder='Location' className='w-5/6 border border-gray-300 p-4 rounded-md text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500' />
          </div>
          <div>
            <label htmlFor='name' className='block text-black text-lg mb-1'>Upload Images</label>
            <input type='text' name='name' placeholder='upload' className='w-5/6 border border-gray-300 p-4 rounded-md text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500' />
          </div>
          <div>
            <label htmlFor='name' className='block text-black text-lg mb-1'>Facilities</label>
            <input type='text' name='name' placeholder='Describe' className='w-5/6 border border-gray-300 p-4 rounded-md text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500' />
          </div>
          <button type='submit' className='bg-blue-600 text-white w-full py-3 rounded-md text-lg hover:bg-blue-700 transition'
          onClick={onClick2}>
            Register
          </button>
          <button className='text-lg underline' onClick={onClick}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default OwnerRegister;
