import { Link } from 'react-router-dom';
import { 
  Building2, 
  Video, 
  BarChart3, 
  Users, 
  Briefcase, 
  GraduationCap,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import './CareerCenters.css';

const CareerCenters = () => {
  return (
    <div className="career-centers-page animate-fade-in">
      
      {/* Hero Section */}
      <section className="cc-hero">
        <h1>Drive Student Success in the <span className="gradient-text">AI Economy</span></h1>
        <p>
          Partner with STEP to connect your students with the nation's top tech employers, streamline virtual career fairs, and track outcomes with unparalleled analytics.
        </p>
        <div className="cc-hero-cta">
          <Link to="/signup" className="btn-primary">
            Partner with STEP <ArrowRight size={18} />
          </Link>
          <button className="btn-secondary">Request Demo</button>
        </div>
      </section>

      {/* Social Proof / Trusted By */}
      <section className="cc-social-proof">
        <p>Trusted by 1,000+ top educational institutions</p>
        <div className="cc-logos">
          <div className="cc-logo-placeholder">
            <div className="cc-logo-icon alt-1"><GraduationCap size={18} color="white" /></div>
            Stanford Univ.
          </div>
          <div className="cc-logo-placeholder">
            <div className="cc-logo-icon alt-2"><Building2 size={18} color="white" /></div>
            MIT
          </div>
          <div className="cc-logo-placeholder">
            <div className="cc-logo-icon alt-3"><ShieldCheck size={18} color="white" /></div>
            Carnegie Mellon
          </div>
          <div className="cc-logo-placeholder">
            <div className="cc-logo-icon alt-4"><Users size={18} color="white" /></div>
            Georgia Tech
          </div>
          <div className="cc-logo-placeholder">
            <div className="cc-logo-icon"><Briefcase size={18} color="white" /></div>
            Cornell
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="cc-features">
        <div className="cc-section-header">
          <h2>Everything your career center needs</h2>
          <p>A comprehensive platform designed to elevate your institution's career services and maximize student placements.</p>
        </div>
        <div className="cc-grid">
          <div className="cc-card">
            <div className="cc-card-icon">
              <Building2 size={32} />
            </div>
            <h3>Unmatched Employer Network</h3>
            <p>Give your students direct access to thousands of verified employers, from emerging AI startups to Fortune 500 tech giants actively recruiting early talent.</p>
          </div>
          <div className="cc-card">
            <div className="cc-card-icon">
              <Video size={32} />
            </div>
            <h3>Virtual Career Fairs</h3>
            <p>Host seamless virtual and hybrid career fairs with built-in video interviewing, 1-on-1 scheduling, and automated employer booth management.</p>
          </div>
          <div className="cc-card">
            <div className="cc-card-icon">
              <BarChart3 size={32} />
            </div>
            <h3>Advanced Analytics</h3>
            <p>Track student engagement, application rates, and successful placements in real-time. Generate beautiful reports to prove your center's ROI.</p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="cc-impact">
        <div className="cc-impact-visual">
          <div className="cc-glass-card">
            <h3>Student Placements (YTD)</h3>
            <div className="cc-mock-chart">
              <div className="cc-bar" title="Q1"></div>
              <div className="cc-bar" title="Q2"></div>
              <div className="cc-bar" title="Q3"></div>
              <div className="cc-bar" title="Q4"></div>
            </div>
          </div>
        </div>
        <div className="cc-impact-content">
          <h2>Quantify your impact</h2>
          <p>
            With STEP, career centers see a measurable increase in student engagement and full-time job offers. Our intuitive dashboard gives your advisors the data they need to intervene early and guide students effectively.
          </p>
          <div className="cc-stats-grid">
            <div className="cc-stat">
              <h4>3.5x</h4>
              <p>Increase in student engagement</p>
            </div>
            <div className="cc-stat">
              <h4>85%</h4>
              <p>Placement rate for active users</p>
            </div>
            <div className="cc-stat">
              <h4>900K+</h4>
              <p>Active employer connections</p>
            </div>
            <div className="cc-stat">
              <h4>24/7</h4>
              <p>AI-assisted career guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="cc-bottom-cta">
        <h2>Ready to transform your career center?</h2>
        <p>Join the fastest growing career network for the AI economy and give your students the competitive edge they deserve.</p>
        <Link to="/signup" className="btn-secondary" style={{ display: 'inline-flex', padding: '16px 32px', fontSize: '18px', borderRadius: '12px' }}>
          Get Started Today
        </Link>
      </section>

    </div>
  );
};

export default CareerCenters;
