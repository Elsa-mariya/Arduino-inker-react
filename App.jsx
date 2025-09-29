import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CentreOfExcellence from './src/CentreOfExcellence'
import Header from './src/Header'
import Footer from './src/Footer'
import Home from './src/Home'

// Home page styles
import '/styles/home.css'

export default function App(){
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coe" element={<CentreOfExcellence onBack={() => window.history.back()} />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

