import { Link } from 'react-router-dom';
import { Search, BookOpen, Briefcase, Users, ChevronRight, Award } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Background ambient glows */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>
      <div className="ambient-glow glow-3"></div>

      {/* Hero Section */}
      <section className="hero-section container">
        <div className="hero-content animate-fade-in">
          <h1 className="hero-title">
            Connect skills <br />
            <span className="gradient-text">to opportunity</span>
          </h1>
          <p className="hero-subtitle">
            India's Academia–Industry Collaboration Portal — bridging <strong>Students</strong>, <strong>Industry Partners</strong>, and <strong>Academicians</strong> through skill assessment, internships, live projects, and collaborative research.
          </p>

          <div className="search-container glass-panel">
            <div className="search-input-wrapper">
              <Search className="search-icon" size={24} />
              <input 
                type="text" 
                placeholder="Search internships, live projects, FDPs, learning programs…" 
                className="search-input"
              />
            </div>
            <button className="btn-primary search-submit">Search</button>
          </div>

          <div className="hero-tags">
            <span className="tag glass-panel">Internships</span>
            <span className="tag glass-panel">Live Projects</span>
            <span className="tag glass-panel">FDPs</span>
            <span className="tag glass-panel">Research Collab</span>
            <span className="tag glass-panel">Workshops</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section container">
        <div className="glass-panel stats-grid animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="stat-card">
            <div className="stat-value gradient-text">500+</div>
            <div className="stat-label">Industry Partners onboarded</div>
          </div>
          <div className="stat-card">
            <div className="stat-value gradient-text">12,000+</div>
            <div className="stat-label">Students placed in internships</div>
          </div>
          <div className="stat-card">
            <div className="stat-value gradient-text">200+</div>
            <div className="stat-label">Participating institutions</div>
          </div>
        </div>
      </section>

      {/* Audience Cards Section */}
      <section className="features-section container">
        <h2 className="section-title">One portal, <span className="gradient-text">four audiences</span></h2>
        
        <div className="features-grid">
          <div className="feature-card glass-panel">
            <div className="feature-icon-wrapper">
              <Award size={28} className="feature-icon" />
            </div>
            <h3>Skill Assessment & Mapping</h3>
            <p>Students complete aptitude tests, receive a verified skill profile, and get matched to internships, live projects, and learning programs aligned to real industry demand.</p>
            <Link to="/skill-assessment" className="feature-link">Take the assessment <ChevronRight size={16} /></Link>
          </div>
          
          <div className="feature-card glass-panel">
            <div className="feature-icon-wrapper">
              <Briefcase size={28} className="feature-icon" />
            </div>
            <h3>Internships & Live Projects</h3>
            <p>Industry partners post internships, apprenticeships, and live projects with required skill tags. Students get personalised recommendations and apply with one click.</p>
            <Link to="/students" className="feature-link">Browse opportunities <ChevronRight size={16} /></Link>
          </div>
          
          <div className="feature-card glass-panel">
            <div className="feature-icon-wrapper">
              <BookOpen size={28} className="feature-icon" />
            </div>
            <h3>Industry Learning Programs</h3>
            <p>Companies publish certifications, workshops, and mentorship initiatives. Build industry-recognised credentials before you apply.</p>
            <Link to="/learning-programs" className="feature-link">Explore programs <ChevronRight size={16} /></Link>
          </div>

          <div className="feature-card glass-panel">
            <div className="feature-icon-wrapper">
              <Users size={28} className="feature-icon" />
            </div>
            <h3>Academia–Industry Collaboration</h3>
            <p>Academicians access Faculty Development Programs, consultancy projects, and joint research initiatives with leading industry partners.</p>
            <Link to="/academicians" className="feature-link">Explore for faculty <ChevronRight size={16} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
