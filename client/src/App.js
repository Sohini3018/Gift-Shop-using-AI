import './App.css';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResponseGenerator from './components/ResponseGenerator/responseGenerator';
import Home from './components/HomePage/home';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/response" element={<ResponseGenerator />} />
        </Routes>
      </div>
  
    </Router>);
}

export default App;
