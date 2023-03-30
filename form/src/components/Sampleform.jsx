import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Sampleform = () => {
    var[input,setInput] =  useState();


    const inputHandle= (event)=>{
setInput(event.target.value)
console.log(input)
    }
const inputHandle2 = (event)=>{
    setInput(event.target.value)
}
  return (
    <div>
    <Typography>{input}</Typography>
      <TextField variant='outlined' label='First Name' onChange={inputHandle}/>
      <br></br>
      <Typography>{input}</Typography>
      <TextField variant='outlined' label='second name' onChange={inputHandle}/>
           <br></br>
      <Button variant='contained'>submit</Button>
    </div>
  )
}

export default Sampleform
