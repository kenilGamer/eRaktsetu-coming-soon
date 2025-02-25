import React from 'react'
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

function App() {
  return (
    <>
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
      </div>
      <Footer/>
    </>
  );
}

export default App;
