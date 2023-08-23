import React from 'react';
import {useNavigate} from 'react-router-dom';
import './startButton.css';
function StartButton(props) {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    props.handleResponsePage(); 
    navigate('/response'); 
  }
  
  return (
    <div className='start-button'>
        <button onClick={handleButtonClick}>Click To Start</button>
    </div>
  )
}

export default StartButton