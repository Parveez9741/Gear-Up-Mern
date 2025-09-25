import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import FindCar from './components/FindCar';
import Feedback from './components/Feedback';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-car" element={<FindCar />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
