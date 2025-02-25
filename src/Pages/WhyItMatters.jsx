import React from 'react'

function WhyItMatters() {
    const data = [
        { numebr: "2.7M+", subtitle: "donations"   },
        { numebr: "15M+", subtitle: "Lives Impacted"   },
        { numebr: "3000+", subtitle: "Verified NGO’s"   },
        { numebr: "300+", subtitle: "Corporate Partners"   },

    ]
  return (
    <div className='w-full h-[70vh] p-10'>
        <h1 className='text-[3.3vw] uppercase font-["Anek Devanagari"] text-center'>Why It Matters</h1>
        <hr className='border-2 border-[#AB1419] w-[15vw] rounded-full mx-auto mb-6' />
        <div className='w-full h-full flex items-center rounded-[30px] flex-col bg-[#AB1419] text-white'>
            <h1 className='text-[3.3vw]  font-["Anek Devanagari"] leading-[1.3] text-center '>Most trusted  <br/>
            Online Donation Platform</h1>
            <hr className='border-2 border-white w-[32vw]  rounded-full mx-auto mb-6 ' />
            <div className='flex items-center justify-between'>
                {data.map((key,index)=>(
                    <div key={key}>
                        
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default WhyItMatters