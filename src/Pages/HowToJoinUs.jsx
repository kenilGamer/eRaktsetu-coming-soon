import { useCallback, useEffect, useState } from "react";

const HowToJoinUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 906);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);
  return isMobile === false ? (
    <div className="w-full min-h-full px-10 mb-32">
      <h1 className='text-[3.3vw] uppercase font-["Anek Devanagari"] text-center font-semibold'>
        How to <span className="text-[#AB1419]">Join US&nbsp;?</span>
      </h1>
      <hr className="border-2 border-[#ab1419] w-[15vw] rounded-full mx-auto mb-6" />
      <div className="mt-24 bg-[#AB1419] w-full h-32 max-h-32 rounded-2xl flex justify-between px-3 md:px-0 md:pr-5">
        <img
          src="/imgs/how-to-join-us.png"
          alt=""
          height={"100%"}
          className="object-cover scale-[1.5]"
        />
        <div className="flex h-full items-center gap-3 md:gap-10 justify-end">
          <h2 className="text-white text-3xl font-semibold">
            Connect us by the Email
          </h2>
          <button className="bg-white px-5 py-1 md:px-10 md:py-3 rounded-md font-semibold">
            Email
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full h-screen px-4">
      <h1 className='text-[8vw] uppercase font-["Anek Devanagari"] text-center font-semibold'>
        How to <span className="text-[#AB1419]">Join US&nbsp;?</span>
      </h1>
      <hr className="border-2 border-[#ab1419] w-[50vw] rounded-full mx-auto mb-6" />
      <div className="bg-[#AB1419] w-full h-16 max-h-16 rounded-2xl flex justify-between ">
        <img
          src="/imgs/how-to-join-us.png"
          alt=""
          height={"100%"}
          className="object-cover scale-[1.2]"
        />
        <div className="flex h-full items-center gap-2 justify-end px-2">
          <h2 className="text-white text-md font-semibold">
            Connect us by the Email
          </h2>
          <button className="bg-white px-5 py-1 rounded-md font-semibold text-md">
            Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowToJoinUs;
