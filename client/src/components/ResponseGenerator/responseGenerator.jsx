import React, { useState } from 'react'
import './responseGenerator.css'
import StartButton from '../HomePage/StartButton/startButton'
import Inputs from './InputForm/inputs'
import Output from './output'

function ResponseGenerator() {
  const [showOutput, setShowOutput] = useState(false);
  const [btnText, setBtnText] = useState("Get Gift Suggestions")
  const handleOutput =()=>{
    setShowOutput(true);
    setBtnText("Genarate again");
  }
  return (
    <div className='container'>
        <p className='desc'>Describe your loved one's interests</p>
          <Inputs />
          <StartButton text={btnText} handleButtonClick={handleOutput}/>
          {showOutput && <Output/>}
    </div>
    
  )
}

export default ResponseGenerator