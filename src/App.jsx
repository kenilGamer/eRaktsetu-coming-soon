import React from 'react'
import Homepage from './Pages/Homepage'
import AboutUs from './Pages/AboutUs'
import UesrFlow from './partials/UesrFlow'

function App() {
  return (
    <div className="w-full h-full bg-[#FCFCFC] container mx-auto">
      <Homepage/>
      <UesrFlow/>
      <AboutUs/>
    </div>
  )
}

export default App