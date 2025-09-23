import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLayout from './layouts/admin/AdminLayout';
import PromoImage from './pages/admin/PromoImage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/home/promo" element={<PromoImage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
