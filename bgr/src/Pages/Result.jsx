import React from 'react'
import { assets } from '../assets/assets'

const Result = () => {
  return (
    <div className='mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]'>

        <div className='bg-black drop-shadow-sm rounded-lg px-7 py-7'>

           <div className='flex flex-col sm:grid grid-cols-2 gap-7'>
              

              <div>
                <p className='font-semibold mb-3 text-white'>image with background</p>
                <img className='rounded-md border' src={assets.image_w_bg} alt="" />
              </div>
              <div className='flex flex-col'>
                <p className='font-semibold mb-3  text-white' >image without background</p>
                <div className='rounded-md border border-gray-500 h-full relative bg-layer overflow-hidden'>
                    <img src={assets.image_wo_bg} alt="" />
                    {/*<div className='absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2'>
                        <div className='border-4 border-blue-600  rounded-full w-12 h-12
                        border-t-transparent animate-spin'>

                        </div>
                    </div>*/}
                </div>
              </div>
           </div>

           <div className='flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6 text-white'>
            <button className='py-3 text-sm border border-white rounded-full hover:scale-105 transition-all duration-700  px-6'
            >upload another image</button>
            <a href="" className='px-6 py-3 bg-gradient-to-b from-fuchsia-900 to-sky-900 rounded-full 
             hover:scale-105 transition-all duration-700'>Download image</a>
           </div>

        </div>
     
    </div>
  )
}

export default Result
