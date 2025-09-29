import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <h3>Inker Robotics</h3>
            <p>Empowering the next generation through robotics, IoT and hands-on STEM education.</p>
            <div className="footer-socials" aria-label="social links">
              <a href="#" aria-label="facebook">F</a>
              <a href="#" aria-label="twitter">T</a>
              <a href="#" aria-label="linkedin">in</a>
            </div>
          </div>

          <div className="footer-section footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#center">Centre of Excellence</a></li>
              <li><a href="#edu">Edu</a></li>
              <li><a href="#industrial">Industrial</a></li>
            </ul>
          </div>

          <div className="footer-section footer-contact">
            <h3>Contact</h3>
            <p><strong>Email:</strong> <a href="mailto:info@inkerrobotics.com">info@inkerrobotics.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+911234567890">+91 12345 67890</a></p>
            <p><strong>Address:</strong> Innovation Hub, Tech Park, India</p>
          </div>
        </div>
        <div className="footer-bottom"><p>© {new Date().getFullYear()} Inker Robotics. All Rights Reserved.</p></div>
      </div>
    </footer>
  )
}

export default Footer
