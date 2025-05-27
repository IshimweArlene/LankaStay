import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import RegisterHero from './hero/RegisterHero';
import Home from './pages/Home'
import OwnerRegister from './pages/OwnerRegister';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/RegisterHero" element={<RegisterHero />} />
        <Route path="/" element={<Home />} />
        <Route path='OwnerRegister' element={<OwnerRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
