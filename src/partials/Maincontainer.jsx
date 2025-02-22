import React from 'react'

function Maincontainer() {
  return (
    <div className='w-full h-[73vh] bg-gray-600 relative'>
      <img src="/imgs/maincontainer.png" className='w-full h-full object-cover   ' alt="" />
      <div className='w-[376px] h-[196px] bg-red-500 absolute top-[42.7vh] right-0  maincontainer px-3 py-5'>
        <h1 className='text-xl font-bold text-white w-64  text-center '>We completed 2000+
        in 2024, All over India</h1>
        <p className='text-white mt-4'>corporis ad ipsa aliquid, eos asperiores debitis. Odit in vero quaerat dolorem quibusdam quidem repellat asperiores, consectetur odio impedit, iste aspernatur amet. </p>
      </div>
      <button className=' bg-white absolute top-[68vh] rounded-md left-[37vw] flex items-center justify-center py-[18.988px] px-[40.975px] '>Become a Donor</button>
    </div>
    
  )
}

export default Maincontainer