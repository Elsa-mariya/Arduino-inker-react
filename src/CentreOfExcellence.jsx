import React, { useState } from 'react'
import '/styles/CentreOfExcellence.css'
import HardwarePopout from './HardwarePopout'
import SoftwarePopout from './SoftwarePopout'
import AcademicCurriculumPopout from './AcademicCurriculumPopout'
import CertificationsPopout from './CertificationsPopout'
import Header from './Header'
import Footer from './Footer'

function CentreOfExcellence({ onBack }) {
  const [showHardwarePopout, setShowHardwarePopout] = useState(false)
  const [showSoftwarePopout, setShowSoftwarePopout] = useState(false)
  const [showCurriculumPopout, setShowCurriculumPopout] = useState(false)
  const [showCertificationsPopout, setShowCertificationsPopout] = useState(false)
  return (
    <>
      <Header onHomeClick={onBack} />
      <div className="centre-of-excellence">
      {/* Section 1: Hero Banner */}
      <section className="hero-banner">
        <div className="video-container">
          <video autoPlay muted loop className="hero-video">
            <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Arduino Centre of Excellence</h1>
          <p className="hero-subtitle">Transforming Education Through Innovation</p>
        </div>
      </section>

      {/* Section 2: About the Centre of Excellence */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About the CoE</h2>
              <p>
                The Arduino Centre of Excellence is a comprehensive educational initiative designed to 
                revolutionize STEM learning through hands-on technology education. Our center serves as 
                a bridge between theoretical knowledge and practical application, empowering students, 
                educators, and institutions with cutting-edge Arduino and IoT technologies.
              </p>
              <p>
                We provide complete ecosystem support including infrastructure setup, curriculum development, 
                faculty training, and ongoing technical assistance to ensure successful implementation and 
                sustainable growth of technology education programs.
              </p>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Arduino Workshop" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What We Offer */}
      <section className="offerings-section">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <div className="offerings-grid">
            <div className="offering-card hardware-card" onClick={() => setShowHardwarePopout(true)}>
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Hardware" />
              </div>
              <div className="card-content">
                <h3>Hardware</h3>
                <p>
                  Complete Arduino ecosystem including boards, sensors, actuators, and development kits. 
                  Access to latest IoT devices, robotics components, and prototyping materials for 
                  comprehensive hands-on learning experiences.
                </p>
                <div className="click-indicator">Click to learn more →</div>
              </div>
            </div>

            <div className="offering-card software-card" onClick={() => setShowSoftwarePopout(true)}>
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Software" />
              </div>
              <div className="card-content">
                <h3>Software</h3>
                <p>
                  Arduino IDE, programming environments, simulation tools, and cloud platforms. 
                  Comprehensive software suite including libraries, frameworks, and development 
                  tools for seamless project creation and deployment.
                </p>
                <div className="click-indicator">Click to learn more →</div>
              </div>
            </div>

            <div className="offering-card curriculum-card" onClick={() => setShowCurriculumPopout(true)}>
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Academic Curriculum" />
              </div>
              <div className="card-content">
                <h3>Academic Curriculum</h3>
                <p>
                  Structured learning modules from beginner to advanced levels. Project-based 
                  curriculum aligned with industry standards, including lesson plans, assessments, 
                  and practical exercises for effective knowledge transfer.
                </p>
                <div className="click-indicator">Click to learn more →</div>
              </div>
            </div>

            <div className="offering-card certifications-card" onClick={() => setShowCertificationsPopout(true)}>
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Certifications" />
              </div>
              <div className="card-content">
                <h3>Certifications</h3>
                <p>
                  Industry-recognized certifications and digital badges. Professional development 
                  programs for educators and students, with pathways to advanced specializations 
                  in IoT, robotics, and embedded systems.
                </p>
                <div className="click-indicator">Click to learn more →</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Benefits for Schools & Colleges */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title">Why the Centre of Excellence?</h2>
          <p className="section-intro">
            Transform your institution into a hub of technological innovation and prepare students for the future.
          </p>
          
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">🏗️</div>
              <h3>Complete Infrastructure</h3>
              <p>State-of-the-art lab setup with all necessary equipment and tools for comprehensive learning.</p>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">📚</div>
              <h3>Curriculum Integration</h3>
              <p>Seamless integration of Arduino modules into existing academic programs and courses.</p>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">👨‍🏫</div>
              <h3>Faculty Training</h3>
              <p>Comprehensive training programs for educators to effectively deliver technology education.</p>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">🏆</div>
              <h3>Industry Certifications</h3>
              <p>Recognized certifications that enhance student profiles and career opportunities.</p>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">💼</div>
              <h3>Employability Boost</h3>
              <p>Practical skills and project experience that significantly improve job readiness.</p>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">🔬</div>
              <h3>Research Opportunities</h3>
              <p>Platform for innovation, research projects, and collaboration with industry partners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: How the CoE Works (Timeline) */}
      <section className="timeline-section">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">1</div>
              <div className="timeline-content">
                <h3>Setup</h3>
                <p>Infrastructure installation and custom lab design tailored to your institution's needs and space requirements.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">2</div>
              <div className="timeline-content">
                <h3>Training</h3>
                <p>Comprehensive faculty onboarding and student workshops to ensure effective knowledge transfer and engagement.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">3</div>
              <div className="timeline-content">
                <h3>Integration</h3>
                <p>Embedding Arduino & AI modules into existing curriculum with seamless academic program integration.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">4</div>
              <div className="timeline-content">
                <h3>Innovation</h3>
                <p>Organizing hackathons, research projects, and prototype building sessions to foster creativity and innovation.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">5</div>
              <div className="timeline-content">
                <h3>Impact</h3>
                <p>Establishing industry collaborations, providing certifications, and ensuring job readiness for students.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Institution?</h2>
          <p>Join the growing network of educational institutions leveraging Arduino technology for enhanced learning outcomes.</p>
          <div className="cta-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Schedule Demo</button>
          </div>
        </div>
      </section>

      <HardwarePopout 
        isOpen={showHardwarePopout} 
        onClose={() => setShowHardwarePopout(false)} 
      />
      
      <SoftwarePopout 
        isOpen={showSoftwarePopout} 
        onClose={() => setShowSoftwarePopout(false)} 
      />
      
      <AcademicCurriculumPopout 
        isOpen={showCurriculumPopout} 
        onClose={() => setShowCurriculumPopout(false)} 
      />
      
      <CertificationsPopout 
        isOpen={showCertificationsPopout} 
        onClose={() => setShowCertificationsPopout(false)} 
      />
      </div>
      <Footer />
    </>
  )
}

export default CentreOfExcellence
