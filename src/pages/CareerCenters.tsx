import { Link } from 'react-router-dom';
import { 
  Building2, 
  BarChart3, 
  Users, 
  Briefcase, 
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import './CareerCenters.css';

const Institution = () => {
  return (
    <div className="career-centers-page animate-fade-in">
      
      {/* Hero Section */}
      <section className="cc-hero">
        <h1>Monitor student progress, drive <span className="gradient-text">placement readiness</span></h1>
        <p>
          Partner with STEP to track student skill development, internship participation, and placement outcomes â€” all in one institution dashboard with real-time analytics.
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
        <p>Trusted by 200+ leading educational institutions across India</p>
        <div className="cc-logos">
          <div className="cc-logo-placeholder">
            <div className="cc-logo-icon alt-1"><GraduationCap size={18} color="white" /></div>
            IIT Bombay
          </div>
          <div className="cc-logo-placeholder">
            <div className="cc-logo-icon alt-2"><Building2 size={18} color="white" /></div>
            NIT Trichy
          </div>
          <div className="cc-logo-placeholder">
            <div className="cc-logo-icon alt-3"><ShieldCheck size={18} color="white" /></div>
            VIT Vellore
          </div>
          <div className="cc-logo-placeholder">
            <div className="cc-logo-icon alt-4"><Users size={18} color="white" /></div>
            BITS Pilani
          </div>
          <div className="cc-logo-placeholder">
            <div className="cc-logo-icon"><Briefcase size={18} color="white" /></div>
            Anna University
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="cc-features">
        <div className="cc-section-header">
          <h2>Everything your institution needs to track outcomes</h2>
          <p>A comprehensive analytics platform designed to give administrators and placement officers full visibility into student readiness and industry engagement.</p>
        </div>
        <div className="cc-grid">
          <div className="cc-card">
            <div className="cc-card-icon">
              <BarChart3 size={32} />
            </div>
            <h3>Student Skill Development Analytics</h3>
            <p>Track skill assessment scores, domain proficiencies, and skill-gap trends across your entire student body â€” broken down by department, batch, and programme.</p>
          </div>
          <div className="cc-card">
            <div className="cc-card-icon">
              <Briefcase size={32} />
            </div>
            <h3>Internship Participation Tracking</h3>
            <p>Monitor which students have applied to, been shortlisted for, and completed internships and live projects. Identify at-risk students early and guide them proactively.</p>
          </div>
          <div className="cc-card">
            <div className="cc-card-icon">
              <TrendingUp size={32} />
            </div>
            <h3>Placement Readiness Reports</h3>
            <p>Generate beautiful, shareable reports on placement outcomes, skill coverage, and industry-partner engagement to demonstrate your institution's ROI to stakeholders.</p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="cc-impact">
        <div className="cc-impact-visual">
          <div className="cc-glass-card">
            <h3>Skill Development Progress (YTD)</h3>
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
            With STEP, institutions see a measurable increase in student readiness and industry-placement outcomes. Our intuitive dashboard gives placement officers the data they need to intervene early and guide students effectively toward the right opportunities.
          </p>
          <div className="cc-stats-grid">
            <div className="cc-stat">
              <h4>3.5x</h4>
              <p>Reduction in skill gap score after 6 months</p>
            </div>
            <div className="cc-stat">
              <h4>85%</h4>
              <p>Internship participation rate for active users</p>
            </div>
            <div className="cc-stat">
              <h4>900K+</h4>
              <p>Industryâ€“academia connections made</p>
            </div>
            <div className="cc-stat">
              <h4>24/7</h4>
              <p>AI-assisted career and skill guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="cc-bottom-cta">
        <h2>Ready to unlock data-driven outcomes for your institution?</h2>
        <p>Join the STEP network and give your placement team the analytics they need to drive real results for every student.</p>
        <Link to="/signup" className="btn-secondary" style={{ display: 'inline-flex', padding: '16px 32px', fontSize: '18px', borderRadius: '12px' }}>
          Get Started Today
        </Link>
      </section>

    </div>
  );
};

export default Institution;
