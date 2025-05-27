import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'

const LoginHero = () => {
  return (
    <div>
        <div>
            <div>
                <h2 className="text-4xl font-bold mb-4 ">
                <span className='text-blue-600 font-semibold text-5xl'>Lanka</span>
                <span className='text-blue-900 font-semibold text-5xl'>Stay.</span>
                </h2>
            </div>

            <div>
               <FiCheckCircle className="text-green-500 text-2xl" />
            </div>
            <div>
                <h2> Account created successfully</h2>
                <p>Please check your email</p>
            </div>
            <div>
                <button>Book Now</button>
            </div>
        </div>
    </div>
  )
}

export default LoginHero