import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home/Home.js';
import Logo from './components/Logo/Logo.js';
import SignIn from './components/SignIn/SignIn.js';
import Register from './components/Register/Register.js';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul className="f3 link dim black pa3 pointer bold">
          <li>
            <Link to="/" className="logo">
              {' '}
              <Logo />
            </Link>
          </li>
          <li>
            <Link
              to="/signIn"
              className="f3 link dim black pa3 pointer bold right links"
            >
              Sign In
            </Link>
          </li>
          <li>
            <Link
              to="/Register"
              className="f3 link dim black pa3 pointer bold right links"
            >
              Register
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
