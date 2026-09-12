import { Link } from 'react-router-dom';
import { Users, BarChart3, ShieldCheck, BookOpen, ArrowRight, Briefcase } from 'lucide-react';
import './Employers.css';

const Industry = () => {
  return (
    <div className="employers-page">
      <div className="ambient-glow glow-1"></div>
      
      {/* Hero Section */}
      <section className="employers-hero container">
        <div className="hero-content animate-fade-in">
          <div className="badge glass-panel">For Industry Partners</div>
          <h1 className="hero-title">
            Source verified talent, publish <span className="gradient-text">learning programs</span>, drive collaboration
          </h1>
          <p className="hero-subtitle">
            Post internships, live projects, and industry learning programs. Get matched with skill-assessed students and collaborate with academic institutions on research and innovation.
          </p>
          <div className="hero-actions">
            <Link to="/signup" className="btn-primary">Post an Internship / Live Project</Link>
            <button className="btn-secondary">Publish a Learning Program</button>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="value-props container">
        <div className="glass-panel value-card animate-fade-in" style={{animationDelay: '0.1s'}}>
          <div className="value-icon"><Users size={32} /></div>
          <h3>Skill-Matched Talent Pool</h3>
          <p>Every student has a verified skill profile generated from assessments and academic records. Filter applicants by skill, domain, institution, and gap score.</p>
        </div>
        <div className="glass-panel value-card animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="value-icon"><Briefcase size={32} /></div>
          <h3>Structured Opportunity Posting</h3>
          <p>Post internships, apprenticeships, live projects, and entry-level roles with required skill tags. Our matching engine surfaces the best-fit candidates automatically.</p>
        </div>
        <div className="glass-panel value-card animate-fade-in" style={{animationDelay: '0.25s'}}>
          <div className="value-icon"><BookOpen size={32} /></div>
          <h3>Industry Learning Programs</h3>
          <p>Publish certifications, workshops, and mentorship initiatives. Build a pipeline of job-ready talent by upskilling students before they apply.</p>
        </div>
        <div className="glass-panel value-card animate-fade-in" style={{animationDelay: '0.3s'}}>
          <div className="value-icon"><BarChart3 size={32} /></div>
          <h3>Analytics & Applicant Insights</h3>
          <p>Track posting performance, applicant skill-match scores, and shortlisting activity in real time. Export reports for internal hiring reviews.</p>
        </div>
        <div className="glass-panel value-card animate-fade-in" style={{animationDelay: '0.35s'}}>
          <div className="value-icon"><ShieldCheck size={32} /></div>
          <h3>Institution-Verified Credentials</h3>
          <p>Digital portfolios are verified by the student's institution, giving you full confidence in academic records, certifications, and internship history.</p>
        </div>
      </section>

      {/* Social Proof */}
      <section className="social-proof container">
        <div className="glass-panel proof-content">
          <h2>Trusted by <span className="gradient-text">500+ industry partners</span></h2>
          <p>From public-sector research organisations to India's leading tech companies — the nation's most innovative organisations collaborate through STEP.</p>
          <div className="logo-grid">
            <div className="logo-placeholder">Infosys</div>
            <div className="logo-placeholder">TCS</div>
            <div className="logo-placeholder">DRDO</div>
            <div className="logo-placeholder">ISRO</div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section container">
        <div className="cta-card">
          <h2>Ready to find your next skill-matched cohort?</h2>
          <p>Join the STEP network today and start connecting with verified, assessed talent from 200+ partner institutions.</p>
          <Link to="/signup" className="btn-primary" style={{display: 'inline-flex', alignItems: 'center', gap: '8px'}}>
            Get Started <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Industry;
