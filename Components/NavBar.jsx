import React from 'react'
import assets from '../src/assets/logo.svg'

const NavBar = () => {
  return (
    <div className='absolute top-0 left-0 w-full'>
      <div className='flex justify-between items-center py-4 px-6 md:px20 lg:px-32 bg-transparent'>
        <img src={assets} />

        <ul className='hidden md:flex gap-7 text-white'>
            <a href="#Header" className='text-2xl cursor-pointer hover:text-gray-400'>Home</a>
            <a href="" className='text-2xl cursor-pointer hover:text-gray-400'>About</a>
            <a href="" className='text-2xl cursor-pointer hover:text-gray-400'>Projects</a>
            <a href="" className='text-2xl cursor-pointer hover:text-gray-400'>Testimonials</a>
            {/* <a href="" className='text-2xl cursor-pointer hover:text-gray-400'>Contact Us</a> */}
        </ul>

        <button className='hidden md:block bg-amber-900 px-8 py-2 rounded-full'>Signup</button>
      </div>
    </div>
  )
}

export default NavBar
