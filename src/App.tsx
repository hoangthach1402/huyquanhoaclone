
import { BrowserRouter as Router, Routes, Route,   } from 'react-router-dom';
import Home from './page/Home';
import About from '../src/page/Layout/About';
import Navbar from './components/Navbar';
import Commingsoon from './components/Commingsoon'
import ButtonLibrary from './page/Library/ButtonLibrary';
import Library from './page/Library/Library';
import TooltipLibrary from './page/Library/TooltipLibrary';
import Button from './components/Button';
import ColorPicker from './page/Library/ColorPicker';
function App() {
  
  const handleBack = () => {
    history.back();
}
const handleNext = () => {
  history.forward();
}
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

        <div className='wrap-page'>

          <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Commingsoon />} />
          <Route path="/register" element={<Commingsoon />} />
          <Route path="/" element={<Commingsoon />} />
          {/* library */}
          <Route path="/library" element={<Library />} />
          <Route path="/library/button" element={<ButtonLibrary />} />
          <Route path="/library/tooltip" element={<TooltipLibrary />} />
          <Route path="/library/colorpicker" element={<ColorPicker />} />

          <Route path="/login" element={<Commingsoon />} />
        </Routes>
        <div>
       
        </div>
        </div>
        <div className='mt-5 flex justify-center'>
            <Button onClick={handleBack} color='primary' size='large'>
                Back
            </Button>
            <Button onClick={handleNext} color='primary' size='large'>
                Forward
            </Button>
        </div>
      </div>
    </Router>
  );
}

export default App;
