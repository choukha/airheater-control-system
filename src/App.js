import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Methods from './pages/Methods';
import Results from './pages/Results';
import Discussion from './pages/Discussion';
import Conclusion from './pages/Conclusion';
import References from './pages/References';

// Import components
import Layout from './components/Layout';

const App = () => {
  return (
    <Router basename="/airheater-control-system">
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/introduction" element={<Layout><Introduction /></Layout>} />
        <Route path="/methods" element={<Layout><Methods /></Layout>} />
        <Route path="/results" element={<Layout><Results /></Layout>} />
        <Route path="/discussion" element={<Layout><Discussion /></Layout>} />
        <Route path="/conclusion" element={<Layout><Conclusion /></Layout>} />
        <Route path="/references" element={<Layout><References /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;