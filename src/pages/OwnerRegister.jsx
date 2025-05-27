import React from 'react';

const OwnerRegister = () => {
  return (
    <div className='flex min-h-screen bg-white'>
      {/* Left Form Section (Owner Info) */}
      <div className='w-1/2 flex flex-col justify-center px-20'>
        <h2 className="text-4xl font-bold mb-10">
          <span className="text-blue-600 font-semibold">Lanka</span>
          <span className="text-blue-900 font-semibold">Stay.</span>
        </h2>
        <form className='space-y-6'>
          <div>
            <label htmlFor='name' className='block text-black text-lg mb-1'>Name</label>
            <input type='text' name='name' placeholder='Enter your name' className='w-full border border-gray-300 p-3 rounded-md text-gray-700' />
          </div>
          <div>
            <label htmlFor='email' className='block text-black text-lg mb-1'>E-mail</label>
            <input type='email' name='email' placeholder='name@gmail.com' className='w-full border border-gray-300 p-3 rounded-md text-gray-700' />
          </div>
          <div>
            <label htmlFor='phone' className='block text-black text-lg mb-1'>Phone No</label>
            <input type='text' name='phone' placeholder='With country code' className='w-full border border-gray-300 p-3 rounded-md text-gray-700' />
          </div>
          <div>
            <label htmlFor='country' className='block text-black text-lg mb-1'>Country</label>
            <input type='text' name='country' placeholder='Country name' className='w-full border border-gray-300 p-3 rounded-md text-gray-700' />
          </div>
          <div>
            <label htmlFor='nic' className='block text-black text-lg mb-1'>NIC</label>
            <input type='text' name='nic' placeholder='National Identity Card' className='w-full border border-gray-300 p-3 rounded-md text-gray-700' />
          </div>
          <div>
            <label htmlFor='username' className='block text-black text-lg mb-1'>Username</label>
            <input type='text' name='username' placeholder='Username' className='w-full border border-gray-300 p-3 rounded-md text-gray-700' />
          </div>
          <div>
            <label htmlFor='password' className='block text-black text-lg mb-1'>Password</label>
            <input type='password' name='password' placeholder='6+ characters' className='w-full border border-gray-300 p-3 rounded-md text-gray-700' />
          </div>
        </form>
      </div>

      {/* Right Form Section (Hotel Info) */}
      <div className='w-1/2 flex flex-col justify-center px-20 bg-blue-50'>
        <h2 className="text-4xl font-bold mb-10">
          <span className="text-blue-600 font-semibold">Hotel</span>
          <span className="text-blue-900 font-semibold"> Info</span>
        </h2>
        <form className='space-y-6'>
          <div>
            <label htmlFor='name' className='block text-black text-lg mb-1'>Hotel Name</label>
            <input type='text' name='name' placeholder='Full name' className='w-full border border-gray-300 p-3 rounded-md text-gray-700' />
          </div>
          <div>
            <label htmlFor='No' className='block text-black text-lg mb-1'>Registration No</label>
            <input type='text' name='name' placeholder='PVT(ltd)' className='w-full border border-gray-300 p-3 rounded-md text-gray-700' />
          </div>
          <div>
            <label htmlFor='name' className='block text-black text-lg mb-1'>Address</label>
            <input type='text' name='name' placeholder='Location' className='w-full border border-gray-300 p-3 rounded-md text-gray-700' />
          </div>
          <div>
            <label htmlFor='name' className='block text-black text-lg mb-1'>Upload Images</label>
            <input type='text' name='name' placeholder='upload' className='w-full border border-gray-300 p-3 rounded-md text-gray-700' />
          </div>
          <div>
            <label htmlFor='name' className='block text-black text-lg mb-1'>Facilities</label>
            <input type='text' name='name' placeholder='Describe' className='w-full border border-gray-300 p-3 rounded-md text-gray-700' />
          </div>
          <button type='submit' className='bg-blue-600 text-white w-full py-3 rounded-md text-lg hover:bg-blue-700 transition'>
            Register
          </button>
          <button className='text-lg underline'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default OwnerRegister;
