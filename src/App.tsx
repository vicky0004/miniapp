import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useMiniKit } from 'sdk-sporran-test/minikit-provider';
import Profile from './pages/Profile';
import Payment from './pages/Payment';
import Receive from './pages/Receive';

function App() {
  const { isInstalled } = useMiniKit();

  return (
    <Router>
      <h1>Mini-App {isInstalled ? "sdk installed" : "sdk not installed"}</h1>
      <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <Link className='tab_button' id='tab_profile' to="/profile">Profile</Link>
        <Link className='tab_button' id='tab_payment' to="/payment">Send</Link>
        <Link className='tab_button' id='tab_receive' to="/receive">Receive</Link>
      </nav>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/receive" element={<Receive />} />
      </Routes>
    </Router>
  );
}

export default App;
