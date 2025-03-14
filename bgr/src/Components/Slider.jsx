import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Slider = () => {

    const [slidePosition,setslidePosition] = useState(50)

    const handleSliderchange = (e) =>{
        setslidePosition(e.target.value)
    }
  return (
    <div className='mb-10 md:py-10 px-2'>
      <h1 className='mb-10 sm:mb-18 text-center sm:text-2xl md:text-3xl lg:text-4xl mt-4 font-bold text-gray-700' >
        High quality <span className='bg-gradient-to-b from-green-900 to-green-400 bg-clip-text text-transparent'
        >background</span> remover</h1>

        <div className='relative w-full max-w-3xl overflow-hidden m-auto rounded-1xl mb-10'>
            <img className='absolute top-0 left-0 w-full h-full' src={assets.image_wo_bg} style={{clipPath: `inset(0 0 0 ${slidePosition}% )`}} alt="" />
            <img  src={assets.image_w_bg} style={{clipPath: `inset(0 ${100.2 - slidePosition}% 0 0)`}} alt="" />
            
 
            <input className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider' 
            type="range" min={0} max={100} value={slidePosition} onChange={handleSliderchange}/>
        </div>
    </div>
  )
}

export default Slider
