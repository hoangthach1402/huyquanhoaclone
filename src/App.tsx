import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Navbar from './components/Navbar';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
