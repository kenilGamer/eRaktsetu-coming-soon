import React from 'react'

function WhatWeDo() {
    const data = [
        {
            "id": 1,
            src: "/imgs/book-outline.svg",
            "name": "Blood Donation",
            "description": "We are a team who donates blood for free to save lives."
        },
        {
            "id":2,
            src: "/imgs/book-outline.svg",
            "name": "Blood Donation",
            "description": "We are a team who donates blood for free to save lives."
        },
        {
            "id": 3,
            src: "/imgs/book-outline.svg",
            "name": "Blood Donation",
            "description": "We are a team who donates blood for free to save lives."
        }, {
            "id": 4,
            src: "/imgs/book-outline.svg",
            "name": "Blood Donation",
            "description": "We are a team who donates blood for free to save lives."
        }, {
            "id": 5,
            src: "/imgs/book-outline.svg",
            "name": "Blood Donation",
            "description": "We are a team who donates blood for free to save lives."
        }, {
            "id": 6,
            src: "/imgs/book-outline.svg",
            "name": "Blood Donation",
            "description": "We are a team who donates blood for free to save lives."
        }
       
    ]
  return (
    <div className='w-full min-h-[65vh] bg-[#AB1419] text-white p-7 whatWeDo mt-3 flex flex-col justify-center items-center'>
        <h1 className='md:text-[3.6vw] text-[8vw] leading-tight about font-["Anek Devanagari"]  mt-5 text-center font-bold'>What We Do</h1>
        <hr className='border-2 border-[#FCFCFC] w-[239px] mx-auto mb-6' />
        <div className='flex items-center justify-center flex-wrap md:gap-x-52 gap-10'>
            {data.map((item, index) => (
                <div key={index} className="flex items-center justify-center gap-4 ">
                   
                    <img src={item.src} alt="icon" className="w-12 h-12" />
                   <div>
                   <h3 className='text-[5vw] md:text-[2vw]  font-["Anek Devanagari"]'>{item.name}</h3>
                   <p className=' text-[3.5vw] w-2/3 md:text-[1.2vw] font-["Anek Devanagari"]'>{item.description}</p>
                
                    </div>
                </div>
            ))}

        </div>
    </div>
  )
}

export default WhatWeDo