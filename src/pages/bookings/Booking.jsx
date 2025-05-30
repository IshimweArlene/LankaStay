import React, { useState } from 'react'
import { CalendarPlus } from 'lucide-react';
import img1 from '../../assets/img1.jpg'
import { useNavigate } from 'react-router-dom';
import Stepper from '../../components/Stepper';

const Booking = () => {
    const [count, setCount] = useState(1);
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        setTimeout(() => {
            navigate('/Payment');
        }, 1000);
    };

    return (
        <div>
            <h2 className="text-3xl font-bold py-6 text-center border-b-2 border-gray-100 shadow-sm">
                <span className='text-blue-600 font-semibold'>Lanka</span>
                <span className='text-blue-900 font-semibold'>Stay.</span>
            </h2>

            <div className='mx-44'>
               <Stepper />
                <h1 className='text-center text-5xl text-blue-950 mb-5 font-bold'>Booking Information</h1>
                <p className='text-2xl text-gray-400 font-medium text-center mb-20'>
                    Please fill up the blank fields below.
                </p>

                <div className='grid grid-cols-2 gap-3'>
                    {/* Left Side */}
                    <div className='border-r-2 border-gray-200'>
                        <img src={img1} className='h-[360px] w-[470px] rounded-3xl' />
                        <div className='relative mt-2'>
                            <p className='text-2xl text-blue-950'>Blue Origin Fams</p>
                            <p className='absolute top-2 right-32 text-lg text-gray-400'>Galle, Sri Lanka</p>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className='ml-24'>
                        <p className='font-normal text-gray-600 text-lg mb-2'>How long will you stay?</p>

                        <div className='flex items-center gap-6 w-fit bg-gray-300 rounded-lg h-12 mt-8 mb-10 px-0'>
                            {/* Minus */}
                            <button
                                onClick={() => setCount(prev => Math.max(prev - 1, 1))}
                                className={`w-12 h-12 rounded-lg text-2xl ${
                                    count <= 1 ? 'bg-red-600 text-red-400 cursor-not-allowed' : 'bg-red-600 text-white'
                                }`}
                                disabled={count <= 1}
                            >
                                ➖
                            </button>

                            <div className='text-3xl text-center text-blue-900 font-semibold w-32'>
                                {count} {count === 1 ? 'day' : 'days'}
                            </div>

                            <button
                                onClick={() => setCount(prev => prev + 1)}
                                className='bg-green-600 text-white text-2xl w-12 h-12 rounded-lg'
                            >
                                ➕
                            </button>
                        </div>

                        <div className='mb-10'>
                            <p className='text-lg text-blue-950 font-semibold'>Pick a Date</p>
                            <input
                                type='date'
                                placeholder={CalendarPlus}
                                className='text-start text-blue-900 text-xl focus:outline-none cursor-text bg-gray-200 w-72 h-12 rounded-lg'
                            />
                        </div>

                        <h2 className='text-3xl'>
                            <span className='text-gray-400 font-normal'>You will pay </span>
                            <span className='text-blue-950 font-bold'>$400 USD</span> <br />
                            <span className='text-gray-400 font-normal'> per </span>
                            <span className='text-blue-950 font-bold'>2 Days</span>
                        </h2>
                    </div>
                </div>

                <div className='flex justify-center mt-24 pb-32'>
                    <button
                        className='bg-blue-600 text-center text-2xl text-white w-72 rounded-lg h-12 hover:bg-blue-700 transition'
                        onClick={handleClick}
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Booking;
