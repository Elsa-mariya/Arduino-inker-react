import React from 'react'

function HardwarePopout({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="hardware-popout-overlay">
      <div className="hardware-popout">
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="hardware-content">
          <div className="hardware-image">
            <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Arduino Hardware Kit" />
            <img src="/assets/images/hardware.jpg" alt="Hardware Components" className="additional-image" />
          </div>
          
          <div className="hardware-text">
            <h2>Hardware Excellence</h2>
            <p>
              The CoE is equipped with state-of-the-art Arduino kits and accessories that support a 
              wide spectrum of learning, from basic electronics to advanced IoT, PLC, and edge-AI applications.
            </p>
            
            <ul className="hardware-list">
              <li><strong>Modular hardware kits</strong> (e.g., Arduino Uno R4, Nano BLE Sense, Portenta, Nicla Vision).</li>
              <li><strong>Robotics and automation tools</strong> (e.g., Alvik Robot, TinkerKit Braccio Arm).</li>
              <li><strong>IoT and sensor-based kits</strong> (e.g., Explore IoT Kit Rev2, Arduino Sensor Kit Base).</li>
              <li><strong>Industrial and prototyping components</strong> (e.g., PLC Starter Kit, Opta Wi-Fi, Edge Control).</li>
            </ul>
            
            <p className="hardware-conclusion">
              This curated hardware stack ensures that students can build real-world solutions 
              spanning multiple domains—automation, robotics, AI, and embedded systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HardwarePopout
