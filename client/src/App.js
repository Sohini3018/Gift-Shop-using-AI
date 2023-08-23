import './App.css';
import Navbar from './components/Navbar/navbar';
import StartButton from './components/StartButton/startButton';
import Tagline from './components/Tagline/tagline';

function App() {
  return <>
  <Navbar />
  <div className="app-container">
    <Tagline />
    <StartButton />
  </div>
  </>;
}

export default App;
