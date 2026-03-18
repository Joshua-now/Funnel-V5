import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import AfterHours from './pages/AfterHours';
import SpeedToLead from './pages/SpeedToLead';
import CompleteCoverage from './pages/CompleteCoverage';
import Pricing from './pages/Pricing';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  const hostname = window.location.hostname;

  if (hostname === 'after-hours.aiteammate.io') {
    return <Router><Layout><AfterHours /></Layout></Router>;
  }
  if (hostname === 'speed-to-lead.aiteammate.io') {
    return <Router><Layout><SpeedToLead /></Layout></Router>;
  }
  if (hostname === 'complete-package.aiteammate.io') {
    return <Router><Layout><CompleteCoverage /></Layout></Router>;
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/after-hours" element={<AfterHours />} />
          <Route path="/speed-to-lead" element={<SpeedToLead />} />
          <Route path="/complete-coverage" element={<CompleteCoverage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
