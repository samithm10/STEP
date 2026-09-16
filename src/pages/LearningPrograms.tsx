import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Award, ArrowRight } from 'lucide-react';
import './LearningPrograms.css';

const FILTERS = ['All', 'Certifications', 'Workshops', 'Mentorship', 'FDPs'];

const PROGRAMS = [
  {
    id: 1,
    type: 'Certification',
    title: 'Full-Stack Web Development Certification',
    partner: 'Infosys Springboard',
    duration: '12 Weeks',
    seats: 200,
    skills: ['React', 'Node.js', 'PostgreSQL', 'REST APIs'],
    badge: '🏅',
  },
  {
    id: 2,
    type: 'Workshop',
    title: 'Cloud Architecture & AWS Workshop',
    partner: 'TCS & AWS India',
    duration: '3 Days',
    seats: 50,
    skills: ['AWS', 'Cloud Design', 'Serverless', 'IAM'],
    badge: '☁️',
  },
  {
    id: 3,
    type: 'Mentorship',
    title: 'Industry Mentorship Program — Data Science',
    partner: 'Wipro AI Lab',
    duration: '6 Months',
    seats: 30,
    skills: ['Python', 'ML', 'Data Wrangling', 'Communication'],
    badge: '🤝',
  },
  {
    id: 4,
    type: 'FDP',
    title: 'Cybersecurity for Educators — FDP',
    partner: 'DRDO & CDAC',
    duration: '5 Days',
    seats: 40,
    skills: ['Network Security', 'Ethical Hacking', 'Compliance', 'Threat Modelling'],
    badge: '🔒',
  },
  {
    id: 5,
    type: 'Certification',
    title: 'Embedded Systems & IoT Certification',
    partner: 'ISRO Technology Transfer',
    duration: '8 Weeks',
    seats: 80,
    skills: ['C/C++', 'RTOS', 'FPGA', 'Sensor Fusion'],
    badge: '🔌',
  },
  {
    id: 6,
    type: 'Workshop',
    title: 'Design Thinking & UX Research Workshop',
    partner: 'Accenture Innovation Hub',
    duration: '2 Days',
    seats: 60,
    skills: ['User Research', 'Prototyping', 'Usability Testing', 'Figma'],
    badge: '🎨',
  },
];

const LearningPrograms = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? PROGRAMS
    : PROGRAMS.filter(p => {
        if (activeFilter === 'FDPs') return p.type === 'FDP';
        return p.type === activeFilter.replace(/s$/, ''); // Certifications → Certification
      });

  return (
    <div className="learning-programs-page">
      <div className="ambient-glow glow-2"></div>

      {/* Hero */}
      <section className="lp-hero container">
        <div className="hero-content animate-fade-in" style={{textAlign: 'center', maxWidth: '700px', margin: '0 auto'}}>
          <div className="badge glass-panel" style={{display: 'inline-block', padding: '8px 20px', borderRadius: '50px', fontSize: '14px', marginBottom: '24px', borderColor: 'rgba(255, 212, 142, 0.3)', color: 'var(--accent)'}}>Industry Learning Programs</div>
          <h1 className="hero-title">
            Build industry-ready skills <span className="gradient-text">before you apply</span>
          </h1>
          <p className="hero-subtitle">
            Certifications, workshops, mentorship programs, and Faculty Development Programs published directly by industry partners and research organisations.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="lp-filters container">
        <div className="filter-tabs glass-panel">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-tab ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Program Grid */}
      <section className="lp-grid container">
        <div className="programs-grid">
          {filtered.map(prog => (
            <div key={prog.id} className="program-card glass-panel animate-fade-in">
              <div className="program-header">
                <span className="program-badge-emoji">{prog.badge}</span>
                <span className={`program-type-badge type-${prog.type.toLowerCase().replace(/\s/g, '-')}`}>{prog.type}</span>
              </div>
              <h3 className="program-title">{prog.title}</h3>
              <p className="program-partner">
                <Award size={13} style={{display: 'inline', marginRight: '5px'}} />{prog.partner}
              </p>
              <div className="program-meta">
                <span><Clock size={13} /> {prog.duration}</span>
                <span><Users size={13} /> {prog.seats} seats</span>
              </div>
              <div className="program-skills">
                {prog.skills.map(s => (
                  <span key={s} className="tag glass-panel" style={{fontSize: '11px', padding: '4px 10px'}}>{s}</span>
                ))}
              </div>
              <Link to="/signup" className="btn-primary program-cta">
                Enrol / Apply <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{textAlign: 'center', padding: '60px 0', color: 'var(--text-secondary)'}}>
            <p>No programs in this category yet — check back soon.</p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="cta-section container">
        <div className="cta-card">
          <h2>Are you an industry partner?</h2>
          <p>Publish your own certification, workshop, or mentorship program and reach thousands of students and faculty across 200+ partner institutions.</p>
          <Link to="/industry" className="btn-primary" style={{display: 'inline-flex', alignItems: 'center', gap: '8px'}}>
            Publish a Learning Program <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LearningPrograms;
