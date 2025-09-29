import React from 'react'

function CertificationsPopout({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="hardware-popout-overlay">
      <div className="hardware-popout">
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="hardware-content">
          <div className="hardware-image">
            <img src="/assets/images/sample certificate arduino 1.jpg" alt="Arduino Certificate Sample 1" />
            <img src="/assets/images/sample certficate arduino 2.png" alt="Arduino Certificate Sample 2" />
          </div>
          
          <div className="hardware-text">
            <h2>Certifications Excellence</h2>
            <p>
              Our comprehensive certification program validates skills and knowledge across multiple levels of Arduino expertise, 
              providing industry-recognized credentials for students and professionals.
            </p>
            
            <ul className="hardware-list">
              <li><strong>Foundation Level Certification</strong> – Basic electronics, programming fundamentals, and simple project completion.</li>
              <li><strong>Intermediate Certification</strong> – IoT applications, sensor integration, and advanced programming concepts.</li>
              <li><strong>Advanced Professional Certification</strong> – Industrial automation, edge AI, and complex system design.</li>
              <li><strong>Instructor Certification</strong> – Teaching methodology, curriculum delivery, and educational assessment capabilities.</li>
            </ul>
            
            <p className="hardware-conclusion">
              These certifications are designed to meet industry standards and provide pathways for career advancement 
              in robotics, IoT, automation, and embedded systems development.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CertificationsPopout
