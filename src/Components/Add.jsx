import { TextField,Typography } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div style={{textAlign:'center'}}>
        <h1>BLOG NAME:<TextField placeholder="Enter Blogname"></TextField></h1>
        <h1>Description:<TextField placeholder="Enter Description"></TextField></h1>
        <h1>AUTHOR NAME: <TextField placeholder="Enter Author name"></TextField></h1>

    </div>
  )
}

export default Add