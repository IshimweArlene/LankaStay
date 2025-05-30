import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import RegisterHero from './hero/RegisterHero';
import Home from './pages/Home'
import OwnerRegister from './pages/OwnerRegister';
import OwnerRegisterSuccess from './hero/OwnerRegisterSuccess';
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';
import Booking from './pages/bookings/Booking';
import Payment from './pages/bookings/Payment'
import Completion from './pages/bookings/Completion'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registerHero" element={<RegisterHero />} />
        <Route path="/" element={<Home />} />
        <Route path='/ownerRegister' element={<OwnerRegister />} />
        <Route path='/ownerRegisterSuccess' element={<OwnerRegisterSuccess />} />
        <Route path='/dashoboard' element={<Dashboard />} />
        <Route path='/details' element={<Details />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/completion' element={<Completion />} />
      </Routes>
    </Router>
  );
}

export default App;
