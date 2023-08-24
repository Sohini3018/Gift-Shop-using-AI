import React, { useState } from 'react'
import Selector from './selector'
import inputLabels from './inputLabels'
import './responseGenerator.css'
import StartButton from '../HomePage/StartButton/startButton'
import Output from './output'
function ResponseGenerator() {
  const [showOutput, setShowOutput] = useState(false);
  const handleOutput =()=>{
    setShowOutput(true);
  }
  return (
    <div className='container'>
        <p className='desc'>Describe your loved one's interests</p>
        <div className='input-field'>
          {inputLabels.map((inputText)=>{
            return <Selector key={inputText.label} label={inputText.label}  options={inputText.options}/>
          })}
        </div>
        <StartButton text={"Get Gift Suggestions"} handleButtonClick={handleOutput}/>
        {showOutput && <Output />}
        
    </div>
  )
}

export default ResponseGenerator