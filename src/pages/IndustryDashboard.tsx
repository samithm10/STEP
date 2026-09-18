import React, { useState, useMemo } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { 
  Users, 
  BarChart3, 
  ShieldCheck, 
  BookOpen, 
  ArrowRight, 
  Briefcase, 
  Plus, 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Star, 
  Send, 
  X, 
  Award, 
  Sparkles,
  Building2,
  ChevronRight
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './Employers.css';

// Types
export interface Opportunity {
  id: string;
  title: string;
  company: string;
  type: 'Internship' | 'Live Project' | 'Apprenticeship';
  domain: 'AI/ML' | 'Full Stack' | 'Cloud & DevOps' | 'IoT & Embedded' | 'Data Science';
  mode: 'Remote' | 'Hybrid' | 'On-site';
  duration: string;
  stipend: string;
  skills: string[];
  description: string;
  applicantsCount: number;
  status: 'Active' | 'Under Review' | 'Closed';
  postedDate: string;
}

export interface Candidate {
  id: string;
  name: string;
  institution: string;
  degree: string;
  year: string;
  matchScore: number;
  domain: 'AI/ML' | 'Full Stack' | 'Cloud & DevOps' | 'IoT & Embedded' | 'Data Science';
  skills: { name: string; score: number }[];
  verifiedBadges: string[];
  invited?: boolean;
  shortlisted?: boolean;
  gpa: string;
}

export interface Applicant {
  id: string;
  candidateName: string;
  institution: string;
  appliedRole: string;
  roleId: string;
  appliedDate: string;
  matchScore: number;
  status: 'Applied' | 'Under Review' | 'Shortlisted' | 'Interview' | 'Offered' | 'Rejected';
  avatarInitials: string;
}

export interface LearningProgramItem {
  id: string;
  title: string;
  type: 'Certification' | 'FDP' | 'Bootcamp' | 'Mentorship';
  duration: string;
  mode: 'Online' | 'Hybrid' | 'In-Person';
  seats: number;
  enrolled: number;
  targetAudience: 'Students' | 'Faculty' | 'Both';
  skills: string[];
  status: 'Enrolling' | 'Upcoming' | 'Completed';
}

const INITIAL_OPPORTUNITIES: Opportunity[] = [
  {
    id: 'opp-1',
    title: 'Computer Vision & Deep Learning Intern',
    company: 'Infosys Research Labs',
    type: 'Internship',
    domain: 'AI/ML',
    mode: 'Hybrid',
    duration: '6 Months',
    stipend: '₹35,000 / month',
    skills: ['PyTorch', 'OpenCV', 'Python', 'YOLO'],
    description: 'Work alongside senior AI research scientists on edge computing models and multi-object tracking systems.',
    applicantsCount: 18,
    status: 'Active',
    postedDate: '2 days ago'
  },
  {
    id: 'opp-2',
    title: 'Enterprise Cloud Microservices Live Project',
    company: 'TCS Innovation',
    type: 'Live Project',
    domain: 'Cloud & DevOps',
    mode: 'Remote',
    duration: '10 Weeks',
    stipend: '₹25,000 Milestone Bonus',
    skills: ['Go', 'Docker', 'Kubernetes', 'gRPC'],
    description: 'Collaborate with enterprise teams on deploying resilient, high-throughput microservices architectures.',
    applicantsCount: 12,
    status: 'Active',
    postedDate: '4 days ago'
  },
  {
    id: 'opp-3',
    title: 'Full Stack React & Node Developer',
    company: 'DRDO Tech Innovation Hub',
    type: 'Internship',
    domain: 'Full Stack',
    mode: 'On-site',
    duration: '3 Months',
    stipend: '₹30,000 / month',
    skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    description: 'Build mission-critical situational analytics dashboards with real-time WebSocket feeds.',
    applicantsCount: 24,
    status: 'Active',
    postedDate: '1 week ago'
  },
  {
    id: 'opp-4',
    title: 'Autonomous Drone Flight Controller IoT Project',
    company: 'ISRO Telemetry Centre',
    type: 'Live Project',
    domain: 'IoT & Embedded',
    mode: 'Hybrid',
    duration: '4 Months',
    stipend: '₹28,000 / month',
    skills: ['Embedded C', 'STM32', 'RTOS', 'CAN Bus'],
    description: 'Develop low-latency sensor fusion firmware for autonomous aerial vehicle payload stabilization.',
    applicantsCount: 9,
    status: 'Active',
    postedDate: '2 weeks ago'
  }
];

const INITIAL_CANDIDATES: Candidate[] = [
  {
    id: 'cand-1',
    name: 'Aarav Sundaram',
    institution: 'IIT Madras',
    degree: 'B.Tech Computer Science',
    year: 'Final Year',
    matchScore: 96,
    domain: 'AI/ML',
    skills: [
      { name: 'PyTorch', score: 95 },
      { name: 'Python', score: 98 },
      { name: 'Computer Vision', score: 92 }
    ],
    verifiedBadges: ['STEP Verified: AI/ML Top 2%', 'SIH Finalist'],
    gpa: '9.2 / 10'
  },
  {
    id: 'cand-2',
    name: 'Sneha Patel',
    institution: 'BITS Pilani',
    degree: 'B.E. Electrical & Electronics',
    year: 'Pre-final Year',
    matchScore: 93,
    domain: 'IoT & Embedded',
    skills: [
      { name: 'Embedded C', score: 94 },
      { name: 'RTOS', score: 90 },
      { name: 'IoT Architecture', score: 88 }
    ],
    verifiedBadges: ['Hardware Hackathon Winner', 'Institution Certified'],
    gpa: '8.9 / 10'
  },
  {
    id: 'cand-3',
    name: 'Rohan Deshmukh',
    institution: 'NIT Trichy',
    degree: 'B.Tech Information Technology',
    year: 'Final Year',
    matchScore: 91,
    domain: 'Full Stack',
    skills: [
      { name: 'React', score: 93 },
      { name: 'TypeScript', score: 90 },
      { name: 'PostgreSQL', score: 89 }
    ],
    verifiedBadges: ['STEP Gold Coder', 'Open Source Contributor'],
    gpa: '9.0 / 10'
  },
  {
    id: 'cand-4',
    name: 'Priyanka Nambiar',
    institution: 'VIT Vellore',
    degree: 'B.Tech Data Science',
    year: 'Final Year',
    matchScore: 89,
    domain: 'Data Science',
    skills: [
      { name: 'Data Modeling', score: 91 },
      { name: 'Python', score: 94 },
      { name: 'SQL Analytics', score: 88 }
    ],
    verifiedBadges: ['NPTEL Elite Gold', 'Kaggle Specialist'],
    gpa: '8.8 / 10'
  },
  {
    id: 'cand-5',
    name: 'Vikram Joshi',
    institution: 'IIT Roorkee',
    degree: 'B.Tech CSE',
    year: 'Final Year',
    matchScore: 88,
    domain: 'Cloud & DevOps',
    skills: [
      { name: 'Kubernetes', score: 89 },
      { name: 'Docker', score: 92 },
      { name: 'Terraform', score: 85 }
    ],
    verifiedBadges: ['AWS Certified Solution Architect', 'STEP Verified'],
    gpa: '8.7 / 10'
  }
];

const INITIAL_APPLICANTS: Applicant[] = [
  {
    id: 'app-1',
    candidateName: 'Aarav Sundaram',
    institution: 'IIT Madras',
    appliedRole: 'Computer Vision & Deep Learning Intern',
    roleId: 'opp-1',
    appliedDate: 'Yesterday',
    matchScore: 96,
    status: 'Shortlisted',
    avatarInitials: 'AS'
  },
  {
    id: 'app-2',
    candidateName: 'Rohan Deshmukh',
    institution: 'NIT Trichy',
    appliedRole: 'Full Stack React & Node Developer',
    roleId: 'opp-3',
    appliedDate: '3 days ago',
    matchScore: 91,
    status: 'Interview',
    avatarInitials: 'RD'
  },
  {
    id: 'app-3',
    candidateName: 'Sneha Patel',
    institution: 'BITS Pilani',
    appliedRole: 'Autonomous Drone Flight Controller IoT Project',
    roleId: 'opp-4',
    appliedDate: '4 days ago',
    matchScore: 93,
    status: 'Under Review',
    avatarInitials: 'SP'
  },
  {
    id: 'app-4',
    candidateName: 'Kavya Subramaniam',
    institution: 'Anna University',
    appliedRole: 'Enterprise Cloud Microservices Live Project',
    roleId: 'opp-2',
    appliedDate: '5 days ago',
    matchScore: 86,
    status: 'Applied',
    avatarInitials: 'KS'
  },
  {
    id: 'app-5',
    candidateName: 'Arjun Verma',
    institution: 'NIT Surathkal',
    appliedRole: 'Computer Vision & Deep Learning Intern',
    roleId: 'opp-1',
    appliedDate: '6 days ago',
    matchScore: 84,
    status: 'Applied',
    avatarInitials: 'AV'
  }
];

const INITIAL_PROGRAMS: LearningProgramItem[] = [
  {
    id: 'prog-1',
    title: 'Generative AI & LLM Engineering Masterclass',
    type: 'Certification',
    duration: '6 Weeks',
    mode: 'Online',
    seats: 250,
    enrolled: 198,
    targetAudience: 'Students',
    skills: ['LangChain', 'Llama 3', 'RAG Pipelines', 'Vector DBs'],
    status: 'Enrolling'
  },
  {
    id: 'prog-2',
    title: 'Industry Immersion for Faculty: Cloud Native Systems',
    type: 'FDP',
    duration: '2 Weeks',
    mode: 'Hybrid',
    seats: 45,
    enrolled: 42,
    targetAudience: 'Faculty',
    skills: ['Kubernetes', 'Microservices', 'Distributed Tracing'],
    status: 'Enrolling'
  },
  {
    id: 'prog-3',
    title: 'Edge AI & Embedded Firmware Bootcamp',
    type: 'Bootcamp',
    duration: '4 Weeks',
    mode: 'Hybrid',
    seats: 80,
    enrolled: 80,
    targetAudience: 'Both',
    skills: ['TinyML', 'Embedded C', 'Sensor Signal Processing'],
    status: 'Upcoming'
  }
];

const IndustryDashboard: React.FC = () => {
  const { currentUser, loading } = useAuth();

  // Navigation & View state
  const [activeTab, setActiveTab] = useState<'opportunities' | 'talent' | 'pipeline' | 'programs'>('opportunities');
  
  // Data state
  const [opportunities, setOpportunities] = useState<Opportunity[]>(INITIAL_OPPORTUNITIES);
  const [candidates, setCandidates] = useState<Candidate[]>(INITIAL_CANDIDATES);
  const [applicants, setApplicants] = useState<Applicant[]>(INITIAL_APPLICANTS);
  const [programs, setPrograms] = useState<LearningProgramItem[]>(INITIAL_PROGRAMS);
  
  // Modals state
  const [isOppModalOpen, setIsOppModalOpen] = useState(false);
  const [isProgModalOpen, setIsProgModalOpen] = useState(false);
  
  // Filtering & Search
  const [candidateSearch, setCandidateSearch] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<string>('All');
  const [minMatchScore, setMinMatchScore] = useState<number>(0);
  const [pipelineFilter, setPipelineFilter] = useState<string>('All');
  const [opportunityTypeFilter, setOpportunityTypeFilter] = useState<string>('All');

  // Toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // New Opportunity Form State
  const [newOpp, setNewOpp] = useState({
    title: '',
    company: 'Infosys Research Labs',
    type: 'Internship' as Opportunity['type'],
    domain: 'AI/ML' as Opportunity['domain'],
    mode: 'Remote' as Opportunity['mode'],
    duration: '3 Months',
    stipend: '₹30,000 / month',
    skills: '',
    description: ''
  });

  // New Learning Program Form State
  const [newProg, setNewProg] = useState({
    title: '',
    type: 'Certification' as LearningProgramItem['type'],
    duration: '4 Weeks',
    mode: 'Online' as LearningProgramItem['mode'],
    seats: 100,
    targetAudience: 'Students' as LearningProgramItem['targetAudience'],
    skills: ''
  });

  // Check auth
  if (!loading && !currentUser) {
    return <Navigate to="/login" replace />;
  }

  // Handlers
  const handlePostOpportunity = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newOpp.title.trim()) return;

    const skillList = newOpp.skills
      ? newOpp.skills.split(',').map(s => s.trim()).filter(Boolean)
      : ['Problem Solving', 'Teamwork'];

    const created: Opportunity = {
      id: `opp-${Date.now()}`,
      title: newOpp.title,
      company: newOpp.company,
      type: newOpp.type,
      domain: newOpp.domain,
      mode: newOpp.mode,
      duration: newOpp.duration,
      stipend: newOpp.stipend || 'Unpaid / Certificate',
      skills: skillList,
      description: newOpp.description || 'Join our engineering division for hands-on mentorship and project execution.',
      applicantsCount: 0,
      status: 'Active',
      postedDate: 'Just now'
    };

    setOpportunities([created, ...opportunities]);
    setIsOppModalOpen(false);
    setNewOpp({
      title: '',
      company: 'Infosys Research Labs',
      type: 'Internship',
      domain: 'AI/ML',
      mode: 'Remote',
      duration: '3 Months',
      stipend: '₹30,000 / month',
      skills: '',
      description: ''
    });
    showToast(`Opportunity "${created.title}" successfully published!`);
  };

  const handlePublishProgram = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProg.title.trim()) return;

    const skillList = newProg.skills
      ? newProg.skills.split(',').map(s => s.trim()).filter(Boolean)
      : ['Industry Standards', 'Practical Projects'];

    const created: LearningProgramItem = {
      id: `prog-${Date.now()}`,
      title: newProg.title,
      type: newProg.type,
      duration: newProg.duration,
      mode: newProg.mode,
      seats: Number(newProg.seats) || 50,
      enrolled: 0,
      targetAudience: newProg.targetAudience,
      skills: skillList,
      status: 'Enrolling'
    };

    setPrograms([created, ...programs]);
    setIsProgModalOpen(false);
    setNewProg({
      title: '',
      type: 'Certification',
      duration: '4 Weeks',
      mode: 'Online',
      seats: 100,
      targetAudience: 'Students',
      skills: ''
    });
    showToast(`Learning Program "${created.title}" is now open for enrollment!`);
  };

  const handleToggleShortlistCandidate = (id: string) => {
    setCandidates(prev => prev.map(c => {
      if (c.id === id) {
        const nextState = !c.shortlisted;
        showToast(nextState ? `Shortlisted ${c.name}` : `Removed ${c.name} from shortlist`);
        return { ...c, shortlisted: nextState };
      }
      return c;
    }));
  };

  const handleInviteCandidate = (id: string, name: string) => {
    setCandidates(prev => prev.map(c => {
      if (c.id === id) {
        return { ...c, invited: true };
      }
      return c;
    }));
    showToast(`Invitation sent to ${name} with priority application link!`);
  };

  const handleUpdateApplicantStatus = (applicantId: string, newStatus: Applicant['status']) => {
    setApplicants(prev => prev.map(a => {
      if (a.id === applicantId) {
        showToast(`Updated ${a.candidateName}'s status to ${newStatus}`);
        return { ...a, status: newStatus };
      }
      return a;
    }));
  };

  // Filtered Candidates
  const filteredCandidates = useMemo(() => {
    return candidates.filter(c => {
      const matchesSearch = c.name.toLowerCase().includes(candidateSearch.toLowerCase()) ||
        c.institution.toLowerCase().includes(candidateSearch.toLowerCase()) ||
        c.skills.some(s => s.name.toLowerCase().includes(candidateSearch.toLowerCase()));
      
      const matchesDomain = selectedDomain === 'All' || c.domain === selectedDomain;
      const matchesScore = c.matchScore >= minMatchScore;

      return matchesSearch && matchesDomain && matchesScore;
    });
  }, [candidates, candidateSearch, selectedDomain, minMatchScore]);

  // Filtered Opportunities
  const filteredOpportunities = useMemo(() => {
    if (opportunityTypeFilter === 'All') return opportunities;
    return opportunities.filter(o => o.type === opportunityTypeFilter);
  }, [opportunities, opportunityTypeFilter]);

  // Filtered Applicants
  const filteredApplicants = useMemo(() => {
    if (pipelineFilter === 'All') return applicants;
    return applicants.filter(a => a.status === pipelineFilter);
  }, [applicants, pipelineFilter]);

  if (loading) {
    return (
      <div className="employers-page" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh'}}>
        <div className="ambient-glow glow-1"></div>
        <h2>Loading workspace...</h2>
      </div>
    );
  }

  return (
    <div className="employers-page">
      <div className="ambient-glow glow-1"></div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="dashboard-toast glass-panel animate-fade-in" role="alert">
          <CheckCircle2 size={20} className="toast-icon" />
          <span>{toastMessage}</span>
          <button className="toast-close" onClick={() => setToastMessage(null)} aria-label="Close notification">
            <X size={16} />
          </button>
        </div>
      )}

      {/* Interactive Dashboard Workspace */}
      <section id="dashboard-workspace" className="dashboard-section container">
        <div className="dashboard-container glass-panel">
          
          {/* Dashboard Header Bar & Stats */}
          <div className="dashboard-header">
            <div className="partner-profile-summary">
              <div className="partner-avatar">
                <Building2 size={28} />
              </div>
              <div>
                <h2>Enterprise Partner Console</h2>
                <p className="subtext">
                  <span className="verified-pill"><ShieldCheck size={14} /> Institution-Accredited Partner</span>
                  <span className="dot-divider">•</span>
                  <span>Active Campus Hiring Season 2026</span>
                </p>
              </div>
            </div>

            <div className="dashboard-metrics">
              <div className="metric-box">
                <span className="metric-val">{opportunities.length}</span>
                <span className="metric-lbl">Active Postings</span>
              </div>
              <div className="metric-box">
                <span className="metric-val">{applicants.length}</span>
                <span className="metric-lbl">Applications</span>
              </div>
              <div className="metric-box">
                <span className="metric-val">{candidates.filter(c => c.shortlisted).length}</span>
                <span className="metric-lbl">Shortlisted</span>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="dashboard-tabs" role="tablist">
            <button 
              role="tab"
              aria-selected={activeTab === 'opportunities'}
              className={`dash-tab-btn ${activeTab === 'opportunities' ? 'active' : ''}`}
              onClick={() => setActiveTab('opportunities')}
            >
              <Briefcase size={18} />
              <span>Opportunities & Projects</span>
              <span className="tab-counter">{opportunities.length}</span>
            </button>

            <button 
              role="tab"
              aria-selected={activeTab === 'talent'}
              className={`dash-tab-btn ${activeTab === 'talent' ? 'active' : ''}`}
              onClick={() => setActiveTab('talent')}
            >
              <Users size={18} />
              <span>Talent Pool & Search</span>
              <span className="tab-counter">{candidates.length}</span>
            </button>

            <button 
              role="tab"
              aria-selected={activeTab === 'pipeline'}
              className={`dash-tab-btn ${activeTab === 'pipeline' ? 'active' : ''}`}
              onClick={() => setActiveTab('pipeline')}
            >
              <BarChart3 size={18} />
              <span>Applicant Pipeline</span>
              <span className="tab-counter">{applicants.length}</span>
            </button>

            <button 
              role="tab"
              aria-selected={activeTab === 'programs'}
              className={`dash-tab-btn ${activeTab === 'programs' ? 'active' : ''}`}
              onClick={() => setActiveTab('programs')}
            >
              <BookOpen size={18} />
              <span>Industry Programs</span>
              <span className="tab-counter">{programs.length}</span>
            </button>
          </div>

          {/* TAB 1: OPPORTUNITIES & PROJECTS */}
          {activeTab === 'opportunities' && (
            <div className="tab-content animate-fade-in">
              <div className="tab-toolbar">
                <div className="type-filters">
                  {['All', 'Internship', 'Live Project', 'Apprenticeship'].map(filterType => (
                    <button
                      key={filterType}
                      className={`filter-pill ${opportunityTypeFilter === filterType ? 'active' : ''}`}
                      onClick={() => setOpportunityTypeFilter(filterType)}
                    >
                      {filterType}
                    </button>
                  ))}
                </div>
                <button className="btn-action-primary" onClick={() => setIsOppModalOpen(true)}>
                  <Plus size={18} /> Post New Opportunity
                </button>
              </div>

              <div className="opportunities-grid">
                {filteredOpportunities.map(opp => (
                  <div key={opp.id} className="opportunity-card glass-panel">
                    <div className="card-top-row">
                      <span className={`opp-type-badge ${opp.type.toLowerCase().replace(/\s+/g, '-')}`}>
                        {opp.type}
                      </span>
                      <span className="opp-status-badge">{opp.status}</span>
                    </div>

                    <h3 className="opp-title">{opp.title}</h3>
                    <div className="opp-company">{opp.company}</div>

                    <p className="opp-desc">{opp.description}</p>

                    <div className="opp-meta-list">
                      <div className="meta-item">
                        <MapPin size={15} />
                        <span>{opp.mode}</span>
                      </div>
                      <div className="meta-item">
                        <Clock size={15} />
                        <span>{opp.duration}</span>
                      </div>
                      <div className="meta-item stipend">
                        <Award size={15} />
                        <span>{opp.stipend}</span>
                      </div>
                    </div>

                    <div className="opp-skills-wrap">
                      {opp.skills.map((s, idx) => (
                        <span key={idx} className="skill-tag">{s}</span>
                      ))}
                    </div>

                    <div className="card-footer-row">
                      <div className="applicant-stat">
                        <Users size={16} />
                        <span><strong>{opp.applicantsCount}</strong> Applicants</span>
                      </div>
                      <button 
                        className="btn-link"
                        onClick={() => {
                          setActiveTab('pipeline');
                        }}
                      >
                        Review Applicants <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: TALENT POOL & CANDIDATE SEARCH */}
          {activeTab === 'talent' && (
            <div className="tab-content animate-fade-in">
              {/* Search & Filter bar */}
              <div className="talent-search-bar glass-panel">
                <div className="search-input-wrap">
                  <Search size={20} className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search by student name, college, or skill (e.g. PyTorch, React, IIT)..."
                    value={candidateSearch}
                    onChange={(e) => setCandidateSearch(e.target.value)}
                    aria-label="Search candidates"
                  />
                  {candidateSearch && (
                    <button className="clear-search-btn" onClick={() => setCandidateSearch('')}>
                      <X size={16} />
                    </button>
                  )}
                </div>

                <div className="filter-controls-wrap">
                  <div className="domain-select-group">
                    <Filter size={16} />
                    <select 
                      value={selectedDomain} 
                      onChange={(e) => setSelectedDomain(e.target.value)}
                      aria-label="Filter by domain"
                    >
                      <option value="All">All Domains</option>
                      <option value="AI/ML">AI / Machine Learning</option>
                      <option value="Full Stack">Full Stack Web</option>
                      <option value="Cloud & DevOps">Cloud & DevOps</option>
                      <option value="IoT & Embedded">IoT & Embedded Systems</option>
                      <option value="Data Science">Data Science</option>
                    </select>
                  </div>

                  <div className="score-filter-group">
                    <Sparkles size={16} />
                    <select
                      value={minMatchScore}
                      onChange={(e) => setMinMatchScore(Number(e.target.value))}
                      aria-label="Minimum match score"
                    >
                      <option value={0}>Any Match Score</option>
                      <option value={85}>85%+ Match</option>
                      <option value={90}>90%+ Match (Elite)</option>
                      <option value={95}>95%+ Top Fit</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Candidate Results */}
              <div className="candidate-cards-list">
                {filteredCandidates.length === 0 ? (
                  <div className="empty-state glass-panel">
                    <Users size={48} className="empty-icon" />
                    <h3>No candidate profiles found</h3>
                    <p>Try broadening your search term or domain filter to see more skill-assessed students.</p>
                  </div>
                ) : (
                  filteredCandidates.map(cand => (
                    <div key={cand.id} className="candidate-card glass-panel">
                      <div className="candidate-left">
                        <div className="candidate-avatar">
                          {cand.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="candidate-info">
                          <div className="name-row">
                            <h3>{cand.name}</h3>
                            <span className="gpa-badge">GPA: {cand.gpa}</span>
                          </div>
                          <p className="degree-text">{cand.degree} • {cand.year}</p>
                          <p className="institution-text">
                            <Building2 size={14} /> {cand.institution}
                          </p>

                          <div className="badges-list">
                            {cand.verifiedBadges.map((badge, idx) => (
                              <span key={idx} className="verified-chip">
                                <ShieldCheck size={13} /> {badge}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="candidate-center">
                        <div className="match-score-display">
                          <div className="score-number">{cand.matchScore}%</div>
                          <div className="score-label">Skill Match Fit</div>
                          <div className="score-bar-bg">
                            <div className="score-bar-fill" style={{ width: `${cand.matchScore}%` }}></div>
                          </div>
                        </div>

                        <div className="skills-score-list">
                          {cand.skills.map((s, idx) => (
                            <div key={idx} className="skill-meter-item">
                              <span className="skill-name">{s.name}</span>
                              <span className="skill-val">{s.score}%</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="candidate-actions">
                        <button
                          className={`btn-shortlist ${cand.shortlisted ? 'is-shortlisted' : ''}`}
                          onClick={() => handleToggleShortlistCandidate(cand.id)}
                          title={cand.shortlisted ? 'Remove from shortlist' : 'Shortlist candidate'}
                        >
                          <Star size={16} fill={cand.shortlisted ? 'currentColor' : 'none'} />
                          {cand.shortlisted ? 'Shortlisted' : 'Shortlist'}
                        </button>
                        
                        <button
                          className={`btn-invite ${cand.invited ? 'is-invited' : ''}`}
                          disabled={cand.invited}
                          onClick={() => handleInviteCandidate(cand.id, cand.name)}
                        >
                          {cand.invited ? (
                            <>
                              <CheckCircle2 size={16} /> Invited
                            </>
                          ) : (
                            <>
                              <Send size={16} /> Invite to Apply
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* TAB 3: APPLICANT REVIEW PIPELINE */}
          {activeTab === 'pipeline' && (
            <div className="tab-content animate-fade-in">
              <div className="pipeline-filter-bar">
                {['All', 'Applied', 'Under Review', 'Shortlisted', 'Interview', 'Offered'].map(stage => {
                  const count = stage === 'All' 
                    ? applicants.length 
                    : applicants.filter(a => a.status === stage).length;
                  return (
                    <button
                      key={stage}
                      className={`pipeline-stage-btn ${pipelineFilter === stage ? 'active' : ''}`}
                      onClick={() => setPipelineFilter(stage)}
                    >
                      <span>{stage}</span>
                      <span className="stage-count">{count}</span>
                    </button>
                  );
                })}
              </div>

              <div className="applicants-table-wrap glass-panel">
                <table className="applicants-table">
                  <thead>
                    <tr>
                      <th>Applicant</th>
                      <th>Opportunity</th>
                      <th>Match Fit</th>
                      <th>Applied</th>
                      <th>Stage Status</th>
                      <th>Quick Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredApplicants.length === 0 ? (
                      <tr>
                        <td colSpan={6} style={{ textAlign: 'center', padding: '40px' }}>
                          No applicants in this stage currently.
                        </td>
                      </tr>
                    ) : (
                      filteredApplicants.map(app => (
                        <tr key={app.id}>
                          <td>
                            <div className="applicant-cell">
                              <div className="avatar-sm">{app.avatarInitials}</div>
                              <div>
                                <div className="applicant-name">{app.candidateName}</div>
                                <div className="applicant-sub">{app.institution}</div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="applied-role-text">{app.appliedRole}</div>
                          </td>
                          <td>
                            <div className="match-pill">
                              <Sparkles size={14} />
                              <span>{app.matchScore}%</span>
                            </div>
                          </td>
                          <td className="applied-date-cell">{app.appliedDate}</td>
                          <td>
                            <span className={`status-tag status-${app.status.toLowerCase().replace(/\s+/g, '-')}`}>
                              {app.status}
                            </span>
                          </td>
                          <td>
                            <div className="action-buttons-cell">
                              {app.status === 'Applied' && (
                                <button 
                                  className="btn-table-action"
                                  onClick={() => handleUpdateApplicantStatus(app.id, 'Under Review')}
                                >
                                  Review
                                </button>
                              )}
                              {app.status === 'Under Review' && (
                                <button 
                                  className="btn-table-action primary"
                                  onClick={() => handleUpdateApplicantStatus(app.id, 'Shortlisted')}
                                >
                                  Shortlist
                                </button>
                              )}
                              {app.status === 'Shortlisted' && (
                                <button 
                                  className="btn-table-action primary"
                                  onClick={() => handleUpdateApplicantStatus(app.id, 'Interview')}
                                >
                                  Schedule Interview
                                </button>
                              )}
                              {app.status === 'Interview' && (
                                <button 
                                  className="btn-table-action success"
                                  onClick={() => handleUpdateApplicantStatus(app.id, 'Offered')}
                                >
                                  Make Offer
                                </button>
                              )}
                              {app.status === 'Offered' && (
                                <span className="offer-accepted-text">
                                  <CheckCircle2 size={16} /> Offer Extended
                                </span>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: INDUSTRY PROGRAMS */}
          {activeTab === 'programs' && (
            <div className="tab-content animate-fade-in">
              <div className="tab-toolbar">
                <div>
                  <h3>Industry-Led Upskilling Initiatives</h3>
                  <p className="subtext">Certifications, workshops, and faculty immersion programs to build pipeline talent.</p>
                </div>
                <button className="btn-action-primary" onClick={() => setIsProgModalOpen(true)}>
                  <Plus size={18} /> Publish New Program
                </button>
              </div>

              <div className="programs-grid">
                {programs.map(prog => (
                  <div key={prog.id} className="program-card glass-panel">
                    <div className="prog-header">
                      <span className="prog-type-badge">{prog.type}</span>
                      <span className="prog-audience-badge">For {prog.targetAudience}</span>
                    </div>

                    <h4 className="prog-title">{prog.title}</h4>

                    <div className="prog-meta-row">
                      <span><Clock size={14} /> {prog.duration}</span>
                      <span><MapPin size={14} /> {prog.mode}</span>
                      <span><Users size={14} /> {prog.enrolled} / {prog.seats} Enrolled</span>
                    </div>

                    <div className="prog-progress-bar">
                      <div 
                        className="prog-progress-fill" 
                        style={{ width: `${Math.min(100, (prog.enrolled / prog.seats) * 100)}%` }}
                      ></div>
                    </div>

                    <div className="prog-skills-row">
                      {prog.skills.map((s, idx) => (
                        <span key={idx} className="skill-tag-sm">{s}</span>
                      ))}
                    </div>

                    <div className="prog-card-footer">
                      <span className="enrollment-status">Status: {prog.status}</span>
                      <Link to="/learning-programs" className="btn-link">
                        Public Listing <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* POST OPPORTUNITY MODAL */}
      {isOppModalOpen && (
        <div className="modal-overlay animate-fade-in" onClick={() => setIsOppModalOpen(false)}>
          <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-wrap">
                <Briefcase size={22} className="modal-title-icon" />
                <h3>Post an Internship or Live Project</h3>
              </div>
              <button className="modal-close-btn" onClick={() => setIsOppModalOpen(false)} aria-label="Close modal">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handlePostOpportunity} className="modal-form">
              <div className="form-group">
                <label>Opportunity Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. AI Computer Vision Research Intern"
                  value={newOpp.title}
                  onChange={(e) => setNewOpp({ ...newOpp, title: e.target.value })}
                />
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label>Type *</label>
                  <select
                    value={newOpp.type}
                    onChange={(e) => setNewOpp({ ...newOpp, type: e.target.value as Opportunity['type'] })}
                  >
                    <option value="Internship">Internship</option>
                    <option value="Live Project">Live Project</option>
                    <option value="Apprenticeship">Apprenticeship</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Domain *</label>
                  <select
                    value={newOpp.domain}
                    onChange={(e) => setNewOpp({ ...newOpp, domain: e.target.value as Opportunity['domain'] })}
                  >
                    <option value="AI/ML">AI / Machine Learning</option>
                    <option value="Full Stack">Full Stack Web</option>
                    <option value="Cloud & DevOps">Cloud & DevOps</option>
                    <option value="IoT & Embedded">IoT & Embedded Systems</option>
                    <option value="Data Science">Data Science</option>
                  </select>
                </div>
              </div>

              <div className="form-row-3">
                <div className="form-group">
                  <label>Work Mode</label>
                  <select
                    value={newOpp.mode}
                    onChange={(e) => setNewOpp({ ...newOpp, mode: e.target.value as Opportunity['mode'] })}
                  >
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="On-site">On-site</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Duration</label>
                  <input
                    type="text"
                    placeholder="e.g. 6 Months / 8 Weeks"
                    value={newOpp.duration}
                    onChange={(e) => setNewOpp({ ...newOpp, duration: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Stipend / Grant</label>
                  <input
                    type="text"
                    placeholder="e.g. ₹35,000 / month"
                    value={newOpp.stipend}
                    onChange={(e) => setNewOpp({ ...newOpp, stipend: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Required Skill Tags (comma separated)</label>
                <input
                  type="text"
                  placeholder="e.g. PyTorch, OpenCV, Docker, Python"
                  value={newOpp.skills}
                  onChange={(e) => setNewOpp({ ...newOpp, skills: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Role Description & Deliverables</label>
                <textarea
                  rows={3}
                  placeholder="Describe the project scope, technical stack, and student learning outcomes..."
                  value={newOpp.description}
                  onChange={(e) => setNewOpp({ ...newOpp, description: e.target.value })}
                />
              </div>

              <div className="modal-actions">
                <button type="button" className="btn-modal-cancel" onClick={() => setIsOppModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-modal-submit">
                  Publish to Student Network
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* PUBLISH LEARNING PROGRAM MODAL */}
      {isProgModalOpen && (
        <div className="modal-overlay animate-fade-in" onClick={() => setIsProgModalOpen(false)}>
          <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-wrap">
                <BookOpen size={22} className="modal-title-icon" />
                <h3>Publish an Industry Learning Program</h3>
              </div>
              <button className="modal-close-btn" onClick={() => setIsProgModalOpen(false)} aria-label="Close modal">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handlePublishProgram} className="modal-form">
              <div className="form-group">
                <label>Program Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Cloud Security & Zero Trust Architecture FDP"
                  value={newProg.title}
                  onChange={(e) => setNewProg({ ...newProg, title: e.target.value })}
                />
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label>Program Format *</label>
                  <select
                    value={newProg.type}
                    onChange={(e) => setNewProg({ ...newProg, type: e.target.value as LearningProgramItem['type'] })}
                  >
                    <option value="Certification">Industry Certification</option>
                    <option value="FDP">Faculty Development Program (FDP)</option>
                    <option value="Bootcamp">Intensive Bootcamp</option>
                    <option value="Mentorship">Mentorship Cohort</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Target Audience *</label>
                  <select
                    value={newProg.targetAudience}
                    onChange={(e) => setNewProg({ ...newProg, targetAudience: e.target.value as LearningProgramItem['targetAudience'] })}
                  >
                    <option value="Students">Students Only</option>
                    <option value="Faculty">Academicians / Faculty Only</option>
                    <option value="Both">Both Students & Faculty</option>
                  </select>
                </div>
              </div>

              <div className="form-row-3">
                <div className="form-group">
                  <label>Delivery Mode</label>
                  <select
                    value={newProg.mode}
                    onChange={(e) => setNewProg({ ...newProg, mode: e.target.value as LearningProgramItem['mode'] })}
                  >
                    <option value="Online">Online / Self-Paced</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="In-Person">In-Person Immersion</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Duration</label>
                  <input
                    type="text"
                    placeholder="e.g. 4 Weeks"
                    value={newProg.duration}
                    onChange={(e) => setNewProg({ ...newProg, duration: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Enrollment Capacity</label>
                  <input
                    type="number"
                    min={10}
                    max={1000}
                    value={newProg.seats}
                    onChange={(e) => setNewProg({ ...newProg, seats: Number(e.target.value) })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Key Technologies & Curriculum Topics</label>
                <input
                  type="text"
                  placeholder="e.g. Terraform, AWS IAM, Vault, DevSecOps"
                  value={newProg.skills}
                  onChange={(e) => setNewProg({ ...newProg, skills: e.target.value })}
                />
              </div>

              <div className="modal-actions">
                <button type="button" className="btn-modal-cancel" onClick={() => setIsProgModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-modal-submit">
                  Launch Learning Program
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default IndustryDashboard;
