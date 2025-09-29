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

function Future() {
  // Adapted from ContentSection (Figma style)
  return (
    <section id="future" className="future">
      <div className="container">
        <div className="future-content-grid">
          {/* Content */}
          <div className="future-text-block future-centered">
            <h2 className="future-heading">
              Shaping the Future:
              <span className="gradient-text">Inker Robotics &amp; Arduino</span>
            </h2>
            <div className="future-points-grid">
              <div className="future-point">
                <div className="future-point-icon teal"></div>
                <div>
                  <h4>Interactive Learning</h4>
                  <p>Hands-on projects that make technology accessible</p>
                </div>
              </div>
              <div className="future-point">
                <div className="future-point-icon orange"></div>
                <div>
                  <h4>Real-World Applications</h4>
                  <p>Connect classroom learning to industry needs</p>
                </div>
              </div>
              <div className="future-point">
                <div className="future-point-icon blue"></div>
                <div>
                  <h4>Creative Problem Solving</h4>
                  <p>Foster innovation through collaborative projects</p>
                </div>
              </div>
              <div className="future-point">
                <div className="future-point-icon purple"></div>
                <div>
                  <h4>Future-Ready Skills</h4>
                  <p>Prepare students for tomorrow's challenges</p>
                </div>
              </div>
            </div>
            <div className="future-desc">
              <p>
                Through our official partnership with Arduino, we're revolutionizing STEM education by combining cutting-edge robotics with accessible, hands-on learning experiences.
              </p>
            </div>
            <div className="future-cta">
              <button className="future-btn">Explore Our Programs</button>
            </div>
          </div>
          {/* Image */}
          <div className="future-image-block">
              <div className="future-image-card">
                <img src="/assets/images/futureimg.jpg" alt="Arduino circuit board and electronics" className="future-img-main" />
              </div>
            {/* Decorative background circles */}
            <div className="future-bg-circle teal"></div>
            <div className="future-bg-circle orange"></div>
            <div className="future-bg-circle blue"></div>
          </div>
        </div>
      </div>
    </section>
  );
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
