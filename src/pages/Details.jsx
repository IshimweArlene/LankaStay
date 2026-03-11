import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { FaBath, FaBed, FaTv, FaWifi } from 'react-icons/fa';
import { MdOutlineKitchen, MdDining } from 'react-icons/md'
import { Lamp, Package } from 'lucide-react'
import Footer from '../components/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import { getHotelById } from '../data/hotelsData'

const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const hotelData = getHotelById(id);
    if (hotelData) {
      setHotel(hotelData);
    }
  }, [id]);

  const handleClick = (e) => {
    e.preventDefault();
    setTimeout(() => {
      navigate('/Booking');
    }, 1000);
  };

  if (!hotel) {
    return (
      <div>
        <Navbar />
        <div className='mx-32 mt-12 mb-8 text-center'>
          <h1 className='text-3xl text-gray-600'>Loading...</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
    <Navbar />
    <div className='mx-32 mt-12 mb-8'>
      <div className='flex flex-row space-x-64 mb-10'>
        <div>
          <p className='text-xl font-semibold'>
            <span className='text-gray-400 cursor-pointer hover:text-gray-600' onClick={() => navigate('/')}>Home / </span>
            <span className='text-blue-950'>Hotel Details</span>
          </p>
        </div>
        <div className='flex flex-col text-center'>
          <h1 className='text-blue-950 text-5xl font-bold mb-4'>{hotel.name}</h1>
          <p className='text-2xl text-gray-400'>{hotel.location}</p>
        </div>
      </div>
     
      <div className='grid grid-cols-2 gap-x-3 gap-y-3 mb-10 ml-6'>
        <img src={hotel.images[0]} className='row-span-2 h-[520px] w-[750px] rounded-3xl'/>
        <img src={hotel.images[1]} />
        <img src={hotel.images[2]} />      
      </div>

      <div className='grid grid-cols-2 gap-8'>
        <div>
          <h2 className='text-blue-950 font-bold text-2xl mb-4'>About the place </h2>
          <p className='text-lg text-gray-400'>{hotel.description}</p>
          <p className='text-lg text-gray-400 mt-4'>{hotel.description2}</p>
        </div>
        <div className='bg-white shadow-lg py-8 px-28 mb-12 w-5/6 border border-gray-200 rounded-xl'>
          <h2 className='text-blue-950 font-semibold text-2xl mb-5'>Start booking</h2>
          <p className='text-4xl mb-12'><span className='text-emerald-500 font-semibold'>${hotel.price} </span><span className='text-gray-500 font-light'>per Day</span></p>
          <button className='w-72 h-14 mb-6 rounded-2xl text-center font-bold text-white text-xl bg-blue-600' onClick={handleClick}>Book Now!</button>
        </div>
      </div>
      
      <div className='grid grid-cols-8 gap-4 mb-16'>
        <div>
          <FaBed size={48}/>
          <p>{hotel.features.bedrooms} bedroom</p>
        </div>
        <div>
          <Lamp size={48}/>
          <p>{hotel.features.livingRooms} living room</p>
        </div>
        <div>
          <FaBath size={48}/>
          <p>{hotel.features.bathrooms} bathroom</p>
        </div>
        <div>
          <MdDining size={48}/>
          <p>{hotel.features.diningRooms} dining room</p>
        </div>
        <div>
          <FaWifi size={48}/>
          <p>{hotel.features.wifi}</p>
        </div>
        <div>
          <Package size={48}/>
          <p>{hotel.features.units} unit ready</p>
        </div>
        <div>
          <MdOutlineKitchen size={48}/>
          <p>{hotel.features.kitchen} refrigerator</p>
        </div>
        <div>
          <FaTv size={48}/>
          <p>{hotel.features.tvs} television</p>
        </div>
      </div>

      <div>
        <h2 className='text-2xl text-gray-900 mb-9'>Treasure to Choose</h2>
        <div className='grid grid-cols-4 gap-2 ml-8 mb-20'> 
          {hotel.treasures.map((treasure, index) => (
            <div key={index} className='relative'>
              <img src={treasure.image} alt={treasure.name}/>
              {treasure.popular && (
                <p className='bg-blue-700 w-36 text-center h-10 text-white rounded-bl-xl text-lg top-0 right-10 rounded-tr-2xl absolute'>Popular Choice</p>
              )}
              <p className='text-xl text-blue-950 font-medium'>{treasure.name}</p>
              <p className='text-lg text-gray-400'>{treasure.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Details