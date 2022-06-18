import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


//Pages
import Homepage from './pages/homepage/homepage.component'

import './App.css'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route exact='true' path='*' element={<Homepage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
