import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {

    const {openSignIn} = useClerk()
    const {isSignedIn, user} = useUser()
  return (
    <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>
      <Link to={'/'}><img className='w-32 sm:44' src={assets.logo} alt="logo" /></Link>
      {
        isSignedIn ? 
        <div>
           <UserButton/>
        </div> :<button onClick={() =>openSignIn({})} className='bg-blue-600 text-white flex items-center gap-4 px-3 py-2 sm:px-7 sm:py-3 text-sm
      rounded-full hover:bg-blue-500 active:bg-blue-400'>
        Get Started 
      </button>
      }
      
    </div>
  )
}

export default Navbar
