import React from 'react'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' 
    style={{backgroundImage: "url('/header_img.png')"}}>
      {/* <NavBar /> */}
      <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] font-semibold pt-20'>Explore home that fits your dreams</h2>
        <div className='gap-3'>
          <a href="">Projects</a>
          <a href="">Contact Us</a>
        </div>
      </div>
    </div>
  )
}

export default Header

