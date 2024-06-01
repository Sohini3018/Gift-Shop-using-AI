import React from 'react';
import './responseGenerator.css';
import RedeemIcon from '@mui/icons-material/Redeem';
import CircularProgress from '@mui/material/CircularProgress';

function Output({ data, isLoading }) {
  return (
    <div className='output-box'>
      {isLoading ? (
        <div className='loading'>
          
          <p>Estimation is Progress...<CircularProgress /></p>
        </div>
      ) : (
        <div className='gift-ideas'>
          <p>
            Here's the estimated Calorie Count! <RedeemIcon style={{color:"#f4526f"}}/> 
          </p><p>{data} Calories</p>
        </div>
      )}
    </div>
  );
}

export default Output;
