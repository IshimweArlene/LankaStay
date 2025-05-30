import React from 'react';
import Stepper from '../../components/Stepper';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

   
    setTimeout(() => {
      navigate('/completion');
    }, 1000);
  };

  return (
    <div className='pb-10'>
      <h2 className="text-3xl font-bold py-6 text-center border-b-2 border-gray-100 shadow-sm">
        <span className='text-blue-600 font-semibold'>Lanka</span>
        <span className='text-blue-900 font-semibold'>Stay.</span>
      </h2>

      <Stepper />

      <h2 className='text-4xl text-blue-950 text-center font-semibold'>Payment</h2>
      <p className='text-xl text-gray-400 text-center font-medium'>
        Kindly follow the instructions below
      </p>

      <div className='mx-60 grid grid-cols-2 gap-3 my-16'>
        <div className='ml-16'>
          <p className='text-[25px] text-blue-950 font-normal mb-5'>
            Transfer LankaStay:
          </p>
          <p className='text-[25px] text-blue-950 font-normal mb-5'>
            2 Days at Blue Origins Fams,<br /> Galle, Sri Lanka
          </p>
          <p className='text-[25px] text-blue-950 font-normal mb-5'>
            Total: <span className='font-bold'>$400 USD</span>
          </p>
          <p className='text-[25px] text-blue-950 font-normal mb-5'>
            Initial payment: <span className='font-bold'>$200</span>
          </p>
        </div>

        <div className='grid grid-rows-8 border-l-2 border-gray-300 pl-36'>
          <label className='text-lg text-blue-950 font-medium'>Card Number</label>
          <input placeholder='Payment Card Number' className='bg-gray-100 text-lg w-80 h-12' />

          <label className='text-lg text-blue-950 font-medium'>Bank</label>
          <input placeholder='Select Bank' className='bg-gray-100 text-lg w-80 h-12' />

          <label className='text-lg text-blue-950 font-medium'>Exp date</label>
          <input placeholder='Validation date' className='bg-gray-100 text-lg w-80 h-12' />

          <label className='text-lg text-blue-950 font-medium'>CVV</label>
          <input placeholder='Beside the card' className='bg-gray-100 text-lg w-80 h-12' />
        </div>
      </div>

      <div className='flex justify-center'>
        <button
          className='bg-blue-600 text-2xl text-white w-72 h-14 rounded-lg'
          onClick={handleClick}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;
