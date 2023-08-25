import React from 'react'
import Box from '@mui/material/Box';
import Typography  from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import '../responseGenerator.css'
function Inputfields({label,handleChange}) {
  
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
        <Typography>{label}</Typography>
        <TextField
          className="customSelectField"
          name={label}
          onChange={handleChange}
        >
        </TextField>
        
      </div> 
    </Box>
  )
}

export default Inputfields