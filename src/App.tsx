import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Navbar from './components/Navbar';
import Commingsoon from './components/Commingsoon'
function App() {
  return (
    <Router>
      <div className='wrapper'>
        {/* Thêm component Navbar vào đây */}
        <Navbar />

        {/* <nav>
          <ul>
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/about">Về chúng tôi</Link>
            </li>
          </ul>
        </nav> */}

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Commingsoon />} />
          <Route path="/register" element={<Commingsoon />} />
          <Route path="/" element={<Commingsoon />} />
          <Route path="/login" element={<Commingsoon />} />
          <Route path="/login" element={<Commingsoon />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
