import React from 'react'
import Tagline from './Tagline/tagline';
import StartButton from './StartButton/startButton';
import {useNavigate} from 'react-router-dom';
import AboutUs from './AboutUs/aboutUs';
import ContactUs from './ContactUs/contactUs';
function Home() {
  const navigate = useNavigate();
  const handleButtonClick = () => { 
    navigate('/response'); 
  }
  return (
    <div>
        <Tagline />
        <StartButton text={"Click to Start"} handleButtonClick={handleButtonClick}/>
        <AboutUs />
        <ContactUs />
    </div>
  )
}

export default Home