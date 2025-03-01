import React from 'react'

function Maincontainer() {
  return (
    <div className='w-full h-[73vh] bg-gray-600 relative '>
      <img src="/imgs/maincontainer.png" className='md:w-full h-full max-md:object-center
 object-cover   ' alt="" />
    
      <div className='md:w-[28vw] w-[80vw] h-[31vh] bg-red-500 absolute top-[42.2vh] md:top-[42.6vh] md:right-0 max-md:left-[6vw] flex items-center  flex-col  maincontainer px-3 py-5'>
        <h1 className='md:text-xl sm:text-[3vw] md:text-[2vw] font-bold text-white md:-64  text-center '>We completed 2000+
        in 2024, All over India</h1>
        <p className='text-white md:mt-4 sm:text-[2.2vw] md:text-[1vw] mt-6'>corporis ad ipsa aliquid, eos asperiores debitis. Odit in vero quaerat dolorem quibusdam quidem repellat asperiores, consectetur odio impedit, iste aspernatur amet. </p>
      </div>
      <button className='become-donor bg-[#FCFCFC] absolute md:top-[68vh] top-[72vh] left-1/2 translate-x-[-50%]  flex items-center justify-center py-[18.988px] px-[40.975px] '>Become a Donor</button>
    </div>
    
  )
}

export default Maincontainer