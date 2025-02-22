import React from 'react'

function Nav() {
  return (
    <div className="w-full h-20 nav  flex items-center justify-between bg-slate-">
      <div className='mt-2'>
        <img src="/imgs/logo.png" className='w-[16vw]' alt="" />
      </div>
      <div className='flex items-center gap-4 mt-1 '>
        <a href='#' className='text-gary-300'>Home</a>
        <a href='#' className='text-[#777777]'>About Us</a>
        <a href='#' className='text-[#777777]'>Features</a>
        <a href='#' className='text-[#777777]'>FAQ's</a>
      </div>
      <div className='flex items-center gap-6 '>
        <button className='join-us-btn'>Join Us</button>
        <button className='donate-now text-white'>Donate Now</button>
      </div>
    </div>
  )
}

export default Nav