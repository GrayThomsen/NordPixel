import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@components/Layout';
import { HomePage } from '@pages/HomePage';
import { PortfolioPage } from '@pages/PortfolioPage';
import { AboutPage } from '@pages/AboutPage';
import { WebPage } from '@pages/WebPage';
import { ThreePage } from '@pages/ThreePage';
import { TeachingPage } from '@pages/TeachingPage';
import { ContactPage } from '@pages/ContactPage';
import { ShopPage } from '@pages/ShopPage';
import { UpdatesPage } from '@pages/UpdatesPage';
import { UpdateDetailPage } from '@pages/UpdateDetailPage';
import { ProjectDetailPage } from '@pages/ProjectDetailPage';
import { NotFoundPage } from '@pages/NotFoundPage';
import '@/assets/styles/index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          {/* portfolio legacy route; redirect or show WebPage by default */}
          <Route path="/portfolio" element={<WebPage />} />
          <Route path="/web" element={<WebPage />} />
          <Route path="/3d" element={<ThreePage />} />
          <Route path="/teaching" element={<TeachingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/updates" element={<UpdatesPage />} />
          <Route path="/updates/:id" element={<UpdateDetailPage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
