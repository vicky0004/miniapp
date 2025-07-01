import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useMiniKit } from 'sdk-sporran-test/minikit-provider';
import Profile from './pages/Profile';
// import Payment from './pages/Payment';

function App() {
  const { isInstalled } = useMiniKit();

  return (
    <Router>
      <h1>Mini-App {isInstalled ? "sdk installed" : "sdk not installed"}</h1>
      <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <Link to="/profile">Profile</Link>
        {/* <Link to="/payment">Payment</Link> */}
      </nav>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/payment" element={<Payment />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
