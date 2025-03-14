import React from 'react'
import { assets,plans } from '../assets/assets'

const BuyCredit = () => {
  return (
    <div className='mx-4 my-3 lg:mx-44 mt-14 min-h-[80vh] text-center'>
        <button className='border border-gray-600 rounded-full px-10 py-2 mb-7 
         bg-gradient-to-b from-fuchsia-900 to-sky-900 text-white
         hover:animate-bounce transition-all duration-1000'>Our purchase</button>
        <h1 className='text-center sm:text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-gray-700 mb-7 sm:mb-10'>Pick your suitable choice</h1>
        <div className='flex flex-wrap text-left justify-center gap-7'>
           {plans.map((item,index) =>(
            <div className='bg-white drop-shadow-sm border rounded-lg px-12 py-8 text-gray-800
             cursor-pointer' key={index}>
                <img src={assets.logo_icon} alt="" />
                <p className='mt-5 font-semibold'>{item.id}</p>
                <p className='text-sm'>{item.desc}</p>
                <p className='mt-6'>
                    <span className='text-3xl font-medium'>${item.price}</span>/ {item.credits} credits
                </p>
                <button className='w-full rounded-md border border-gray-600 bg-gradient-to-b from-fuchsia-900 to-sky-900 text-white
                mt-8 text-sm min-w-52 py-3 hover:scale-105 transition-all duration-700'>Purchase</button>
            </div>
           ))}
        </div>
      
    </div>
  )
}

export default BuyCredit
