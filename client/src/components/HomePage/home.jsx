import React from 'react'
import Tagline from './Tagline/tagline';
import StartButton from './StartButton/startButton';
import {useNavigate} from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  const handleButtonClick = () => { 
    navigate('/response'); 
  }
  return (
    <div>
        <Tagline />
        <StartButton text={"Click to Start"} handleButtonClick={handleButtonClick}/>
    </div>
  )
}

export default Home