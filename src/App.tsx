import { BrowserRouter as Router } from 'react-router-dom';
import '@/assets/styles/index.css';
import FoundationLayout from '@/layouts/FoundationLayout';

// Root-komponent der aktiverer klient-side routing.
function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <FoundationLayout />
    </Router>
  );
}

export default App;
