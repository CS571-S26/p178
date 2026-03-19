import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import WebsiteNavbar from './components/WebsiteNavbar'
import Home from './components/pages/home'
import About from './components/pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <WebsiteNavbar />
      <Routes>
        <Route path="/p178" element={<Home />} />
        <Route path="/p178/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
