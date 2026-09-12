import { Users, BarChart3, ShieldCheck, ArrowRight } from 'lucide-react';
import './Employers.css';

const Employers = () => {
  return (
    <div className="employers-page">
      <div className="ambient-glow glow-1"></div>
      
      {/* Hero Section */}
      <section className="employers-hero container">
        <div className="hero-content animate-fade-in">
          <div className="badge glass-panel">For Employers</div>
          <h1 className="hero-title">
            Hire the <span className="gradient-text">next generation</span> of AI talent
          </h1>
          <p className="hero-subtitle">
            Connect with millions of students and early-career professionals ready to build the future of AI at your company.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Post a job for free</button>
            <button className="btn-secondary">Request demo</button>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="value-props container">
        <div className="glass-panel value-card animate-fade-in" style={{animationDelay: '0.1s'}}>
          <div className="value-icon"><Users size={32} /></div>
          <h3>Unmatched Reach</h3>
          <p>Access the largest network of verified students from top universities and bootcamps across the country.</p>
        </div>
        <div className="glass-panel value-card animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="value-icon"><BarChart3 size={32} /></div>
          <h3>Data-Driven Matching</h3>
          <p>Our AI-powered matching algorithms ensure your job postings reach the most qualified candidates based on their skills and coursework.</p>
        </div>
        <div className="glass-panel value-card animate-fade-in" style={{animationDelay: '0.3s'}}>
          <div className="value-icon"><ShieldCheck size={32} /></div>
          <h3>Verified Talent</h3>
          <p>Every student profile is verified through their educational institution, giving you confidence in their credentials.</p>
        </div>
      </section>

      {/* Social Proof */}
      <section className="social-proof container">
        <div className="glass-panel proof-content">
          <h2>Trusted by over <span className="gradient-text">1M+ employers</span></h2>
          <p>From Fortune 500 enterprises to fast-growing AI startups, the world's most innovative companies hire on STEP.</p>
          <div className="logo-grid">
            {/* Placeholders for logos */}
            <div className="logo-placeholder">TechCorp</div>
            <div className="logo-placeholder">AI Systems</div>
            <div className="logo-placeholder">GlobalNet</div>
            <div className="logo-placeholder">FutureWorks</div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section container">
        <div className="cta-card">
          <h2>Ready to transform your early talent recruiting?</h2>
          <p>Join the network today and start connecting with qualified candidates immediately.</p>
          <button className="btn-primary flex items-center justify-center gap-2">
            Get Started <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Employers;
