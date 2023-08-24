import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './responseGenerator.css'
function Inputfields({label}) {
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 2 },
      '& .customSelectField .MuiOutlinedInput-root fieldset': {
        border: '3px solid #eea2a3',
      },
      '&:hover fieldset': {
        outline: 'none',
        borderColor: '#FBA1B7',
        boxShadow: '0 0 10px #FBA1B7',
      },
    }}
    noValidate
    autoComplete="off"
    >
      <div>
        <p>{label}</p>
        <TextField
          defaultValue={" "}
          className="customSelectField"
          
        >
        </TextField>
      </div> 
    </Box>
  )
}

export default Inputfields