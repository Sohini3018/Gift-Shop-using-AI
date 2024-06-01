import React, { useState } from 'react';
import Inputfields from './inputfields'
import StartButton from '../../HomePage/StartButton/startButton';
import Output from '../output';

function Inputs() {
  const [inputText, setInputText] = useState({
    Food: '',
    Serving: '',
  });

  const [outputData, setOutputData] = useState(null);
  const [showOutput, setShowOutput] = useState(false);
  const [btnText, setBtnText] = useState("Calculate Calories");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputText((prevText) => ({
      ...prevText,
      [name]: value === "__invalid_default_value__" ? "" : value,
    }));
  };

  const sendDataToBackend = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputText),
      });
      const data = await response.json();
      console.log(data.foodCalories);
      setOutputData(data.foodCalories);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOutput = () => {
    setShowOutput(true);
    setBtnText("Generate again");
    sendDataToBackend();
  };

  return (
    <div className='container'>
    <div className='input-field'>
      <Inputfields label={"Food"} handleChange={handleChange}/>
      <Inputfields label={"Serving"} handleChange={handleChange}/>
    </div>
    <StartButton text={btnText} handleButtonClick={handleOutput} />
      {showOutput && <Output data={outputData} isLoading={isLoading} />}
    </div>
  );
}

export default Inputs;
