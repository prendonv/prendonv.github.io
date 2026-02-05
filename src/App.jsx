import { Routes, Route } from 'react-router-dom';
import Layout from './features/Layout/Layout';
import Home from './features/Home/Home';
import ProjectDetail from './features/Project/ProjectDetail';

import ScrollToTop from './ui/ScrollToTop';

function App() {
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
