import React from 'react'

import Mainpage from './Mainpage'
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      {/* <Route path="*" element={<NotFound />} /> */}
      {/* Add more routes here */}
    </Routes>
  );
}

export default App;
