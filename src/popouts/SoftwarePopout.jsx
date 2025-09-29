import React from 'react'

function SoftwarePopout({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="hardware-popout-overlay">
      <div className="hardware-popout">
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="hardware-content">
          <div className="hardware-image">
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Arduino Software Development" />
            <img src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Arduino IDE Interface" />
          </div>
          
          <div className="hardware-text">
            <h2>Software Excellence</h2>
            <p>
              The CoE integrates the Arduino software stack with modern development tools:
            </p>
            
            <ul className="hardware-list">
              <li><strong>Arduino IDE & Arduino Cloud</strong> for programming and remote project management.</li>
              <li><strong>MicroPython and C++ libraries</strong> for advanced customisation.</li>
              <li><strong>Secure IoT device management</strong> via Arduino Cloud for real-time monitoring and analytics.</li>
              <li><strong>Access to online simulation and testing environments</strong> for prototyping without hardware constraints.</li>
            </ul>
            
            <p className="hardware-conclusion">
              This software backbone enables rapid design-to-deployment workflows aligned with 
              industry standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SoftwarePopout
