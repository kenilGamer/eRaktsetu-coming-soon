import React from 'react'

function AboutUs() {
  return (
    <div className='w-full h-screen container mx-auto relative flex max-md:flex-col'>
      <div className='w-52 h-52 bg-[#AB1419] rounded-full redcircle absolute top-0 right-0'></div>
      <div className='md:w-1/2 w-full h-full '><img src="/imgs/blood-research-bro 1.png" className='w-full object-cover' alt="" /></div>
      <div className='md:w-1/2 w-full h-full flex items-center md:justify-center flex-col '>
      <h1 className='md:text-[4.6vw] text-[8vw] leading-tight about font-["Anek Devanagari"]  mt-5 text-center font-bold'>About <span className='text-[#AB1419] font-semibold'>Us</span></h1>
      <hr className='border-2 border-[#AB1419] w-[239px] mx-auto mb-6' />
      <p className='md:text-[1.2vw] text-[3.5vw] md:w-3/4 font-["Anek Devanagari"] p-2 text-center  mt-5'>
corporis ad ipsa aliquid, eos asperiores debitis. Odit in vero quaerat dolorem quibusdam quidem repellat asperiores, consectetur odio impedit, iste aspernatur amet. Odit in vero quaerat dolorem quibusdam quidem repellat asperiores, consectetur odio impedit, iste aspernatur amet. 
corporis ad ipsa aliquid, eos asperiores debitis. Odit in vero quaerat dolorem quibusdam quidem repellat asperiores, </p>
      </div>
    </div>
  )
}

export default AboutUs