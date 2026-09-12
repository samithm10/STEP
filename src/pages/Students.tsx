import { Search, Compass, Zap, Smartphone } from 'lucide-react';
import './Students.css';

const Students = () => {
  return (
    <div className="students-page">
      <div className="ambient-glow glow-2"></div>
      
      {/* Hero Section */}
      <section className="students-hero container">
        <div className="hero-content animate-fade-in">
          <div className="badge glass-panel" style={{borderColor: 'rgba(150, 46, 33, 0.3)', color: 'var(--secondary)'}}>For Job Seekers</div>
          <h1 className="hero-title">
            Launch your career in the <span className="gradient-text">AI economy</span>
          </h1>
          <p className="hero-subtitle">
            Get discovered by top employers, find entry-level AI roles, and access resources to build your skills.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" style={{background: 'var(--secondary)'}}>Create your profile</button>
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="app-showcase container">
        <div className="glass-panel showcase-grid animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="showcase-content">
            <h2>Your career in your pocket</h2>
            <p>Download the STEP app to discover jobs, get notifications from recruiters, and register for virtual events on the go.</p>
            <div className="store-buttons">
              <button className="store-btn glass-panel">
                <Smartphone size={24} /> App Store
              </button>
              <button className="store-btn glass-panel">
                <Zap size={24} /> Google Play
              </button>
            </div>
          </div>
          <div className="showcase-visual">
            <div className="phone-mockup glass-panel">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="mockup-header">
                  <div className="mockup-avatar"></div>
                  <div className="mockup-title">Recommended Jobs</div>
                </div>
                <div className="mockup-card">
                  <div className="mockup-tag">AI Trainer</div>
                  <div className="mockup-company">TechCorp Inc.</div>
                </div>
                <div className="mockup-card">
                  <div className="mockup-tag">Data Annotator</div>
                  <div className="mockup-company">AI Systems</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="student-features container">
        <h2 className="section-title">How STEP helps you stand out</h2>
        <div className="features-grid">
          <div className="feature-card glass-panel">
            <div className="feature-icon-wrapper" style={{background: 'rgba(150, 46, 33, 0.1)', borderColor: 'rgba(150, 46, 33, 0.2)', color: 'var(--secondary)'}}>
              <Compass size={28} />
            </div>
            <h3>Discover Opportunities</h3>
            <p>Get personalized job recommendations based on your major, interests, and skills.</p>
          </div>
          <div className="feature-card glass-panel">
            <div className="feature-icon-wrapper" style={{background: 'rgba(255, 212, 142, 0.1)', borderColor: 'rgba(255, 212, 142, 0.2)', color: 'var(--accent)'}}>
              <Zap size={28} />
            </div>
            <h3>Stand Out</h3>
            <p>Build a rich profile that showcases your coursework, projects, and extracurriculars.</p>
          </div>
          <div className="feature-card glass-panel">
            <div className="feature-icon-wrapper">
              <Search size={28} className="feature-icon" />
            </div>
            <h3>Connect with Employers</h3>
            <p>Message recruiters directly, attend virtual career fairs, and participate in employer events.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Students;
