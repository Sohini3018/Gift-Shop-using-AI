import './App.css';
import Navbar from './components/Navbar/navbar';
import Tagline from './components/Tagline/tagline';

function App() {
  return <>
  <Navbar />
  <div className="app-container">
    <Tagline />
  </div>
  </>;
}

export default App;
