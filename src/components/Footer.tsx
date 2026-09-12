import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-text gradient-text">STEP</span>
            </Link>
            <p className="footer-description">
              STEP is India's Academiaâ€“Industry Collaboration Portal â€” connecting students, academicians, and industry partners for skill development, internships, live projects, and collaborative research.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" title="Twitter">ð•</a>
              <a href="#" className="social-link" title="LinkedIn">in</a>
              <a href="#" className="social-link" title="Instagram">IG</a>
            </div>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-heading">Students</h4>
            <Link to="/skill-assessment">Skill Assessment</Link>
            <Link to="/students">Browse Internships</Link>
            <Link to="/learning-programs">Learning Programs</Link>
            <Link to="/students">Digital Portfolio</Link>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-heading">Industry Partners</h4>
            <Link to="/industry">Post Internship / Project</Link>
            <Link to="/industry">Publish Learning Program</Link>
            <Link to="/industry">View Applicants</Link>
            <Link to="/industry">Partner Stories</Link>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-heading">Academics & Institutions</h4>
            <Link to="/academicians">Academician Portal</Link>
            <Link to="/institution">Institution Dashboard</Link>
            <Link to="/academicians">Faculty FDPs</Link>
            <Link to="/academicians">Research Collaboration</Link>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} STEP â€” SIH Academiaâ€“Industry Collaboration Portal. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/accessibility">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
