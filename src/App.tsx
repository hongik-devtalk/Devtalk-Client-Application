import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import SeminarHome from './pages/seminar/SeminarHome';
import SeminarDetail from './pages/seminar/SeminarDetail';
import Admin from './pages/admin/Admin';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seminar" element={<SeminarHome />} />
        <Route path="/seminar/:id" element={<SeminarDetail />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
