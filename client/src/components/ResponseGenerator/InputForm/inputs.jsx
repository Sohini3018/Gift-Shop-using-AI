import React, { useState } from 'react'
import Selector from './selector'
import inputLabels from './inputLabels'
import Inputfields from './inputfields'
function Inputs() {
    const [inputText, setInputText] = useState({"Recipient's Relation":"","Recipient's Gender":"","Recipient's Age":"",Budget:"","Recipient's Interests":"","State the Ocassion":""});
    const handleChange = (e) => {
        const { name, value } = e.target;
      
        setInputText((prevText) => ({
          ...prevText,
          [name]: value === "__invalid_default_value__" ? "" : value,
        }));
      };
    return (
      <div className='input-field'>
          {inputLabels.map((inputText)=>{
            return <Selector key={inputText.label} label={inputText.label}  options={inputText.options} handleChange={handleChange}/>
          })}
          <Inputfields label={"Recipient's Interests"} handleChange={handleChange}/>
          <Inputfields label={"State the Ocassion"} handleChange={handleChange}/>
          
      </div>
  )
}

export default Inputs