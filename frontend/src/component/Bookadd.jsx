import axios from 'axios'
import React, { useState } from 'react'

import {
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react'
import { URL } from './url'

const Bookadd = () => {
    const [title, setTitle] = useState("")
    const [genre, setGenre] = useState("")
    const [publishing_year, setYear] = useState("")

const adddata = () => {
    let data = {
        title,genre,publishing_year
    }
    fetch(`${URL}/books/add`, {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body:JSON.stringify(data)
    }).then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  setTitle("")
  setGenre("")
  setYear("")
}

  return (
    <div style={{display:"flex", flexDirection:"column",border:"1px solid gray",padding:"20px", width:"25%", margin:"auto", gap:"20px"}}>


      <FormControl>
  <FormLabel>Post Title</FormLabel>
  <Input type='email' value={title} onChange={(e)=>setTitle(e.target.value)}/>
  <FormLabel>Post body</FormLabel>
  <Input type='email' value={genre} onChange={(e)=>setGenre(e.target.value)}/>
  <FormLabel>publishing year</FormLabel>
  <Input type='email' value={publishing_year} onChange={(e)=>setYear(e.target.value)}/>
  <Button colorScheme='cyan' mt={3} onClick={adddata}>ADD BOOK</Button>
</FormControl>
    </div>
  )
}

export default Bookadd
