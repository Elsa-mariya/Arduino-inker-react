import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  // Burger menu logic for mobile
  useEffect(() => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    function onClick(){ nav && nav.classList.toggle('nav-active'); burger && burger.classList.toggle('toggle') }
    burger && burger.addEventListener('click', onClick)
    return () => { burger && burger.removeEventListener('click', onClick) }
  }, [])
  // navigation now handled by react-router-dom <Link>

  return (
    <header>
      <nav>
        <div className="logo">
          <img src="/assets/images/inker-robotic-logo-AE07pqkqPgtK53RQ.webp" alt="Inker Robotics Logo" />
          <img src="/assets/images/arduino_logo.svg-m7VDpjzqJNhkDPEW.png" alt="Arduino Logo" className="arduino-logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/coe">Centre of Excellence</Link></li>
          <li><a href="#edu">Edu</a></li>
          <li><a href="#industrial">Industrial</a></li>
        </ul>
        <div className="burger"><div className="line1"/><div className="line2"/><div className="line3"/></div>
      </nav>
    </header>
  )
}

export default Header
