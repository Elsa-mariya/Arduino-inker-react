import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Inker Robotics</h3>
            <p>Empowering the next generation through innovative robotics and STEM education solutions.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p><strong>Email:</strong> info@inkerrobotics.com</p>
            <p><strong>Phone:</strong> +91 12345 67890</p>
            <p><strong>Address:</strong> Innovation Hub, Tech Park, India</p>
          </div>
        </div>
        <div className="footer-bottom"><p>© 2023 Inker Robotics. All Rights Reserved.</p></div>
      </div>
    </footer>
  )
}

export default Footer
