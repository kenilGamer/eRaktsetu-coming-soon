import React from "react";

function WhyItMatters() {
  const data = [
    { numebr2: "2.7M+", subtitle: "donations" },
    { numebr2: "15M+", subtitle: "Lives Impacted" },
    { numebr2: "3000+", subtitle: "Verified NGO’s" },
    { numebr2: "300+", subtitle: "Corporate Partners" },
  ];
  return (
    <div className="w-full p-10">
      <h1 className='md:text-[3.3vw] text-[10vw] uppercase font-["Anek Devanagari"] text-center'>
        Why It Matters
      </h1>
      <hr className="border-2 border-[#AB1419] md:w-[20vw] w-[50vw] rounded-full mx-auto mb-6" />
      <div className="w-full h-full flex items-center rounded-[30px] flex-col bg-[#AB1419] text-white">
        <h1 className='md:text-[3.3vw] text-[6vw]  font-["Anek Devanagari"] leading-[1.3] text-center '>
          Most trusted <br />
          Online Donation Platform
        </h1>
        <hr className="border-2 border-white w-[32vw]  rounded-full mx-auto mb-6 " />
        <div className="w-full flex flex-wrap items-center justify-center gap-x-32 gap-y-6 p-10">
          {data.map((item, index) => (
            <div key={index}>
                <h1 className='md:text-[2.5vw] text-[5vw] font-["Anek Devanagari"] text-center'>{item.numebr2}</h1>
                <p className="text-center">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyItMatters;
