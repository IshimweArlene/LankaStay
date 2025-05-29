import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import { FaUser, FaCamera, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import MyImage from '../assets/download.jpg'; 
import { CalendarPlus } from 'lucide-react';
import { MapPin } from 'lucide-react';
import MostPicked from '../components/MostPicked';
import Footer from '../components/Footer';

const Home = () => {
  const navigate = useNavigate();

  const handleClick= (e) =>{
    e.preventDefault();

   setTimeout(() =>{
    navigate ('/Details')
   }, 1000);
  }

  return (
    <div className='w-full h-screen bg-white'>
      <div>
        <Navbar />
      </div>

      <div className='w-full flex flex-row-reverse items-center justify-center mt-16 mb-24'>
        {/* Image on the right */}
        <div className="relative w-[600px] h-[450px] ml-10">           
          <div className="absolute top-8 left-8 w-full h-full border-2 border-gray-300 rounded-tl-[100px] rounded-3xl z-0"></div>            
            <img
              src={MyImage}
              alt="Hotel"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-tl-[100px] rounded-3xl shadow-lg z-10"
            />
          </div>

          {/* Content on the left */}
          <div className='flex flex-col justify-center max-w-xl mr-20'>
            <h2 className='text-blue-950 text-6xl text-left font-bold mb-10'>
              Forget Busy Work,<br/> Start Next Vacation
            </h2>

            <p className='text-xl text-gray-500 mb-8'>
              We provide what you need to enjoy your <br/> holiday with family. Time to make another <br/> memorable moment.
            </p>

            <button className='w-44 h-12 rounded-xl text-center text-white bg-blue-600 mb-16'>
              Show More
            </button>

            <div className='flex justify-start items-center gap-16 py-4'>
              <div className="relative items-end gap-2">
                <FaUser className="text-2xl text-blue-900 mr-2 mb-3" />
                <span className="text-2xl font-bold text-blue-900">2500</span>
                <span className="text-gray-500 font-medium ml-1">Users</span>
              </div>

              <div className="relative items-end gap-2">
                <FaCamera className="text-2xl text-blue-900 mr-2 mb-3" />
                <span className="text-2xl font-bold text-blue-900">200</span>
                <span className="text-gray-500 font-medium ml-1">treasure</span>
              </div>

              <div className="relative items-end gap-2">
                <MapPin className="text-2xl text-blue-900 mr-2 mb-3" />
                <span className="text-2xl font-bold text-blue-900">100</span>
                <span className="text-gray-500 font-medium ml-1">cities</span>
              </div>
          
          </div>
        </div>
      </div> 

      <div> 
        <div className='bg-blue-50 ml-36 mr-32  mb-20 h-28 align-middle flex p-8 justify-evenly rounded-full'>
          <div className='flex justify-between items-center w-full px-4'>
            <button className='bg-white text-black w-56 h-16 text-lg rounded-3xl flex items-center justify-center' onClick={handleClick}>
              <span><CalendarPlus /></span>
              Check Available
            </button>
          </div>
          <div className='flex justify-between items-center w-full px-4'>
            <button className='bg-white text-black w-56 h-16 text-lg rounded-3xl flex items-center justify-center'>
              <span><FaUserAlt /></span>
              Person 2
            </button>
          </div>
          <div className='flex justify-between items-center w-full px-4'>
            <button className='bg-white text-black w-56 h-16 text-lg rounded-3xl flex items-center justify-center'>
              <span><MapPin/></span>
              Select Location
            </button>
          </div>
          <div className='flex justify-between items-center w-full px-4'>
            <button className='bg-blue-600 text-white w-52 h-14 text-lg rounded-3xl flex items-center justify-center'>Search</button>
          </div>
        </div>
      </div>
      
      <div>
        <MostPicked />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home;
