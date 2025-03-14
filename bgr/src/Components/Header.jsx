import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-9 lg:px-44
    sm:mt-20'>
      <div>
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-700 leading-tight m-6'>Remove the <br/> 
        <span className='bg-gradient-to-b from-green-900 to-green-400 bg-clip-text text-transparent'>
            background</span> from <br/>  images in three steps </h1>
        <p className='m-7 text-sm text-gray-400'>remove background from from your images <br/>
            in three easy steps and save time  
        </p>
        <div>
            <input type="file" name="" id="upload1" hidden/>
            <label className='inline-flex gap-3 px-8 py-3 rounded-full cursor-pointer bg-gradient-to-b from-green-900 to-green-400
            m-auto hover:scale-75 transition-all duration-500' htmlFor="upload1">
                <img className='w-4' src={assets.upload_btn_icon} alt="" />
                <p className='text-white' >Upload image</p>
            </label>
        </div>

      </div>

      <div>
         <img className='w-full max-w-md' src={assets.header_img} alt="" />
      </div>
    </div>
  )
}

export default Header
