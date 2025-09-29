import React, { useEffect, useRef, useState } from 'react'
import CentreOfExcellence from './src/CentreOfExcellence'
import Header from './src/Header'
import Footer from './src/Footer'

function useHoverPopout() {
  const panelRef = useRef(null)
  const [panelState, setPanelState] = useState({ open: false, img: '', side: 'right', rect: null, multiplier: 1 })
  const closeTimer = useRef(null)

  useEffect(() => {
    function onKey(e){ if (e.key === 'Escape') hide() }
    function onClick(e){
      if (!panelRef.current) return
      if (panelRef.current.style.display !== 'none' && !panelRef.current.contains(e.target) && !e.target.closest('.category-card')) hide()
    }
    function onScroll(){ position() }
    function onResize(){ position() }
    window.addEventListener('keydown', onKey)
    document.addEventListener('click', onClick)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('click', onClick)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  // Position panel when state changes
  useEffect(() => {
    if (panelState.open) {
      position()
    }
  }, [panelState])

  function show(cardEl, img, side = 'right', multiplier = 1) {
    console.log('=== SHOW FUNCTION CALLED ===')
    console.log('cardEl:', cardEl)
    console.log('img:', img)
    console.log('side:', side)
    console.log('multiplier:', multiplier)
    
    if (!cardEl) {
      console.log('ERROR: cardEl is null, returning')
      return
    }
    
    const rect = cardEl.getBoundingClientRect()
    console.log('Card getBoundingClientRect():', rect)
    console.log('Card position - left:', rect.left, 'top:', rect.top, 'width:', rect.width, 'height:', rect.height)
    
    setPanelState({ open: true, img, side, rect, multiplier })
    console.log('Panel state set to:', { open: true, img, side, rect, multiplier })
  }
  function scheduleHide(delay = 800) {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => hide(), delay)
  }
  function cancelHide(){ if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null } }
  function hide(){ setPanelState(s => ({ ...s, open: false })) }

  function position(){
    console.log('=== POSITION FUNCTION CALLED ===')
    const el = panelRef.current
    console.log('Panel element:', el)
    console.log('Panel state:', panelState)
    
    if (!el || !panelState.open || !panelState.rect) {
      console.log('Position early return - el exists:', !!el, 'panel open:', panelState.open, 'rect exists:', !!panelState.rect)
      return
    }
    
    const rect = panelState.rect
    const gap = 8
    const sx = window.scrollX || window.pageXOffset
    const sy = window.scrollY || window.pageYOffset
    console.log('Scroll position - X:', sx, 'Y:', sy)
    console.log('Window dimensions - width:', window.innerWidth, 'height:', window.innerHeight)
    
    const maxW = Math.max(200, window.innerWidth - (gap * 2))
    const panelW = Math.min(Math.round(rect.width * (panelState.multiplier || 1)), maxW)
    const panelH = Math.round(rect.height)
    let side = panelState.side || 'right'
    let left, top
    
    console.log('Calculated panel dimensions - width:', panelW, 'height:', panelH)
    console.log('Positioning side:', side)
    
    if (side === 'above') {
      // Position above the button, centered horizontally
      left = rect.left + (rect.width / 2) - (panelW / 2) + sx
      top = rect.top - panelH - gap + sy
      
      // Keep panel within horizontal viewport bounds
      if (left < sx + gap) {
        left = sx + gap
      } else if (left + panelW > sx + window.innerWidth - gap) {
        left = sx + window.innerWidth - panelW - gap
      }
      
      // If there's not enough space above, position below instead
      if (top < sy + gap) {
        top = rect.bottom + gap + sy
      }
    } else if (side === 'overlay') {
      // Position within the section, relative to the categories container
      const categoriesSection = document.getElementById('categories')
      const sectionRect = categoriesSection ? categoriesSection.getBoundingClientRect() : { left: 0, top: 0 }
      
      // Position relative to the section, not the viewport
      left = rect.left - sectionRect.left + sx
      top = rect.top - sectionRect.top + sy
      
      console.log('OVERLAY POSITIONING (within section):')
      console.log('Section rect:', sectionRect)
      console.log('Card rect relative to section - left:', rect.left - sectionRect.left, 'top:', rect.top - sectionRect.top)
      console.log('Final overlay position - left:', left, 'top:', top)
      console.log('Using card dimensions - width:', rect.width, 'height:', rect.height)
      
      // Use the card's exact dimensions and position within section
      Object.assign(el.style, { 
        display: 'block', 
        position: 'absolute',
        left: left + 'px', 
        top: top + 'px', 
        width: rect.width + 'px', 
        height: rect.height + 'px' 
      })
      
      console.log('Panel styled with section-relative positioning')
      console.log('Panel element style after positioning:', {
        position: el.style.position,
        left: el.style.left,
        top: el.style.top,
        width: el.style.width,
        height: el.style.height,
        display: el.style.display
      })
      
      // trigger animation and return early to skip the default styling below
      el.classList.remove('open')
      void el.offsetWidth
      el.classList.add('open')
      console.log('Section overlay animation triggered')
      return
    } else {
      // Original left/right positioning logic
      left = side === 'left' ? (rect.left - gap - panelW + sx) : (rect.right + gap + sx)
      top = rect.top + sy
      
      // Ensure panel stays within viewport
      if (side === 'right' && left + panelW > sx + window.innerWidth) { 
        side = 'left'; 
        left = rect.left - gap - panelW + sx 
      }
      if (side === 'left' && left < sx) { 
        side = 'right'; 
        left = rect.right + gap + sx 
      }
      
      // Keep panel within vertical viewport bounds
      const maxTop = sy + window.innerHeight - panelH - gap
      const minTop = sy + gap
      if (top + panelH > sy + window.innerHeight) { 
        top = Math.max(maxTop, minTop)
      }
      if (top < minTop) {
        top = minTop
      }
    }
    
    console.log('FINAL POSITIONING (non-overlay):')
    console.log('Final position - left:', left, 'top:', top)
    console.log('Final dimensions - width:', panelW, 'height:', panelH)
    
    Object.assign(el.style, { 
      display: 'block', 
      left: left + 'px', 
      top: top + 'px', 
      width: panelW + 'px', 
      height: panelH + 'px' 
    })
    
    console.log('Panel element style after positioning:', {
      left: el.style.left,
      top: el.style.top,
      width: el.style.width,
      height: el.style.height,
      display: el.style.display
    })
    
    // trigger animation
    el.classList.remove('open')
    void el.offsetWidth
    el.classList.add('open')
    console.log('Animation triggered for', side, 'positioning')
  }

  return { panelRef, panelState, show, scheduleHide, cancelHide, hide }
}


function Hero(){
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <img src="/assets/images/photo-1687179185565-6c46a72b4963" alt="Students working with Arduino" />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content-overlay">
        <h1>Official Edu-Partner of Arduino</h1>
        <p>Beyond Learning, Into Innovation</p>
      </div>
    </section>
  )
}

function Partners(){
  return (
    <section id="partners" className="partners">
      <div className="container">
        <div className="partners-grid">
          <div className="partner-card">
            <img src="/assets/images/arduino_logo.svg-m7VDpjzqJNhkDPEW.png" alt="Arduino Logo" />
            <p>Inker Robotics confidently leads the charge with groundbreaking advancements and globally validated tools, seamlessly bridging international standards with local opportunities to empower the future of robotics and IoT innovation.</p>
            <div className="stats-grid">
              <div className="stat-item"><h3>1M+</h3><p>Arduino Uno Boards sold</p></div>
              <div className="stat-item"><h3>6.5K+</h3><p>Official Libraries</p></div>
              <div className="stat-item"><h3>5M+</h3><p>Active Community Members Worldwide</p></div>
              <div className="stat-item"><h3>5.3K+</h3><p>Open-Source Contributions</p></div>
            </div>
          </div>
          <div className="partner-card">
            <img src="/assets/images/inker-robotic-logo-AE07pqkqPgtK53RQ.webp" alt="Inker Robotics Logo" />
            <p>Inker Robotics confidently leads the charge with groundbreaking advancements and globally validated tools, seamlessly bridging international standards with local opportunities to empower the future of robotics and IoT innovation.</p>
            <div className="stats-grid">
              <div className="stat-item"><h3>250K+</h3><p>Knowledge Transferred</p></div>
              <div className="stat-item"><h3>1K+</h3><p>Programs Conducted</p></div>
              <div className="stat-item"><h3>500+</h3><p>Robotic Exhibition & Events</p></div>
              <div className="stat-item"><h3>400+</h3><p>Schools & Colleges Visit</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Future(){
  return (
    <section id="future" className="future">
      <div className="container">
        <div className="future-content">
          <div className="future-text">
            <h2>Shaping the Future:<br/>Inker & Arduino</h2>
            <ul>
              <li>Arduino's global hardware & software + Inker's hands-on robotics expertise.</li>
              <li>Accessible, engaging, and scalable STEAM education.</li>
              <li>Faster prototyping and real-world learning.</li>
              <li>Strong support systems for students & educators.</li>
              <li>Empowering the next generation of innovators.</li>
            </ul>
          </div>
          <div className="future-image">
            <img src="/assets/images/photo-1584443348278-4789e86c7373" alt="Arduino Board" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Categories(){
  const eduRef = useRef(null)
  const makerRef = useRef(null)
  const proRef = useRef(null)
  const [makerToggle, setMakerToggle] = useState(false)
  const [eduBgImage, setEduBgImage] = useState('/assets/images/photo-1564747378409-c4542bde27c1')
  const [showEduPopout, setShowEduPopout] = useState(false)

  const { panelRef, panelState, show, scheduleHide, cancelHide } = useHoverPopout()

  return (
    <section id="categories" className="categories">
      <div className="container">
        <div className="categories-grid">
          <div className="category-card edu-card" ref={eduRef}>
            <img src={eduBgImage} alt="Education" />
            <div className="card-overlay">
              <h3>Edu</h3>
              <p>Empower the next generations of students to be the disruptors of the future</p>
              <a 
                href="#" 
                role="button" 
                className="btn"
                onClick={(e) => {
                  e.preventDefault()
                  setShowEduPopout(!showEduPopout)
                }}
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="category-card maker-card" ref={makerRef}
               onMouseEnter={() => show(makerRef.current, '/assets/images/w6.1.PNG', 'right', 1)}
               onMouseLeave={() => scheduleHide()}>
            <img src="/assets/images/maker-mxB2rzy7NVIVpRGx.jpg" alt="Maker" />
            <div className="card-overlay">
              <h3>Maker</h3>
              <p>Find creative solutions to everyday challenges</p>
              <a 
                href="#" 
                role="button" 
                className="btn" 
                onClick={(e) => {
                  e.preventDefault()
                  const nextToggle = !makerToggle
                  setMakerToggle(nextToggle)
                  const img = nextToggle ? '/assets/images/w6.2.PNG' : '/assets/images/w6.1.PNG'
                  const side = nextToggle ? 'right' : 'left'
                  show(makerRef.current, img, side, 2)
                }}
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="category-card pro-card" ref={proRef}
               onMouseEnter={() => show(proRef.current, '/assets/images/w7.PNG', 'left', 1)}
               onMouseLeave={() => scheduleHide()}>
            <img src="/assets/images/photo-1671726805768-93b4c260766b" alt="Professional" />
            <div className="card-overlay">
              <h3>Pro</h3>
              <p>Enable businesses of any size to exploit the potential of AI and IoT</p>
              <a 
                href="#" 
                role="button" 
                className="btn" 
                onClick={(e) => {
                  e.preventDefault()
                  show(proRef.current, '/assets/images/w7.PNG', 'left', 2)
                }}
              >
                Learn More
              </a>
            </div>
          </div>
          
          {/* Edu Popout Card - overlays maker and pro cards */}
          {showEduPopout && (
            <div className="category-card edu-popout-card overlay-maker-pro">
              <img src="/assets/images/w5.PNG" alt="Edu Details" />
              <div className="card-overlay">
                <a 
                  href="#" 
                  role="button" 
                  className="btn close-btn"
                  onClick={(e) => {
                    e.preventDefault()
                    setShowEduPopout(false)
                  }}
                >
                  Close
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Popout Panel for other cards */}
      <div id="card-popout" className={`popout-panel ${panelState.open ? 'open' : ''}`} ref={panelRef}
           onMouseEnter={cancelHide} onMouseLeave={()=>scheduleHide()} 
           onClick={() => panelState.side === 'overlay' && scheduleHide(100)}
           style={{ display: panelState.open ? 'block' : 'none' }}>
        <img src={panelState.img} alt="Details" />
      </div>
    </section>
  )
}


export default function App(){
  const [showCOE, setShowCOE] = useState(false)

  if (showCOE) {
    return <CentreOfExcellence onBack={() => setShowCOE(false)} />
  }

    return (
        <>
            <Header onCOEClick={() => setShowCOE(true)} onHomeClick={() => setShowCOE(false)} />
            <Hero />
            <Partners />
            <Footer />
        </>
    )
}

