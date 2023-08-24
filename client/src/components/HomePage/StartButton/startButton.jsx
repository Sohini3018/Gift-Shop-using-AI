import React from 'react';

import './startButton.css';
function StartButton({text,handleButtonClick}) {
  
  return (
    <div className='start-button'>
        <button onClick={handleButtonClick}>{text}</button>
    </div>
  )
}

export default StartButton