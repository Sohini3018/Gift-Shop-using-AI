import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './responseGenerator.css';
import {Typography, styled} from '@mui/material';

export default function SelectTextFields({label,options}) {
 
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
          id="outlined-select-currency"
          select
          defaultValue={" "}
          className="customSelectField"
          
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