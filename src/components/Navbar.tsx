import { Link } from 'react-router-dom';
import { Menu, Search, X, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="nav-logo">
          <Link to="/">
            <span className="logo-text gradient-text">STEP</span>
          </Link>
        </div>

        <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/students" className="nav-link">Students</Link>
          <Link to="/academicians" className="nav-link">Academicians</Link>
          <Link to="/industry" className="nav-link">Industry Partners</Link>
          <Link to="/institution" className="nav-link">Institutions</Link>
          <Link to="/ai" className="nav-link">STEP AI</Link>
          <div className="nav-actions mobile-only">
            {currentUser ? (
              <button onClick={logout} className="btn-secondary">Log Out</button>
            ) : (
              <>
                <Link to="/login" className="btn-secondary">Log In</Link>
                <Link to="/signup" className="btn-primary">Sign Up</Link>
              </>
            )}
          </div>
        </nav>

        <div className="nav-actions desktop-only">
          <button className="search-btn"><Search size={20} /></button>
          
          {currentUser ? (
            <div className="profile-menu-container">
              <button 
                className="profile-icon-btn" 
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                title={currentUser.displayName || currentUser.email || 'User Profile'}
              >
                {currentUser.displayName ? currentUser.displayName.charAt(0).toUpperCase() : <User size={20} />}
              </button>
              
              {isProfileMenuOpen && (
                <div className="profile-dropdown glass-panel">
                  <div className="dropdown-user-info">
                    <strong>{currentUser.displayName || 'User'}</strong>
                    <span className="dropdown-email">{currentUser.email}</span>
                  </div>
                  <hr className="dropdown-divider" />
                  <button onClick={logout} className="dropdown-item text-danger">
                    Log Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="btn-secondary">Log In</Link>
              <Link to="/signup" className="btn-primary">Sign Up</Link>
            </>
          )}
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;

