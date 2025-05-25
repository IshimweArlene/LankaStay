import React from 'react'
import bgImage from '../assets/bg.jpg' 

const Register = () => {
  return (
    <div className="flex min-h-screen">
        {/* Left side - Background Image */}
        <div
        className='hidden md:block w-1/2 bg-cover bg-center relative'
        style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-white text-center bg-white bg-opacity-20 w-2/3 h-[600px] items-center justify-center p-8 rounded-xl">
                    <h2 className="text-4xl font-bold mb-4">LankaStay.</h2>
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

                <form className="mt-8 space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input 
                                type="text" 
                                id="name"
                                placeholder="Enter your Name" 
                                name="username" 
                                required 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input 
                                type="email" 
                                id="email"
                                placeholder="name@gmail.com" 
                                name="email" 
                                required 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <input 
                                type="tel" 
                                id="phone"
                                placeholder="With country code" 
                                name="phone" 
                                required 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            />
                        </div>

                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                            <input 
                                type="text" 
                                id="username"
                                placeholder="UserName" 
                                name="username" 
                                required 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input 
                                type="password" 
                                id="password"
                                placeholder="Enter your Password" 
                                name="password" 
                                required 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            />
                        </div>
                    </div>

                    <div className="text-sm text-gray-600 mb-4">
                        <p>By signing in you agree to our <a href="#" className="text-blue-600 hover:text-blue-800">Terms and conditions</a></p>
                    </div>

                    <button 
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 font-medium"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register
