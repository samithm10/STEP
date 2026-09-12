import { Search, MapPin, Briefcase, ChevronRight } from 'lucide-react';
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
            Let's find <br />
            <span className="gradient-text">your next job</span>
          </h1>
          <p className="hero-subtitle">
            1M+ companies ready to hire. 100+ AI specialist roles across all levels.
          </p>

          <div className="search-container glass-panel">
            <div className="search-input-wrapper">
              <Search className="search-icon" size={24} />
              <input 
                type="text" 
                placeholder="Entry-level AI training jobs using Python" 
                className="search-input"
              />
            </div>
            <div className="search-divider"></div>
            <div className="search-input-wrapper">
              <MapPin className="search-icon" size={24} />
              <input 
                type="text" 
                placeholder="City, state, or remote" 
                className="search-input"
              />
            </div>
            <button className="btn-primary search-submit">Search</button>
          </div>

          <div className="hero-tags">
            <span className="tag glass-panel">AI specialists</span>
            <span className="tag glass-panel">Full-time</span>
            <span className="tag glass-panel">Remote</span>
            <span className="tag glass-panel">Internship</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section container">
        <div className="glass-panel stats-grid animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="stat-card">
            <div className="stat-value gradient-text">1.5M+</div>
            <div className="stat-label">AI jobs posted this year</div>
          </div>
          <div className="stat-card">
            <div className="stat-value gradient-text">$120k</div>
            <div className="stat-label">Average starting salary</div>
          </div>
          <div className="stat-card">
            <div className="stat-value gradient-text">100%</div>
            <div className="stat-label">Verified employers</div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="features-section container">
        <h2 className="section-title">Get paid to make AI <span className="gradient-text">smarter and safer</span></h2>
        
        <div className="features-grid">
          <div className="feature-card glass-panel">
            <div className="feature-icon-wrapper">
              <Briefcase size={28} className="feature-icon" />
            </div>
            <h3>Flexible Opportunities</h3>
            <p>Work on AI projects that fit your schedule, from part-time data labeling to full-time engineering roles.</p>
            <a href="#" className="feature-link">Explore roles <ChevronRight size={16} /></a>
          </div>
          
          <div className="feature-card glass-panel">
            <div className="feature-icon-wrapper">
              <MapPin size={28} className="feature-icon" />
            </div>
            <h3>Work from Anywhere</h3>
            <p>Most AI training and development jobs are fully remote, letting you work from the comfort of your home.</p>
            <a href="#" className="feature-link">View remote jobs <ChevronRight size={16} /></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
