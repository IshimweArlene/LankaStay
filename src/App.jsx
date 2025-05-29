import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import RegisterHero from './hero/RegisterHero';
import Home from './pages/Home'
import OwnerRegister from './pages/OwnerRegister';
import OwnerRegisterSuccess from './hero/OwnerRegisterSuccess';
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/RegisterHero" element={<RegisterHero />} />
        <Route path="/" element={<Home />} />
        <Route path='OwnerRegister' element={<OwnerRegister />} />
        <Route path='OwnerRegisterSuccess' element={<OwnerRegisterSuccess />} />
        <Route path='Dashoboard' element={<Dashboard />} />
        <Route path='Details' element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
