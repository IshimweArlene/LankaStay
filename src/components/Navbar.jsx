import React from 'react'
import { Link, useLocation } from 'react-router-dom'
const Navbar = () => {
    const location = useLocation();
    const Links = [
        {name:'Home', href:'/home'},
        {name:'Hotels', href:'/Hotels'},
        {name:'Rooms', href:'/Rooms'},
        {name:'About', href:'/About'},
        {name:'Contact', href:'/Contact'},
    ];
    const isLanding = location.pathname === '/';
  return (
    <nav className="w-full h-20 bg-white shadow-sm py-3 px-8 flex items-center justify-evenly ">
      {/* Logo */}
      <div className="flex items-center ">
        <h2 className="text-3xl font-bold ml-24">
          <span className="text-blue-600 font-semibold">Lanka</span>
          <span className="text-blue-900 font-semibold">Stay.</span>
        </h2>
      </div>

      {/* Centered Links */}
        <div className='relative flex align-middle justify-evenly w-full gap-8'>
            <ul className="flex  space-x-8 mx-auto absolute right-28 top-[-8px] ">
                {Links.map((linkItem) => (
                <li key={linkItem.name} className="font-normal text-xl">
                    <Link
                    to={linkItem.href}
                    className={`no-underline hover:text-blue-700 transition-colors duration-200 ${
                        location.pathname === linkItem.href
                        ? "text-blue-900 font-bold underline"
                        : ""
                    }`}
                    >
                    {linkItem.name}
                    </Link>
                </li>
                ))}
            </ul>
        </div>
      {/* Right Side Button */}
      <div className="flex items-center ">
        <Link
          to="/login"
          className="bg-blue-900 w-28 mr-32 text-white px-6 py-2 text-center text-lg rounded-md font-semibold shadow hover:bg-blue-700 transition"
        >
          Login
        </Link>
      </div>
    </nav>
  )
}

export default Navbar