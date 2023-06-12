import axios from 'axios'
import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react'
import { URL } from './url'
const Login = () => {
const [email, setEmail] = useState("")
const [pass, setPass] = useState("")
  const handleLogin = () => {
 const data = {
  email,pass
 }
 axios.post(`${URL}/users/login`, data)
 .then((res)=> {
   console.log(res.data)
   localStorage.setItem("token", res.data.token)
 })
 setEmail("")
 setPass("")
  }
  return (
    <div style={{display:"flex", flexDirection:"column",border:"1px solid #CBD5E0",padding:"20px", width:"20%", margin:"auto",marginTop:"50px", gap:"20px"}}>
          <FormControl>
 
  <FormLabel>Email address</FormLabel>
  <Input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
  <FormLabel>Pass</FormLabel>
  <Input type='email' value={pass} onChange={(e)=>setPass(e.target.value)}/>
  <Button colorScheme='cyan' mt={3} onClick={handleLogin}>LOGIN !!</Button>
</FormControl>
    </div>
  )
}

export default Login
