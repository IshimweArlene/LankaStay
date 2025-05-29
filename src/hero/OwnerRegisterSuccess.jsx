import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import { useNavigate, useLocation } from 'react-router-dom'
import MyImage from '../assets/reg.jpg'
const OwnerRegisterSuccess = () => {
   const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    setTimeout(() => {
      console.log("Logged in successfully!");
      navigate('/Dashboard'); 
    }, 1000);
  };
  return (
    <div className='bg-cover h-screen relative flex items-center justify-center'
    style={{backgroundImage: `url(${MyImage})`}}>
        <div className='bg-white bg-opacity-20 backdrop-blur-lg shadow-lg border-opacity-20 w-2/3 h-[600px] p-8 rounded-3xl flex flex-col justify-center items-center text-white text-center'> 
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
                <h2 className='text-blue-900 text-4xl mb-8'> Once we verified, You can Access Dashboard</h2>
                
            </div>
            <div>
            <button
             className='bg-blue-600 text-center w-72 h-16 rounded-lg text-3xl transition duration-300 ease-in-out hover:bg-blue-700 group overflow-hidden'
             onClick={handleClick}
            >
            <span className='inline-block transition duration-300 ease-in-out group-hover:translate-x-14 group-hover:scale-110 group-hover:z-10'>
            View Dashboard
            </span>
            </button>
            </div>

        </div>
    </div>
  )
}

export default OwnerRegisterSuccess;