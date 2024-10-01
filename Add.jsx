import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Add = () => {
  return (
  <>
   <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Movie Name" variant="outlined" /><br />
      <TextField id="filled-basic" label="Language" variant="filled" />
      <TextField id="standard-basic" label="Description" variant="standard"/> <br />
      <TextField id="filled-basic" label="Year" variant="filled" /><br />
    </Box>
    <Button variant="contained">Submit</Button>
</>
  )
}

export default Add