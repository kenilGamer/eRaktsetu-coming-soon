import React from 'react'
import Homepage from './Pages/Homepage'
import AboutUs from './Pages/AboutUs'
import UesrFlow from './partials/UesrFlow'
import Upcoming from './Pages/Upcoming'
import WhatWeDo from './Pages/WhatWeDo'
import OurWork from './Pages/OurWork'

function App() {
  return (
    <>
    <div className="w-full h-full bg-[#FCFCFC] md:container md:mx-auto">
      <Homepage/>
      <UesrFlow/>
      <AboutUs/>
      <Upcoming/>
    </div>
      <WhatWeDo/>
      <div className="w-full h-full bg-[#FCFCFC] md: md:mx-auto">
        <OurWork/>
      </div>
    </>
  )
}

export default App