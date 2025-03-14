import React from 'react'
import { testimonialsData } from '../assets/assets'

const Testimonial = () => {
  return (
    <div>
      <h1 className='text-center sm:text-2xl md:text-3xl lg:text-4xl mt-4 font-bold text-gray-700 py-6 mb-10'>Testimonials</h1>

      <div className='grid grid-cols-1  md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8'>
        {testimonialsData.map((item, index) =>(
            <div className='bg-blue-500 text-white rounded-xl p-6 drop-shadow-md mx-w-lg m-auto hover:bg-blue-600
            transition-all duration-150' key={index}>
                <p  className='text-sm' >{item.text}</p>
                <div className='flex items-center gap-3 mt-5'>
                    <img className='w-9 rounded-full' src={item.image} alt="" />
                    <div>
                        <p>{item.author}</p>
                        <p className='text-sm'>{item.jobTitle}</p>
                    </div>
                </div>

            </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial
