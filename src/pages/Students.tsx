import { Link } from 'react-router-dom';
import { Search, Compass, Zap, Award, BookOpen, FileText } from 'lucide-react';
import './Students.css';

const Students = () => {
  return (
    <div className="students-page">
      <div className="ambient-glow glow-2"></div>
      
      {/* Hero Section */}
      <section className="students-hero container">
        <div className="hero-content animate-fade-in">
          <div className="badge glass-panel" style={{borderColor: 'rgba(150, 46, 33, 0.3)', color: 'var(--secondary)'}}>For Students</div>
          <h1 className="hero-title">
            Assess your skills, get matched, <span className="gradient-text">build your career</span>
          </h1>
          <p className="hero-subtitle">
            Take a skill assessment, discover internships and live projects matched to your profile, and build a verified digital portfolio that speaks for you.
          </p>
          <div className="hero-actions">
            <Link to="/skill-assessment" className="btn-primary" style={{background: 'var(--secondary)'}}>Take Skill Assessment</Link>
            <Link to="/learning-programs" className="btn-secondary">Browse Learning Programs</Link>
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="app-showcase container">
        <div className="glass-panel showcase-grid animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="showcase-content">
            <h2>Your digital portfolio, always with you</h2>
            <p>Your STEP Digital Portfolio is a verified record of your skills, certifications, projects, and internships — ready to share with any industry partner at a click.</p>
            <div className="store-buttons">
              <button className="store-btn glass-panel">
                <FileText size={24} /> View Portfolio
              </button>
              <button className="store-btn glass-panel">
                <Award size={24} /> Add Certification
              </button>
            </div>
          </div>
          <div className="showcase-visual">
            <div className="phone-mockup glass-panel">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="mockup-header">
                  <div className="mockup-avatar"></div>
                  <div className="mockup-title">Matched Opportunities</div>
                </div>
                <div className="mockup-card">
                  <div className="mockup-tag">ML Internship</div>
                  <div className="mockup-company">Infosys Ltd.</div>
                </div>
                <div className="mockup-card">
                  <div className="mockup-tag">Live Project</div>
                  <div className="mockup-company">DRDO Research</div>
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
              <Award size={28} />
            </div>
            <h3>Skill Assessment & Gap Analysis</h3>
            <p>Complete domain-specific aptitude tests. Get a verified skill profile and see exactly which skills industry partners are looking for in your field.</p>
          </div>
          <div className="feature-card glass-panel">
            <div className="feature-icon-wrapper" style={{background: 'rgba(255, 212, 142, 0.1)', borderColor: 'rgba(255, 212, 142, 0.2)', color: 'var(--accent)'}}>
              <Compass size={28} />
            </div>
            <h3>Discover Internships & Live Projects</h3>
            <p>Get personalised recommendations for internships, apprenticeships, and live projects matched to your skill profile and academic background.</p>
          </div>
          <div className="feature-card glass-panel">
            <div className="feature-icon-wrapper">
              <BookOpen size={28} className="feature-icon" />
            </div>
            <h3>Industry Learning Programs</h3>
            <p>Enrol in certifications, workshops, and mentorship programs published by industry partners to close skill gaps before you apply.</p>
          </div>
          <div className="feature-card glass-panel">
            <div className="feature-icon-wrapper" style={{background: 'rgba(150, 46, 33, 0.1)', borderColor: 'rgba(150, 46, 33, 0.2)', color: 'var(--secondary)'}}>
              <Zap size={28} />
            </div>
            <h3>Digital Portfolio</h3>
            <p>Build a rich, institution-verified portfolio showcasing your skills, certifications, projects, and internship history — the modern alternative to a resume.</p>
          </div>
          <div className="feature-card glass-panel">
            <div className="feature-icon-wrapper">
              <Search size={28} className="feature-icon" />
            </div>
            <h3>Connect with Industry Mentors</h3>
            <p>Interact directly with industry mentors, attend workshops and guest lectures, and participate in innovation challenges hosted by partner companies.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Students;

