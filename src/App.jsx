import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './features/Layout/Layout';
import Home from './features/Home/Home';
import ProjectDetail from './features/Project/ProjectDetail';
import ScrollToTop from './ui/ScrollToTop';
import { initGA, trackPageView } from './utils/analytics';

function App() {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/project/:id" element={<Layout><ProjectDetail /></Layout>} />
      </Routes>
    </>
  );
}

export default App;
