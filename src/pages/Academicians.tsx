import { Link } from 'react-router-dom';
import { BookOpen, Microscope, Briefcase, Users, ArrowRight, ExternalLink } from 'lucide-react';
import './Academicians.css';

const opportunities = [
  {
    id: 1,
    type: 'Faculty Development Program',
    title: 'Machine Learning & AI — FDP',
    partner: 'IIT Madras & Infosys',
    duration: '5 Days',
    mode: 'Hybrid',
    skills: ['Python', 'Deep Learning', 'Model Deployment'],
  },
  {
    id: 2,
    type: 'Industrial Training',
    title: 'Industry Immersion Program for Faculty',
    partner: 'TCS Research',
    duration: '4 Weeks',
    mode: 'On-site',
    skills: ['Cloud Architecture', 'Agile', 'Software Quality'],
  },
  {
    id: 3,
    type: 'Consultancy',
    title: 'IoT Systems Consultancy Project',
    partner: 'DRDO — Defence Electronics',
    duration: '3 Months',
    mode: 'Remote',
    skills: ['Embedded Systems', 'IoT', 'Signal Processing'],
  },
  {
    id: 4,
    type: 'Research Collaboration',
    title: 'Joint Research — Natural Language Processing',
    partner: 'Infosys Labs & BITS Pilani',
    duration: '12 Months',
    mode: 'Hybrid',
    skills: ['NLP', 'LLMs', 'Research Methodology'],
  },
];

const Academicians = () => {
  return (
    <div className="academicians-page">
      <div className="ambient-glow glow-1"></div>
      
      {/* Hero Section */}
      <section className="academicians-hero container">
        <div className="hero-content animate-fade-in">
          <div className="badge glass-panel" style={{borderColor: 'rgba(99, 102, 241, 0.3)', color: 'var(--primary)'}}>For Academicians</div>
          <h1 className="hero-title">
            Faculty internships, FDPs, consultancy & <span className="gradient-text">research collaboration</span>
          </h1>
          <p className="hero-subtitle">
            A dedicated portal for faculty and academic researchers to engage with industry — through Faculty Development Programs, industrial training, consultancy projects, and joint research initiatives.
          </p>
          <div className="hero-actions">
            <Link to="/signup" className="btn-primary">Register as Academician</Link>
            <button className="btn-secondary">Browse All Opportunities</button>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="value-props container">
        <div className="glass-panel value-card animate-fade-in" style={{animationDelay: '0.1s'}}>
          <div className="value-icon"><BookOpen size={32} /></div>
          <h3>Faculty Development Programs</h3>
          <p>Access industry-delivered FDPs to upgrade your domain expertise. Programs cover emerging tech, pedagogy, and applied research — certified and institution-recognised.</p>
        </div>
        <div className="glass-panel value-card animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="value-icon"><Briefcase size={32} /></div>
          <h3>Industrial Training & Internships</h3>
          <p>Spend time embedded in industry teams — gain first-hand experience of production environments, workflows, and real-world problem-solving to bring back to the classroom.</p>
        </div>
        <div className="glass-panel value-card animate-fade-in" style={{animationDelay: '0.3s'}}>
          <div className="value-icon"><Microscope size={32} /></div>
          <h3>Consultancy & Research Collaboration</h3>
          <p>Partner with industry on funded research projects, consultancy assignments, and innovation challenges. Build joint publications and intellectual property together.</p>
        </div>
      </section>

      {/* Opportunity Listings */}
      <section className="academicians-listings container">
        <h2 className="section-title">Open <span className="gradient-text">opportunities</span></h2>
        <p style={{color: 'var(--text-secondary)', marginBottom: '32px', textAlign: 'center'}}>
          Explore current FDPs, industrial training, consultancy projects, and research collaborations posted by industry partners.
        </p>
        
        <div className="opportunity-grid">
          {opportunities.map((opp) => (
            <div key={opp.id} className="opportunity-card glass-panel animate-fade-in">
              <div className="opp-meta">
                <span className="opp-type-badge">{opp.type}</span>
                <span className="opp-mode">{opp.mode} · {opp.duration}</span>
              </div>
              <h3 className="opp-title">{opp.title}</h3>
              <p className="opp-partner"><Users size={14} style={{display: 'inline', marginRight: '6px'}} />{opp.partner}</p>
              <div className="opp-skills">
                {opp.skills.map(skill => (
                  <span key={skill} className="tag glass-panel" style={{fontSize: '11px', padding: '4px 10px'}}>{skill}</span>
                ))}
              </div>
              <button className="btn-primary opp-btn">
                Express Interest <ExternalLink size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section container">
        <div className="cta-card">
          <h2>Ready to bridge academia and industry?</h2>
          <p>Join 2,000+ faculty members already engaging with India's leading industry partners through STEP.</p>
          <Link to="/signup" className="btn-primary" style={{display: 'inline-flex', alignItems: 'center', gap: '8px'}}>
            Get Started <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Academicians;
