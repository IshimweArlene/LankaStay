import React from 'react'
import Navbar from '../components/Navbar'
import img1 from '../assets/img1.jpg'
import small from '../assets/small.png'
import rectangle from '../assets/rectangle 6.png'
import { FaBath, FaBed, FaTable, FaWineGlassAlt, FaWifi, FaTv} from 'react-icons/fa';
import { MdOutlineKitchen, MdOutlineAcUnit, MdDining } from 'react-icons/md'
import { Lamp, Package} from 'lucide-react'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import pic4 from '../assets/pic4.png'
import Footer from '../components/Footer'
import { useLocation, useNavigate } from 'react-router-dom'

const Details = () => {
 const navigate = useNavigate()
 const handleClick =(e) => {
   e.preventDefault ();

    setTimeout (() =>{ 
      navigate ('/Booking')
    },1000 );
 }
  return (
    <div>
    <Navbar />
    <div className='mx-32 mt-12 mb-8'>
      <div className='flex flex-row space-x-64 mb-10'>
        <div>
          <p className='text-xl font-semibold'><span className='text-gray-400'>Home / </span><span className='text-blue-950'>Hotel Details</span></p>
        </div>
        <div className='flex flex-col text-center'>
          <h1 className='text-blue-950 text-5xl font-bold mb-4'>Blue Origin Fams</h1>
          <p className='text-2xl text-gray-400'>Galle ,Sri Lanka</p>
        </div>
      </div>
     
      <div className='grid grid-cols-2 gap-x-3 gap-y-3 mb-10 ml-6'>
        <img src={img1} className='row-span-2 h-[520px] w-[750px] rounded-3xl'/>
        <img src={small} />
        <img src={rectangle} />      
      </div>

      <div className='grid grid-cols-2 gap-8'>
        <div>
          <h2 className='text-blue-950 font-bold text-2xl mb-4'>About the place </h2>
          <p className='text-lg text-gray-400 '>Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.</p>
          <p className='text-lg text-gray-400 mt-4'>Such trends saw the demise of the soul-infused techno that typified the original Detroit sound. Robert Hood has noted that he and Daniel Bell both realized something was missing from techno in the post-rave era.</p>
        </div>
        <div className='bg-white shadow-lg py-8 px-28 mb-12 w-5/6 border border-gray-200 rounded-xl'>
          <h2 className='text-blue-950 font-semibold text-2xl mb-5'>Start booking</h2>
          <p className='text-4xl mb-12 '><span className='text-emerald-500 font-semibold'>$200 </span ><span className='text-gray-500 font-light'>per Day</span></p>
          <button className='w-72 h-14 mb-6 rounded-2xl text-center font-bold text-white text-xl bg-blue-600' onClick={handleClick}>Book Now!</button>
        </div>
      </div>
      
      <div className='grid grid-cols-8 gap-4 mb-16'>
        <div>
          <FaBed size={48}/>
          <p>1 bedroom</p>
        </div>
        <div>
          <Lamp size={48}/>
          <p>1 living room</p>
        </div>
        <div>
          <FaBath size={48}/>
          <p>1 bathroom</p>
        </div>
        <div>
          <MdDining size={48}/>
          <p>1 dining room</p>
        </div>
        <div>
          <FaWifi size={48}/>
          <p>10 mbps</p>
        </div>
        <div>
          <Package size={48}/>
          <p>7 unit ready</p>
        </div>
        <div>
          <MdOutlineKitchen size={48}/>
          <p>1 refrigerator</p>
        </div>
        <div>
          <FaTv size={48}/>
          <p>2 television</p>
        </div>
      </div>

      <div>
        <h2 className='text-2xl text-gray-900 mb-9'>Treasure to Choose</h2>
        <div className='grid grid-cols-4 gap-2 ml-8 mb-20'> 
         <div>
           <img src={pic1} />
           <p className='text-xl text-blue-950 font-medium'>Green Lake</p>
           <p className='text-lg text-gray-400'>Nature </p>
         </div> 
         <div> 
           <img src={pic2} />
           <p className='text-xl text-blue-950 font-medium'>Dog Clubs</p>
           <p className='text-lg text-gray-400'>Pool </p>
         </div>
         <div className='relative'>
           <img src={pic3} />
           <p className='bg-blue-700 w-36 text-center h-10 text-white rounded-bl-xl text-lg top-0 right-10 rounded-tr-2xl absolute'>Popular Choice</p>
           <p className='text-xl text-blue-950 font-medium'>Labour and Wait</p>
           <p className='text-lg text-gray-400'>shoping </p>
         </div> 
         <div> 
           <img src={pic4} />
           <p className='text-xl text-blue-950 font-medium'>Snorkelling</p>
           <p className='text-lg text-gray-400'>beach </p>
         </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Details