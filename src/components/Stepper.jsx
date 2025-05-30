import React from 'react'
import { useLocation } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'
const Stepper = () => {
 const location = useLocation()

 const steps = [
    {page: 'Booking', path: '/booking' },
    {page: 'Payment', path: '/payment' },
    {page: 'Completion', path: '/completion'}
    
 ]
  const currentStepIndex = steps.findIndex(step => location.pathname.startsWith(step.path)) + 1
  console.log("Current path:", location.pathname)
  return (
    <div className="flex items-center justify-center gap-12 mt-12 relative mb-16">
      {steps.map((step, index) => (
        <div key={step.path} className="relative flex items-center">
          <div className={`w-16 h-16 rounded-full z-10 flex items-center justify-center font-semibold transition 
            ${
              currentStepIndex > index + 1
                ? "bg-emerald-500 text-white text-2xl"
                : currentStepIndex === index + 1
                ? "bg-emerald-500 text-white text-2xl"
                : "bg-gray-300 text-gray-700 text-2xl"
            }`}>
            {
              currentStepIndex > index + 1 || currentStepIndex === index + 1
                ? <CheckCircle className="w-6 h-6" />
                : index + 1
            }
          </div>

          {index < steps.length - 1 && (
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-16 h-1 bg-gray-700 z-0"></div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Stepper