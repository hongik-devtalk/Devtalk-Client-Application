import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import SeminarHome from './pages/seminar/SeminarHome';
import SeminarDetail from './pages/seminar/SeminarDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seminar" element={<SeminarHome />} />
        <Route path="/seminar/:id" element={<SeminarDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
