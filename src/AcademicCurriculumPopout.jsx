import React from 'react'

function AcademicCurriculumPopout({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="hardware-popout-overlay">
      <div className="hardware-popout curriculum-popout">
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="curriculum-content">
          <h2>Academic Curriculum – Center of Excellence</h2>
          <p className="curriculum-intro">
            From Pre-School to College, our hands-on robotics and coding curriculum grows with the learner:
          </p>
          
          <div className="age-groups">
            {/* Pre-School to Primary */}
            <div className="age-group">
              <h3>🎈 Pre-School to Primary (Ages 4–10)</h3>
              <div className="focus-section">
                <p><strong>Focus:</strong> Spark curiosity through play & exploration</p>
                <p><strong>Skills:</strong> Basic logic, simple circuits, early sensor interaction</p>
              </div>
              <div className="tools-section">
                <h4>Tools & Kits:</h4>
                <ul>
                  <li><strong>Inker Plug & Play Kits</strong> – Safe, modular components perfect for tiny hands</li>
                  <li><strong>Arduino Education Starter Kit</strong> – Gentle intro to electronics with story-based learning</li>
                  <li><strong>Seeed Grove Beginner Kit</strong> – Snap-together sensors for fun experiments</li>
                  <li><strong>Block-based coding tools</strong> (e.g. Scratch, Tinker) – Code like playing a game!</li>
                </ul>
              </div>
            </div>

            {/* Middle to High School */}
            <div className="age-group">
              <h3>🚀 Middle to High School (Ages 11–17)</h3>
              <div className="focus-section">
                <p><strong>Focus:</strong> Dive into real-world tech with hands-on building</p>
                <p><strong>Skills:</strong> Programming, circuits, microcontrollers, IoT basics</p>
              </div>
              <div className="tools-section">
                <h4>Tools & Kits:</h4>
                <ul>
                  <li><strong>Arduino Starter Kit</strong> – Code, wire, and bring projects to life</li>
                  <li><strong>Arduino Sensor Kit</strong> – Explore temperature, light, distance & more</li>
                  <li><strong>Inker RoboBox</strong> – Ready-to-use projects like line-followers & smart homes</li>
                  <li><strong>Grove Sensor Expansion Kit</strong> – Add variety with plug-in sensor modules</li>
                </ul>
              </div>
            </div>

            {/* College / Engineering */}
            <div className="age-group">
              <h3>🎓 College / Engineering (Ages 18+)</h3>
              <div className="focus-section">
                <p><strong>Focus:</strong> Build intelligent systems & prototypes for the real world</p>
                <p><strong>Skills:</strong> Embedded systems, automation, wireless communication, edge AI</p>
              </div>
              <div className="tools-section">
                <h4>Tools & Kits:</h4>
                <ul>
                  <li><strong>🛠️ Arduino Engineering Kit R2</strong> – Projects with real motors, sensors & MATLAB integration</li>
                  <li><strong>Inker AI & Automation Kits</strong> – Ideal for capstone projects, industrial simulations</li>
                  <li><strong>Advanced Sensor Sets</strong> – Work with precision, wireless & industrial-grade sensors</li>
                  <li><strong>Raspberry Pi / Edge AI modules</strong> – For advanced vision & AI integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AcademicCurriculumPopout
