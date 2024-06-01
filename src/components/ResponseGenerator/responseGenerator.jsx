import './responseGenerator.css'
import Inputs from './InputForm/inputs'


function ResponseGenerator() {
  
  return (
    <div className='container'>
        <p className='desc'>Describe what you ate today</p>
          <Inputs />
          
    </div>
    
  )
}

export default ResponseGenerator