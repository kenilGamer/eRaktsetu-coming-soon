import React from 'react'

function AboutUs() {
  return (
    <div className='w-full h-screen container mx-auto relative flex'>
      <div className='w-52 h-52 bg-[#AB1419] rounded-full redcircle absolute top-0 right-0'></div>
      <div className='w-1/2 h-full '><img src="/imgs/blood-research-bro 1.png" className='w-full object-cover' alt="" /></div>
      <div className='w-1/2 h-full flex items-center justify-center flex-col '>
      <h1 className='text-[4.6vw] leading-tight about font-["Anek Devanagari"]  mt-5 text-center font-bold'>About <span className='text-[#AB1419] font-semibold'>Us</span></h1>
      <hr className='border-2 border-[#AB1419] w-[239px] mx-auto mb-6' />
      <p className='text-[1.2vw] w-3/4 font-["Anek Devanagari"]  mt-5'>
corporis ad ipsa aliquid, eos asperiores debitis. Odit in vero quaerat dolorem quibusdam quidem repellat asperiores, consectetur odio impedit, iste aspernatur amet. Odit in vero quaerat dolorem quibusdam quidem repellat asperiores, consectetur odio impedit, iste aspernatur amet. 
corporis ad ipsa aliquid, eos asperiores debitis. Odit in vero quaerat dolorem quibusdam quidem repellat asperiores, </p>
      </div>
    </div>
  )
}

export default AboutUs