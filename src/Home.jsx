import React, { useRef, useState } from 'react'
import CentreOfExcellence from './CentreOfExcellence'


function Hero(){
  return (
    <section id="home" className="hero">
      <div className="hero-background">
  <img src="/assets/images/herobg.jpg" alt="Students working with Arduino" />
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


function Categories() {
  // Triangle layout with local images as backgrounds
  return (
    <section id="categories" className="categories-triangle-section">
      <div className="categories-triangle-wrapper">
        {/* Edu Section - Top Left Triangle */}
        <div
          className="triangle-card edu-triangle"
          style={{
            backgroundImage: "url('/assets/images/edubg.jpg')",
            clipPath: 'polygon(0% 0%, 100% 0%, 0% 50%)',
          }}
        >
          <div className="triangle-content left" style={{ justifyContent: 'flex-start', paddingTop: '5.2rem', paddingBottom: '0.5rem' }}>
            <h2>Edu</h2>
            <p>Empower the next generations of students to be the disruptors of the future</p>
            <a href="#" className="triangle-btn edu" onClick={e => e.preventDefault()}>Learn More</a>
          </div>
        </div>

        {/* Maker Section - Right/Center Triangle */}
        <div
          className="triangle-card maker-triangle"
          style={{
            backgroundImage: "url('/assets/images/makerbg.jpg')",
            clipPath: 'polygon(100% 0%, 100% 100%, 0% 50%)',
          }}
        >
          <div className="triangle-content center" style={{ alignItems: 'flex-end', textAlign: 'right', justifyContent: 'center', paddingRight: '7.5rem', paddingLeft: '0', width: '100%', boxSizing: 'border-box' }}>
            <h2>Maker</h2>
            <p>Find creative solutions to everyday challenges</p>
            <a href="#" className="triangle-btn maker" onClick={e => e.preventDefault()}>Learn More</a>
          </div>
        </div>

        {/* Pro Section - Bottom Left Triangle */}
        <div
          className="triangle-card pro-triangle"
          style={{
            backgroundImage: "url('/assets/images/probg.jpg')",
            clipPath: 'polygon(0% 50%, 100% 100%, 0% 100%)',
          }}
        >
          <div className="triangle-content left bottom" style={{ justifyContent: 'flex-end', alignItems: 'flex-start', paddingBottom: '7rem', paddingTop: '0.5rem' }}>
            <h2>Pro</h2>
            <p>Enable businesses of any size to exploit the potential of AI and IoT</p>
            <a href="#" className="triangle-btn pro" onClick={e => e.preventDefault()}>Learn More</a>
          </div>
        </div>

        {/* Diagonal division lines */}
        <svg
          className="triangle-svg-lines"
          viewBox="0 0 800 300"
          preserveAspectRatio="none"
        >
          <line x1="0" y1="150" x2="800" y2="0" stroke="rgba(156, 163, 175, 0.4)" strokeWidth="2" />
          <line x1="0" y1="150" x2="800" y2="300" stroke="rgba(156, 163, 175, 0.4)" strokeWidth="2" />
        </svg>
      </div>
    </section>
  );
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
