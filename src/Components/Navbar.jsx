import React from 'react'
import {AppBar,Toolbar,Box, Typography, Button, } from '@mui/material'
import { Link } from  'react-router-dom'
const Navbar = () => {
  return (
    
        <Box  sx={{flexGrow:1}}>
             <AppBar position='sticky'>
                <Toolbar>
                    <Typography variant='h6'color={'black'} align='centre' sx={{flexGrow:5}}>
                        BLOG DASHBOARD
                    </Typography>
                    <Button  style={{textAlign:'center'}}variant='contained' color='success'><Link to={'/'}>HOME</Link></Button>
                    <br/>
                    <Button style={{textAlign:'center'}}variant='contained' color='secondary'><Link to={'/add'}>ADD BLOG</Link></Button>
                </Toolbar>
            </AppBar>
        </Box>
   
  )
}

export default Navbar