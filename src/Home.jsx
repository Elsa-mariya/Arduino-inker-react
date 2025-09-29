import React, { useRef, useState } from 'react'
import CentreOfExcellence from './CentreOfExcellence'


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
            <p>Arduino empowers innovation in electronics, robotics, and IoT by providing open-source, easy-to-use hardware and software. From simple sensors to connected devices, Arduino transforms ideas into action, enabling creators worldwide to build everything from everyday gadgets to advanced scientific instruments.</p>
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
  const wrapperRef = useRef(null)
  const imgRef = useRef(null)
  const [imgRatio, setImgRatio] = useState(null)

  function onImgLoad(e){
    const img = e.target
    if (!img || !wrapperRef.current) return
    const w = img.naturalWidth || img.width
    const h = img.naturalHeight || img.height
    if (w && h) {
      const ratio = `${w} / ${h}`
      setImgRatio(ratio)
    }
  }

  return (
    <section id="future" className="future">
      <div className="container">
        <div className="future-content">
          <div className="future-text">
            <div>
              <h2 className="future-heading">
                Shaping the Future:
                <br />
                <span className="gradient-text">Inker Robotics & Arduino</span>
              </h2>
              <div className="accent-bar" aria-hidden="true"></div>
            </div>

            <div className="future-paragraphs">
              <p>
                Through our official partnership with Arduino, we're revolutionizing
                STEM education by combining cutting-edge hardware with innovative
                educational methodologies.
              </p>

              <p>
                Our collaborative approach empowers educators with comprehensive
                resources, curriculum guides, and hands-on learning experiences
                that make technology education accessible and engaging.
              </p>

              <p>
                Together, we're building the next generation of innovators,
                engineers, and creative problem-solvers who will shape our
                technological future.
              </p>
            </div>

            {/* CTA removed - descriptions should flow directly beneath */}
          </div>

          <div className="future-image">
            <div className="image-deck">
              <div className="image-deck-bg"></div>
                <div className="card-wrapper" ref={wrapperRef} style={imgRatio ? { aspectRatio: imgRatio } : undefined}>
                  <img ref={imgRef} onLoad={onImgLoad} src="/assets/images/futureimg.jpg" alt="Arduino Board" className="card-image" />
                </div>
            </div>
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
  const [eduBgImage, setEduBgImage] = useState('/assets/images/edubg.jpg')
  // Popouts removed for Edu, Maker and Pro cards per request

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
                onClick={(e) => { e.preventDefault() }}
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="category-card maker-card" ref={makerRef}>
            <img src="/assets/images/makerbg.jpg" alt="Maker" />
            <div className="card-overlay">
              <h3>Maker</h3>
              <p>Find creative solutions to everyday challenges</p>
              <a 
                href="#" 
                role="button" 
                className="btn" 
                onClick={(e) => {
                  e.preventDefault()
                  // keep the toggle state for any internal UI change, but do not open popouts
                  setMakerToggle(prev => !prev)
                }}
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="category-card pro-card" ref={proRef}
               >
            <img src="/assets/images/probg.jpg" alt="Professional" />
            <div className="card-overlay">
              <h3>Pro</h3>
              <p>Enable businesses of any size to exploit the potential of AI and IoT</p>
              <a 
                href="#" 
                role="button" 
                className="btn" 
                onClick={(e) => {
                  e.preventDefault()
                  // popout removed - no action
                }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* popouts removed for categories */}
    </section>
  )
}

export default function Home(){
  return (
    <>
      <Hero />
      <Partners />
      <Future />
      <Categories />
    </>
  )
}
