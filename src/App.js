import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Statics/Navbar'
import Footer from "./Components/Statics/Footer";

import Campionato from './Components/Pages/Campionato'
import Roster from './Components/Pages/Roster'
import Store from './Components/Pages/Store'
import About from './Components/Pages/About'
import Sponsor from './Components/Pages/Sponsor'
import Contacts from './Components/Pages/Contacts'
import Home from "./Components/Pages/Home";

import PrivacyPolicy from "./Components/Legals/PrivacyPolicy";
import CookiePolicy from "./Components/Legals/CookiePolicy";
import Termini from "./Components/Legals/Termini";

import CookieBanner from "./Components/Legals/CookieBanner";

import './App.css'

function Placeholder({title}){
  return (
    <main className='site-inner'>
      <h1>{title}</h1>
      <p>This page is under construction.</p>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      {/* Sfondo fisso dietro tutto */}
      <div id="bg-fixed"></div>

      {/* Contenitore principale dell'app */}
      <div className="app-wrapper">
        <Navbar />
        <main className="page-container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/campionato' element={Campionato ? <Campionato /> : <Placeholder title="Campionato" />} />
            <Route path="/roster" element={Roster ? <Roster /> : <Placeholder title="Roster" />} />
            <Route path="/store" element={Store ? <Store /> : <Placeholder title="Store" />} />
            <Route path="/about" element={About ? <About /> : <Placeholder title="About" />} />
            <Route path="/sponsor" element={Sponsor ? <Sponsor /> : <Placeholder title="Sponsor" />} />
            <Route path="/contacts" element={Contacts ? <Contacts /> : <Placeholder title="Contacts" />} />
            <Route path='*' element={<Placeholder title='Page not found' />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/termini-e-condizioni" element={<Termini />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner /> {/* 👈 banner visibile solo finché non viene accettato */}
      </div>
    </BrowserRouter>
  );
}

export default App
