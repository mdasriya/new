import React, { useState } from 'react'
import axios from 'axios';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react'
import { URL } from './url';
const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [city, setCity] = useState("")
    const [age, setAge] = useState("")

    console.log(URL)
const handleSubmit = () => {
    let data = {
        name,
        email,
        pass,
        city,
        age
    }
    axios.post(`${URL}/users/register`,data)
    .then((res)=> {
      console.log(res.data)
    }).catch((err)=> {
      console.log(err.message);
    })
   
    setName("")
    setEmail("")
    setPass("")
    setCity("")
    setAge("")
}

  return (
    <div style={{display:"flex", flexDirection:"column",border:"1px solid gray",padding:"20px", width:"25%", margin:"auto", gap:"20px"}}>
      <FormControl>
  <FormLabel>Name</FormLabel>
  <Input type='email' value={name}  onChange={(e)=>setName(e.target.value)}/>
  <FormLabel>Email address</FormLabel>
  <Input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
  <FormLabel>Pass</FormLabel>
  <Input type='email' value={pass} onChange={(e)=>setPass(e.target.value)}/>
  <FormLabel>city</FormLabel>
  <Input type='email'  value={city} onChange={(e)=>setCity(e.target.value)}/>
  <FormLabel>Age</FormLabel>
  <Input type='email'  value={age} onChange={(e)=>setAge(e.target.value)}/>
  <Button colorScheme='cyan' mt={3} onClick={handleSubmit}>Sign Up!!</Button>
</FormControl>
    </div>
  )
}

export default Signup

