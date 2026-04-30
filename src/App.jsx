import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import WebsiteNavbar from './components/WebsiteNavbar'
import Home from './components/pages/home'
import About from './components/pages/About'
import Quotes from './components/pages/Quotes'
import QuoteOTM from './components/pages/QuoteOTM'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Footer from './components/Footer'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <HashRouter>
      <WebsiteNavbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setShowLogin={setShowLogin}
        setShowRegister={setShowRegister}
      />

      <main className="page-content">
        <Routes>
          <Route path="/p178" element={<Home />} />
          <Route path="/p178/about" element={<About />} />
          <Route path="/p178/quotes" element={<Quotes />} />
          <Route path="/p178/QuoteOTM" element={<QuoteOTM />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />

      <Login
        show={showLogin}
        handleClose={() => setShowLogin(false)}
        setIsLoggedIn={setIsLoggedIn}
      />

      <Register
        show={showRegister}
        handleClose={() => setShowRegister(false)}
        setIsLoggedIn={setIsLoggedIn}
      />
    </HashRouter>
  )
}

export default App