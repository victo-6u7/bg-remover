import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 px-4 lg:px-44 py-3'>
      <img width={140} src={assets.logo} alt="" />
      <p className='flex-1 border-l border-green-500 pl-4 tex-sm text-gray-700 max-sm:hidden'>Copyright @NavyCode | All right reserved</p>
      <div className='flex gap-1'>
        <img width={35} src={assets.twitter_icon} alt="" />
        <img width={35}  src={assets.google_plus_icon} alt="" />
        <img width={35} src={assets.facebook_icon} alt="" />
      </div>
    </div>
  )
}

export default Footer
