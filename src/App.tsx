import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { LandingPage} from './components/LandingPage';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
