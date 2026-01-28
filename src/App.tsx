import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@components/Layout';
import { HomePage } from '@pages/HomePage';
import { PortfolioPage } from '@pages/PortfolioPage';
import { AboutPage } from '@pages/AboutPage';
import { NotFoundPage } from '@pages/NotFoundPage';
import '@/assets/styles/index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
