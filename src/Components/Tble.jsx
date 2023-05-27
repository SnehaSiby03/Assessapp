import { Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Tble= () => {
    const [datas,setData] = useState([])

    useEffect(() =>{

        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) =>{
            setData(response.data)

        })
        .catch((error) =>{
            console.log(error)
        })





    })
 return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:"success",fontFamily:"Roboto",fontSize:"20px"}}> BLOG  ID</TableCell>

                        <TableCell style={{color:"success",fontFamily:"Roboto",fontSize:"20px"}}> BLOG TITLE</TableCell>


                    </TableRow>


                </TableHead>

                <TableBody>
                    {datas.map((val,index)=>{
                        return(
                            <TableRow key={index}>

                            <TableCell style={{color:"error",fontFamily:"Roboto",fontSize:"18px"}}>{val.id}</TableCell>
                            <TableCell style={{color:"success",fontFamily:"-apple-system",fontSize:"20px"}}>{val.title}</TableCell>



                        </TableRow>
                         )

                    })}


                </TableBody>
    </Table>

</TableContainer>

    </div>
  )
}

export default Tble