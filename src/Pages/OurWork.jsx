import React, { useCallback, useEffect, useState } from 'react'

function OurWork() {
    const [isMobile, setIsMobile] = useState(false);
      const [menuOpen, setMenuOpen] = useState(false);
    
      const handleResize = useCallback(() => {
        setIsMobile(window.innerWidth <= 886);
      }, []);
    
      useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, [handleResize]);
  return isMobile == false ? (
    <div className='w-full h-screen  p-2 mb-32 mt-4'>
        <h1 className='text-[3.3vw] uppercase font-["Anek Devanagari"] text-center'>Our <span className='text-[#AB1419]'>Work</span></h1>
        <hr className='border-2 border-[#ab1419] w-[15vw] rounded-full mx-auto mb-6' />
        <div className='w-full h-full flex items-center justify-center gap-4'>
            <div className='h-full  flex flex-col  gap-3 items-center justify-center '>
                <div className='w-[20vw] h-1/2 bg-slate-400 rounded-xl'>

                </div>
                <div className='w-[20vw] h-1/2 bg-slate-400 rounded-xl'>

                </div>
                <img src="/imgs/logo.png" width={180} alt="" />
            </div>
            <div className=' h-full bg-[#F5F5F5] flex flex-col gap-3'>
                 <div className='w-[30vw] h-1/3 bg-slate-400 rounded-xl'>

                </div>
                <div className='w-[30vw] h-1/3 bg-slate-400 rounded-xl'>

                </div>
                <div className='w-[30vw] h-1/3 bg-slate-400 rounded-xl'>

                </div>

            </div>
            <div className=' h-full flex flex-col gap-3'>
            <div className='w-[20vw] h-1/2 bg-slate-400 rounded-xl'></div>
                <div className='w-[20vw] h-1/2 bg-slate-400 rounded-xl'></div>
            </div>
        </div>
    </div>
  ):(
    <div className='w-full h-full p-6 mb-5'>
        <h1 className='text-[7.3vw] uppercase font-["Anek Devanagari"] text-center'>Our <span className='text-[#AB1419]'>Work</span></h1>
        <hr className='border-2 border-[#ab1419] w-[35vw] rounded-full mx-auto ' />
        <div className='w-full h-fit flex items-center justify-center gap-4 '>
            <div className='h-fit  flex flex-col p-2 gap-3 items-center justify '>
                <div className='w-[40vw] h-[60vw] bg-slate-400 rounded-xl'>

                </div>
                <div className='w-[40vw] h-[30vw] bg-slate-400 rounded-xl'>

                </div>
                {/* <img src="/imgs/logo.png" width={180} alt="" /> */}
            </div>
           
            <div className=' h-fit flex flex-col gap-3'>
            <div className='w-[40vw] h-[30vw] bg-slate-400 rounded-xl'></div>
                <div className='w-[40vw] h-[30vw] bg-slate-400 rounded-xl'></div>
                <div className='w-[40vw] h-[30vw] bg-slate-400 rounded-xl'></div>
            </div>
        </div>
           <div className='w-full h-fit flex items-center justify-center gap-4 p-3 '>
           <div className='w-[82vw] h-[30vw] flex justify-center bg-slate-400 rounded-xl'></div>
           </div>
    </div>
  )
}

export default OurWork