import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import MyImage from '../assets/reg.jpg'
const RegisterHero = () => {
  return (
    <div className='bg-cover h-screen relative flex items-center justify-center'
    style={{backgroundImage: `url(${MyImage})`}}>
        <div className='bg-white bg-opacity-60 backdrop-blur-lg shadow-lg border-opacity-20 w-2/3 h-[600px] p-8 rounded-3xl flex flex-col justify-center items-center text-white text-center'> 
            <div className='flex justify-center mb-4'>
                <h2 className="text-4xl font-bold mb-4 ">
                <span className='text-blue-600 font-semibold text-5xl'>Lanka</span>
                <span className='text-blue-900 font-semibold text-5xl'>Stay.</span>
                </h2>
            </div>

            <div className='flex justify-center mb-4 w-44'>
               <FiCheckCircle className="text-green-500 text-5xl" />
            </div>
            <div>
                <h2 className='text-blue-900 text-4xl mb-8'> Account created successfully</h2>
                <p className='text-gray-100 text-xl mb-14'>Please check your email</p>
            </div>
            <div>
                <button className='bg-blue-600 text-center w-52 h-16 rounded-lg text-3xl'>Book Now</button>
            </div>
        </div>
    </div>
  )
}

export default RegisterHero