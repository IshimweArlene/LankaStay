import React, { useState } from 'react';
import bgImage from '../assets/bg.jpg';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      console.log("Account created successfully");
      navigate('/RegisterHero');
    }, 1000);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side - Background Image */}
      <div
        className="hidden md:block w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg shadow-lg border-opacity-20 w-2/3 h-[600px] p-8 rounded-3xl flex flex-col justify-center items-center text-white text-center">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-blue-700 font-semibold text-5xl">Lanka</span>
              <span className="text-blue-900 font-semibold text-5xl">Stay.</span>
            </h2>
            <p className="text-lg">Your perfect stay in Sri Lanka</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">CREATE ACCOUNT</h2>
            <p className="text-gray-600">Join LankaStay for the best stay experience</p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your Name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-700 text-lg"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="name@gmail.com"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-700 text-lg"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="With country code"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-700 text-lg"
                />
              </div>

              <div>
                <label htmlFor="username" className="block text-lg font-medium text-gray-700 mb-1">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="UserName"
                  name="username"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-700 text-lg"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-lg font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter your Password"
                    name="password"
                    required
                    className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-700 text-lg"
                  />
                  <span
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                  </span>
                </div>
              </div>
            </div>

            <div className="text-sm text-gray-600 mb-4">
              <p className="text-md">
                By signing in you agree to our <a href="#" className="text-blue-600 hover:text-blue-800">Terms and conditions</a> at zoho
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 font-medium"
            >
              Register
            </button>
          </form>

          <div className="flex flex-col items-center mt-4 justify-center">
            <a href="/login" className="underline text-xl">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
