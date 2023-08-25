import React, { useState } from 'react'
import Selector from './selector'
import inputLabels from './inputLabels'
import './responseGenerator.css'
import StartButton from '../HomePage/StartButton/startButton'
import Output from './output'
import Inputfields from './inputfields'


function ResponseGenerator() {
  const [showOutput, setShowOutput] = useState(false);
  
  const handleOutput =()=>{
    setShowOutput(true);
    console.log(inputText)
  }
  const [inputText, setInputText] = useState({"Recipient's Relation":"","Recipient's Gender":"","Recipient's Age":"",Budget:"","Recipient's Interests":"","State the Ocassion":""});
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setInputText((prevText) => ({
      ...prevText,
      [name]: value === "__invalid_default_value__" ? "" : value,
    }));
  };
  
  
  return (
    <div className='container'>
        <p className='desc'>Describe your loved one's interests</p>
        <div className='input-field'>
          {inputLabels.map((inputText)=>{
            return <Selector key={inputText.label} label={inputText.label}  options={inputText.options} handleChange={handleChange}/>
          })}
          <Inputfields label={"Recipient's Interests"} handleChange={handleChange}/>
          <Inputfields label={"State the Ocassion"} handleChange={handleChange}/>
          
        </div>
        <StartButton text={"Get Gift Suggestions"} handleButtonClick={handleOutput}/>
        {showOutput && <Output output={inputText}/>}
        
    </div>
  )
}

export default ResponseGenerator