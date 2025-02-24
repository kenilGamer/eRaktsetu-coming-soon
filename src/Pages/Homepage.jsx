import React from 'react'
import Nav from '../partials/Nav'
import Maincontainer from '../partials/Maincontainer'
import UesrFlow from '../partials/UesrFlow'

function Homepage() {
  return (
    <div className='w-full h-screen md:container  mx-auto p-5'>
      <div className='w-full  flex items-center justify-end'>
        <div className='text-2xl font-bold flex items-center gap-4'>
          <img src="/imgs/facebook.svg" className='w-5' alt="" />
          <img src="/imgs/ig.svg" alt="" />
          <img src="/imgs/twitter.svg" alt="" />
          <img src="/imgs/linkedin.svg" alt="" />
        </div>
      </div>
      <Nav/>
      <hr className='border-1.5 border-[#8A8A8A] ' />
      <h1 className='text-[38px] font-["Anek Devanagari"]  mt-5 text-center'>Be the Lifeline <span className='text-[#AB1419] font-semibold'>Someone Needs</span></h1>
      <hr className='border-2 border-[#AB1419] md:w-[20vw] w-[40vw] rounded-full mx-auto mb-6' />
      <Maincontainer/>
    </div>
  )
}

export default Homepage;