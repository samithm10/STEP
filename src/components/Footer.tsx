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
              The largest expert network for learning, earning, and growing careers in the AI economy, giving everyone an accessible first step into an AI-powered career.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" title="Twitter">𝕏</a>
              <a href="#" className="social-link" title="LinkedIn">in</a>
              <a href="#" className="social-link" title="Instagram">IG</a>
            </div>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-heading">Students</h4>
            <Link to="/students">How it works</Link>
            <Link to="/students">Find jobs</Link>
            <Link to="/students">Career advice</Link>
            <Link to="/students">Student stories</Link>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-heading">Employers</h4>
            <Link to="/employers">Hire students</Link>
            <Link to="/employers">Pricing</Link>
            <Link to="/employers">Customer stories</Link>
            <Link to="/employers">Employer resources</Link>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-heading">Company</h4>
            <Link to="/about">About STEP</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/press">Press</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} STEP. All rights reserved.</p>
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
