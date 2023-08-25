import React, { useState } from 'react'
import './responseGenerator.css'
import StartButton from '../HomePage/StartButton/startButton'
import Inputs from './InputForm/inputs'
import Output from './output'

function ResponseGenerator() {
  const [showOutput, setShowOutput] = useState(false);
  const handleOutput =()=>{
    setShowOutput(true);
  }
  return (
    <div className='container'>
        <p className='desc'>Describe your loved one's interests</p>
          <Inputs />
          <StartButton text={"Get Gift Suggestions"} handleButtonClick={handleOutput}/>
          {showOutput && <Output />}
    </div>
    
  )
}

export default ResponseGenerator