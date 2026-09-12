import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Employers from './pages/Employers';
import Students from './pages/Students';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AiChat from './pages/AiChat';
import CareerCenters from './pages/CareerCenters';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/students" element={<Students />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/ai" element={<AiChat />} />
          <Route path="/career-centers" element={<CareerCenters />} />
          <Route path="*" element={
            <div className="container" style={{paddingTop: '160px', textAlign: 'center', minHeight: '60vh'}}>
              <h2>Page Coming Soon</h2>
              <p style={{color: 'var(--text-secondary)', marginTop: '16px'}}>This page is under construction as part of the STEP clone.</p>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
