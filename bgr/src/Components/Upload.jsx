import React from 'react'
import { assets } from '../assets/assets'

const Upload = () => {
  return (
    <div className='pb-6'>
      <h1 className='text-center text-2xl md:3xl lg:4xl mt-4 font-semibold py-6 md:py-10'>Try it now for free</h1>

       <div className='text-center mb-24'>
            <input type="file" name="" id="upload2" hidden/>
            <label className='inline-flex gap-3 px-8 py-3 rounded-full cursor-pointer bg-gradient-to-b from-green-900 to-green-400
            m-auto hover:scale-75 transition-all duration-500' htmlFor="upload2">
                <img className='w-4' src={assets.upload_btn_icon} alt="" />
                <p className='text-white' >Upload image</p>
            </label>
              </div>
    </div>
  )
}

export default Upload
