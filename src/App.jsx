import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import WebsiteNavbar from './components/WebsiteNavbar'
import Home from './components/pages/home'
import About from './components/pages/About'
import Quotes from './components/pages/Quotes'
import QuoteOTM from './components/pages/QuoteOTM'
import Login from './components/pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <WebsiteNavbar />
      <Routes>
        <Route path="/p178" element={<Home />} />
        <Route path="/p178/about" element={<About />} />
        <Route path="/p178/quotes" element={<Quotes />} />
        <Route path="/p178/QuoteOTM" element={<QuoteOTM />} />
        <Route path="/p178/login" element={<Login />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
