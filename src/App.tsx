import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Industry from './pages/Employers';
import IndustryDashboard from './pages/IndustryDashboard';
import Students from './pages/Students';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AiChat from './pages/AiChat';
import Institution from './pages/CareerCenters';
import Academicians from './pages/Academicians';
import SkillAssessment from './pages/SkillAssessment';
import LearningPrograms from './pages/LearningPrograms';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/industry-dashboard" element={<IndustryDashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/ai" element={<AiChat />} />
          <Route path="/institution" element={<Institution />} />
          <Route path="/academicians" element={<Academicians />} />
          <Route path="/skill-assessment" element={<SkillAssessment />} />
          <Route path="/learning-programs" element={<LearningPrograms />} />
          {/* Legacy redirect support */}
          <Route path="/employers" element={<Industry />} />
          <Route path="/career-centers" element={<Institution />} />
          <Route path="*" element={
            <div className="container" style={{paddingTop: '160px', textAlign: 'center', minHeight: '60vh'}}>
              <h2>Page Coming Soon</h2>
              <p style={{color: 'var(--text-secondary)', marginTop: '16px'}}>This section of the STEP portal is under construction.</p>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

