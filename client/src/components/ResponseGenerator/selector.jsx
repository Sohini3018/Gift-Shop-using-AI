import * as React from 'react';
import Box from '@mui/material/Box';
import Typography  from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './responseGenerator.css';

export default function SelectTextFields({label,options,handleChange}) {
 
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
          select
          className="customSelectField"
          defaultValue=""
          name={label}
          onChange={handleChange}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div> 
    </Box>
  );
}