import React, { useState } from 'react'
import CentreOfExcellence from './src/CentreOfExcellence'
import Header from './src/Header'
import Footer from './src/Footer'
import Home from './src/Home'

// Home page styles
import '/styles/home.css'


export default function App(){
  const [showCOE, setShowCOE] = useState(false)

  if (showCOE) {
    return <CentreOfExcellence onBack={() => setShowCOE(false)} />
  }

  return (
    <>
      <Header onCOEClick={() => setShowCOE(true)} onHomeClick={() => setShowCOE(false)} />
      <Home />
      <Footer />
    </>
  )
}

