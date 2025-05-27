import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img6 from '../assets/img6.jpg'
import img5 from '../assets/img5.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import orign from '../assets/orign.jpg'
import reg from '../assets/reg.jpg'
import green from '../assets/green.jpg'
import room1 from '../assets/room1.jpg'
import room2 from '../assets/room2.jpg'
import room3 from '../assets/room3.jpg'

const MostPicked = () => {
  return (
    <div className='bg-white mx-24'>
        <h2 className='text-3xl font-bold text-blue-950 mb-6 mx-20'>Most Picked</h2>
        <div>
            <div className='grid grid-cols-3 grid-rows-2 gap-4 mx-12 mb-36'>
                <div className='relative row-span-2'>
                    <img src={img1} alt="Most Picked 1" className='w-[360px] h-[530px] ml-8 rounded-3xl'/>
                    <div className='absolute top-0 rounded-tr-3xl right-3 text-white text-center text-xl w-48 h-12 bg-blue-600 p-2 rounded-lg shadow-md'>
                        50$ per night
                    </div>
                    <div className='absolute bottom-14 left-14 text-slate-50 text-2xl'>
                        Blue Origin Fams
                    </div>
                    <div className='absolute bottom-6 left-14 text-slate-100 text-xl'>
                        Galle, Sri Lanka
                    </div>
                </div>
                <div className='relative'>
                    <img src={img2} alt="Most Picked 1" className='w-[390px] h-[250px] rounded-3xl'/>
                    <div className='absolute top-0 rounded-tr-3xl right-3 text-white text-center text-xl w-48 h-12 bg-blue-700 p-2 rounded-lg shadow-md'>
                        22$ per night
                    </div>
                    <div className='absolute bottom-14 left-14 text-slate-50 text-2xl'>
                        Ocean Lund
                    </div>
                    <div className='absolute bottom-6 left-14 text-slate-100 text-xl'>
                        Trincomalle, Sri Lanka
                    </div>
                </div>
                <div className='relative'>
                    <img src={img3} alt="Most Picked 1" className='w-[390px] h-[250px] rounded-3xl'/>  
                    <div className='absolute top-0 rounded-tr-3xl right-3 text-white text-center text-xl w-48 h-12 bg-blue-700 p-2 rounded-lg shadow-md'>
                        856$ per night
                    </div>
                    <div className='absolute bottom-14 left-14 text-slate-50 text-2xl'>
                        Stark House
                    </div>
                    <div className='absolute bottom-6 left-14 text-slate-100 text-xl'>
                        Dehiwala, Sri Lanka
                    </div>
                </div>
                <div className='relative'>
                    <img src={img4} alt="Most Picked 1" className='w-[390px] h-[250px] rounded-3xl'/>
                    <div className='absolute top-0 rounded-tr-3xl right-3 text-white text-center text-xl w-48 h-12 bg-blue-700 p-2 rounded-lg shadow-md'>
                        62$ per night
                    </div>
                    <div className='absolute bottom-14 left-14 text-slate-50 text-2xl'>
                        Vinna Vill
                    </div>
                    <div className='absolute bottom-6 left-14 text-slate-100 text-xl'>
                        Beruwala, Sri Lanka
                    </div>
                </div>
                <div className='relative'>
                    <img src={img6} alt="Most Picked 1" className='w-[390px] h-[250px] rounded-3xl'/>
                    <div className='absolute top-0 rounded-tr-3xl right-3 text-white text-center text-xl w-48 h-12 bg-blue-700 p-2 rounded-lg shadow-md'>
                        72$ per night
                    </div>
                    <div className='absolute bottom-14 left-14 text-slate-50 text-2xl'>
                        Bobox
                    </div>
                    <div className='absolute bottom-6 left-14 text-slate-100 text-xl'>
                        Kandy, Sri Lanka
                    </div>
                </div>           
            </div>

            <div className='grid grid-cols-4 gap-4 mx-12 mb-24 '>
                <div className='relative'>
                    <div>
                        <img src={img7} className='w-[390px] h-[250px] rounded-3xl mx-3'/>
                    </div>
                    <div className='bg-blue-600 absolute top-0 rounded-tr-3xl -right-3 text-white text-xl text-center w-48 h-12 p-2 rounded-lg shadow-md'>
                        Popular Choice
                    </div>
                    <div className='ml-6'>
                        <p className='font-semibold text-black text-2xl'>Shangri-La</p>
                        <p className='text-xl text-gray-700'>Colombo, Sri Lanka</p>
                    </div>
                </div>

                <div className='relative'>
                    <div>
                        <img src={orign} className='w-[390px] h-[250px] rounded-3xl mx-3'/>
                    </div>
                    <div className='ml-6'>
                        <p className='font-semibold text-black text-2xl'>Top View</p>
                        <p className='text-xl text-gray-700'>Hikkaduwe, Sri Lanka</p>
                    </div>
                </div>

                <div className='relative'>
                    <div>
                        <img src={green} className='w-[390px] h-[250px] rounded-3xl mx-3'/>
                    </div>
                    <div className='ml-6'>
                        <p className='font-semibold text-black text-2xl'>Green Villa</p>
                        <p className='text-xl text-gray-700'> Kandy, Sri Lanka</p>
                    </div>
                </div>

                <div className='relative'>
                    <div>
                        <img src={reg} className='w-[390px] h-[250px] rounded-3xl mx-3'/>
                    </div>
                    <div className='ml-6'>
                        <p className='font-semibold text-black text-2xl'>Wooden Pit</p>
                        <p className='text-xl text-gray-700'> Ambalagonde, Sri Lanka</p>
                    </div>
                </div> 

                <div className='relative'>
                    <div>
                        <img src={img5} className='w-[390px] h-[250px] rounded-3xl mx-3'/>
                    </div>
                    <div className='ml-6'>
                        <p className='font-semibold text-black text-2xl'>Boutique</p>
                        <p className='text-xl text-gray-700'> Kandy, Sri Lanka</p>
                    </div>
                </div> 
                <div className='relative'>
                    <div>
                        <img src={room1} className='w-[390px] h-[250px] rounded-3xl mx-3'/>
                    </div>
                    <div className='ml-6'>
                        <p className='font-semibold text-black text-2xl'>Modern</p>
                        <p className='text-xl text-gray-700'> Nuwereliya, Sri Lanka</p>
                    </div>
                </div> 
                <div className='relative'>
                    <div>
                        <img src={room2} className='w-[390px] h-[250px] rounded-3xl mx-3'/>
                    </div>
                    <div className='ml-6'>
                        <p className='font-semibold text-black text-2xl'>Silver Rain</p>
                        <p className='text-xl text-gray-700'> Dehiwala, Sri Lanka</p>
                    </div>
                </div> 
                <div className='relative'>
                    <div>
                        <img src={img8} className='w-[390px] h-[250px] rounded-3xl mx-3'/>
                    </div>
                    <div className='bg-blue-600 absolute top-0 rounded-tr-3xl -right-3 text-white text-xl text-center w-48 h-12 p-2 rounded-lg shadow-md'>
                        Popular Choice
                    </div>
                    <div className='ml-6'>
                        <p className='font-semibold text-black text-2xl'>CashVille</p>
                        <p className='text-xl text-gray-700'> Ampara, Sri Lanka</p>
                    </div>
                </div> 
                              
            </div>
        </div>
    </div>
  )
}

export default MostPicked