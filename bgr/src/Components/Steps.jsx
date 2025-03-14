import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
      <h1 className='text-center sm:text-2xl md:text-3xl lg:text-4xl mt-4 font-bold text-gray-700'>
        Steps to remove <span className='bg-gradient-to-b from-green-900 to-green-400 bg-clip-text text-transparent' >background</span> <br/> from image</h1>
      <div className='flex flex-wrap items-start gap-4 mt-16 xl:mt-24 justify-center'>
        
        <div className='flex items-start gap-4 bg-white border drop-shadow-md p-5 pb-10 rounded  hover:bg-gray-200 transition-all
        duration-150'>
            <img className='max-w-9' src={assets.upload_icon} alt="upload-icon" />
            <div>
                <p className='text-xl font-medium'>Upload image</p>
                <p className='text-sm text-gray-700'>Upload the image you want to <br/>  remove background. 
                </p>
            </div>
        </div>

        
        <div className='flex items-start gap-4 bg-white border drop-shadow-md p-5 pb-10 rounded  hover:bg-gray-200 transition-all
        duration-150'>
            <img className='max-w-9' src={assets.remove_bg_icon} alt="upload-icon" />
            <div>
                <p className='text-xl font-medium'>Remove background</p>
                <p className='text-sm text-gray-700'>remove the backround of image <br/>  uploaded 
                </p>
            </div>
        </div>

        
        <div className='flex items-start gap-4 bg-white border drop-shadow-md p-5 pb-10 rounded  hover:bg-gray-200 transition-all
        duration-150'>
            <img className='max-w-9' src={assets.download_icon} alt="upload-icon" />
            <div>
                <p className='text-xl font-medium'>Download image</p>
                <p className='text-sm text-gray-700'>download your image without  <br/> background 
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Steps
