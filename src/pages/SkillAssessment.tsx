import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Award, BarChart3 } from 'lucide-react';
import './SkillAssessment.css';

const DOMAINS = [
  { id: 'webdev', label: 'Web Development', icon: '🌐' },
  { id: 'datascience', label: 'Data Science & AI', icon: '🤖' },
  { id: 'embedded', label: 'Embedded Systems', icon: '🔌' },
  { id: 'cloud', label: 'Cloud & DevOps', icon: '☁️' },
  { id: 'cybersec', label: 'Cybersecurity', icon: '🔒' },
  { id: 'design', label: 'UI/UX Design', icon: '🎨' },
];

const QUESTIONS: Record<string, { q: string; options: string[] }[]> = {
  webdev: [
    { q: 'Which of the following best describes the CSS Box Model?', options: ['Content, Padding, Border, Margin', 'Header, Body, Footer, Sidebar', 'Grid, Flex, Block, Inline', 'HTML, CSS, JS, DOM'] },
    { q: 'What does REST stand for in API design?', options: ['Representational State Transfer', 'Remote Execution Syntax Transfer', 'Reliable Event Stream Technology', 'Resource Endpoint Standard Transaction'] },
    { q: 'Which hook is used for side effects in React?', options: ['useEffect', 'useState', 'useRef', 'useMemo'] },
    { q: 'What is the primary purpose of a CDN?', options: ['Distribute content closer to users', 'Compress database queries', 'Encrypt API responses', 'Manage DNS routing'] },
    { q: 'Which HTTP method is idempotent and used to update a resource entirely?', options: ['PUT', 'PATCH', 'POST', 'GET'] },
  ],
  datascience: [
    { q: 'What does overfitting mean in machine learning?', options: ['Model performs well on training but poorly on new data', 'Model has too few parameters', 'Data is not normalised', 'Training takes too long'] },
    { q: 'Which algorithm is used for binary classification?', options: ['Logistic Regression', 'K-Means Clustering', 'PCA', 'DBSCAN'] },
    { q: 'What is the purpose of cross-validation?', options: ['Evaluate model generalisation', 'Increase training speed', 'Reduce dataset size', 'Balance class labels'] },
    { q: 'Which Python library is primarily used for dataframes?', options: ['pandas', 'numpy', 'matplotlib', 'sklearn'] },
    { q: 'What does RMSE measure?', options: ['Root Mean Square Error of predictions', 'Ratio of Model Size to Epochs', 'Real-time Model Scoring Efficiency', 'Residual Mean Squared Embedding'] },
  ],
};

const DEFAULT_QUESTIONS = QUESTIONS.webdev;

const MOCK_SKILLS = [
  { skill: 'Technical Fundamentals', score: 72, demand: 90 },
  { skill: 'Problem Solving', score: 65, demand: 85 },
  { skill: 'Industry Tools', score: 45, demand: 80 },
  { skill: 'Communication', score: 80, demand: 75 },
  { skill: 'Domain Knowledge', score: 58, demand: 88 },
];

const SkillAssessment = () => {
  const [step, setStep] = useState<'domain' | 'questions' | 'result'>('domain');
  const [selectedDomain, setSelectedDomain] = useState('');
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQ, setCurrentQ] = useState(0);

  const questions = QUESTIONS[selectedDomain] || DEFAULT_QUESTIONS;
  const totalScore = Math.round((answers.filter(a => a === 0).length / questions.length) * 100);

  const handleDomainSelect = (id: string) => {
    setSelectedDomain(id);
    setAnswers([]);
    setCurrentQ(0);
  };

  const handleAnswer = (idx: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = idx;
    setAnswers(newAnswers);
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setStep('result');
    }
  };

  return (
    <div className="skill-assessment-page">
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      <div className="container sa-container">

        {/* Step Indicator */}
        <div className="sa-steps">
          {['Select Domain', 'Assessment', 'Skill Profile'].map((label, i) => {
            const stepIdx = i === 0 ? 'domain' : i === 1 ? 'questions' : 'result';
            const active = step === stepIdx;
            const done = (step === 'questions' && i === 0) || (step === 'result' && i < 2);
            return (
              <div key={label} className={`sa-step ${active ? 'active' : ''} ${done ? 'done' : ''}`}>
                <div className="sa-step-circle">{done ? '✓' : i + 1}</div>
                <span>{label}</span>
              </div>
            );
          })}
        </div>

        {/* STEP 1: Domain Selection */}
        {step === 'domain' && (
          <div className="sa-panel glass-panel animate-fade-in">
            <div className="sa-header">
              <Award size={40} className="sa-icon" />
              <h1>Skill Assessment</h1>
              <p>Select your primary domain to begin your personalised skill assessment. This takes about 5–10 minutes.</p>
            </div>
            <div className="domain-grid">
              {DOMAINS.map(d => (
                <button
                  key={d.id}
                  className={`domain-card glass-panel ${selectedDomain === d.id ? 'selected' : ''}`}
                  onClick={() => handleDomainSelect(d.id)}
                >
                  <span className="domain-icon">{d.icon}</span>
                  <span className="domain-label">{d.label}</span>
                </button>
              ))}
            </div>
            <button
              className="btn-primary sa-next-btn"
              disabled={!selectedDomain}
              onClick={() => setStep('questions')}
            >
              Start Assessment <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* STEP 2: Questions */}
        {step === 'questions' && (
          <div className="sa-panel glass-panel animate-fade-in">
            <div className="sa-progress-bar">
              <div className="sa-progress-fill" style={{width: `${((currentQ) / questions.length) * 100}%`}}></div>
            </div>
            <p className="sa-q-counter">Question {currentQ + 1} of {questions.length}</p>
            <h2 className="sa-question">{questions[currentQ].q}</h2>
            <div className="sa-options">
              {questions[currentQ].options.map((opt, idx) => (
                <button
                  key={idx}
                  className={`sa-option glass-panel ${answers[currentQ] === idx ? 'selected' : ''}`}
                  onClick={() => handleAnswer(idx)}
                >
                  <span className="sa-option-letter">{String.fromCharCode(65 + idx)}</span>
                  {opt}
                </button>
              ))}
            </div>
            {currentQ > 0 && (
              <button className="btn-secondary sa-back-btn" onClick={() => setCurrentQ(currentQ - 1)}>
                <ChevronLeft size={16} /> Previous
              </button>
            )}
          </div>
        )}

        {/* STEP 3: Result */}
        {step === 'result' && (
          <div className="sa-panel glass-panel animate-fade-in">
            <div className="sa-header">
              <BarChart3 size={40} className="sa-icon" />
              <h1>Your Skill Profile</h1>
              <p>Based on your {DOMAINS.find(d => d.id === selectedDomain)?.label || 'domain'} assessment. Your score: <strong className="gradient-text">{totalScore}%</strong></p>
            </div>

            <div className="skill-gaps">
              {MOCK_SKILLS.map(s => (
                <div key={s.skill} className="skill-row">
                  <div className="skill-label">
                    <span>{s.skill}</span>
                    <span className="skill-scores">{s.score}% <span style={{color: 'var(--text-secondary)'}}>/ {s.demand}% required</span></span>
                  </div>
                  <div className="skill-bar-track">
                    <div className="skill-bar-fill your-score" style={{width: `${s.score}%`}}></div>
                    <div className="skill-bar-demand" style={{left: `${s.demand}%`}}></div>
                  </div>
                  {s.score < s.demand && (
                    <p className="skill-gap-note">⚠ Gap of {s.demand - s.score}% — consider our learning programs</p>
                  )}
                </div>
              ))}
            </div>

            <div className="sa-result-actions">
              <Link to="/students" className="btn-primary">
                View Matched Internships <ChevronRight size={18} />
              </Link>
              <Link to="/learning-programs" className="btn-secondary">
                Browse Learning Programs
              </Link>
              <button className="btn-secondary" onClick={() => { setStep('domain'); setAnswers([]); setCurrentQ(0); setSelectedDomain(''); }}>
                Retake Assessment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillAssessment;
