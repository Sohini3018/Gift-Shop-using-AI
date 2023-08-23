import React from 'react'
import Tagline from './Tagline/tagline';
import StartButton from './StartButton/startButton';
function Home(props) {
    const handleResponsePage = ()=>{
        props.setShowResponse(true);
    }
  return (
    <div>
        <Tagline />
        <StartButton handleResponsePage={handleResponsePage}/>
    </div>
  )
}

export default Home