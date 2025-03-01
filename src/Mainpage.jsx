import React, { useEffect, useRef } from 'react'
import Homepage from './Pages/Homepage'
import AboutUs from './Pages/AboutUs'
import UesrFlow from './partials/UesrFlow'
import Upcoming from './Pages/Upcoming'
import WhatWeDo from './Pages/WhatWeDo'
import OurWork from './Pages/OurWork'
import WhyItMatters from './Pages/WhyItMatters'
import FQA from './Pages/FQA'
import Footer from './Pages/Footer'
import HowToJoinUs from './Pages/HowToJoinUs'
import ImageSlider from './Pages/ImageSlider';
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function Mainpage() {
    const scrollRef = useRef(null);
  
    useEffect(() => {
      // Initialize Locomotive Scroll
      const locoScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true, 
      });
  
      // Cleanup on unmount to avoid memory leaks
      return () => {
        if (locoScroll) locoScroll.destroy();
      };
    }, [])
  return (
    <div data-scroll-container ref={scrollRef}>
      <div className="w-full  bg-[#FCFCFC] md:container md:mx-auto">
        <Homepage />
        <UesrFlow />
        <AboutUs />
        <Upcoming />
      </div>
      <WhatWeDo />
      <div className="w-full  bg-[#FCFCFC] md: md:mx-auto">
        <OurWork/>
        <WhyItMatters/>
        <FQA/>
      </div>
      <div className="w-full mt-20 bg-[#FCFCFC] md:mx-auto">
        <HowToJoinUs />
        <ImageSlider />
      </div>
      <Footer/>
    </div>
  );
}

export default Mainpage;
