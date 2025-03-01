import React from "react";

function Upcoming() {
  const data = [
    {
      name: "Feature 1",
      desc: "We donate blood to save lives with their new hopes ",
    },
    {
      name: "Feature 1",
      desc: "We donate blood to save lives with their new hopes ",
    },
    {
      name: "Feature 1",
      desc: "We donate blood to save lives with their new hopes ",
    },
    {
      name: "Feature 1",
      desc: "We donate blood to save lives with their new hopes ",
    },
    {
      name: "Feature 1",
      desc: "We donate blood to save lives with their new hopes ",
    },
    {
      name: "Feature 1",
      desc: "We donate blood to save lives with their new hopes ",
    },
  ];
  return (
    <>
      <div className="upcoming w-full min-h-screen relative p-2 select-none">
        <div className="w-52 h-52 bg-[#AB1419] rounded-full redcircle absolute  top-1/2 left-0"></div>
        <h1 className='md:text-[4vw] text-[10vw] uppercase font-["Anek Devanagari"] font-bold mt-5 text-center'>
          Upcoming{" "}
          <span className="text-[#AB1419] font-semibold">Features</span>
        </h1>
        <hr className="border-2 border-[#AB1419] md:w-[40vw] w-[40vw] rounded-full mx-auto mb-6 " />
        <div className="flex items-center justify-center flex-wrap md:gap-x-20 gap-10 ">
          {data.map((item, index) => (
            <div
              key={index}
              className=" flex items-center justify-center text-center gap-2 relative"
            >
              <img
                src="/imgs/Group108.svg"
                className="max-md:w-[100vw] upcomingimg"
                alt=""
              />
              <div className="flex flex-col gap-2  absolute text-center mt-6 ">
                <h2 className="md:text-[2vw] text-[7vw] font-semibold">
                  {item.name}
                </h2>
                <hr className="border-2 rounded-full border-[#AB1419] w-[30%] mx-auto  " />
                <p className='md:text-[1.5vw] text-[6vw] font-["Anek Devanagari"]'>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-6">
        <button className=" text-center px-8 py-2 bg-[#AB1419] text-white rounded-xl ">view All</button>

        </div>
      </div>
    </>
  );
}

export default Upcoming;
