import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { URL } from './url'

const Books = () => {

     const [book, setBook] = useState([])
  const [render, setRender] = useState("")
const [open, setOpen] = useState(false)

const renderData = () => {
  setRender(prev => prev+1)
}

useEffect(()=> {
  fetch(`${URL}/books`, {
   headers:{
     "Authorization":`Bearer ${localStorage.getItem("token")}`
   }
  }).then(res=> res.json())
  .then(res => {
   console.log(res);
   setBook(res)
  }).catch(err=>console.log(err))
}, [render])




const data = async() => {
 await fetch(`${URL}/books`, {
    headers:{
      "Authorization":`Bearer ${localStorage.getItem("token")}`
    }
   }).then(res=> res.json())
   .then(res => {
    console.log(res);
    setBook(res)
   }).catch(err=>console.log(err)) 
}


// delete code is here
const handleDelete = async(id) => {

 await axios.delete(`${URL}/books/delete/${id}`,{
    headers:{
           "Content-Type":"application/json",
           authorization: `Bearer ${localStorage.getItem("token")}`
         }
  })
  .then((res)=> console.log(res.data))
  renderData()
  data()
}


const handleUpdate = () => {
  alert("update")
  setOpen(true)
  console.log(open);
}


  return (
    <div style={{width:"70%",margin:"auto", border:"1px solid blue"}}>

      <Table variant='simple'>
      <Thead>
      <Tr>
        <Th>Sr No.</Th>
        <Th>title</Th>
        <Th>author</Th>
        <Th>publishing year</Th>
        <Th>Update</Th>
        <Th>Delete</Th>
      </Tr>
    </Thead>

    {
      book.map((el,i)=> {
        return <Tbody key={el._id}>
          <Tr>
        <Td>{i+1}</Td>
        <Td>{el.title}</Td>
        <Td>{el.author}</Td>
        <Td>{el.publishing_year}</Td>
        <Td color={"green.400"} cursor={"pointer"} onClick={handleUpdate}>Update</Td>
        <Td color={"red.300"} cursor={"pointer"} onClick={(e)=>handleDelete(el._id)}>Delete</Td>
      </Tr>
        </Tbody>
      })
    }  
    </Table>
    </div>
  )
}

export default Books
