import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:'flex',backgroundColor:"RGBA(0, 0, 0, 0.16)",padding:"15px 15px", border:"RGBA(0, 0, 0, 0.16)",marginBottom:"10px", alignItems:"center",display:'flex', justifyContent:"space-between"}}>     
   <h1 style={{fontSize:'20px',fontWeight:"bolder"}}>Book Application</h1>
    <Link to="/books">Books</Link>  
    <Link to="/login">Login</Link>  
    <Link to="/signup">Register</Link>  
    <Link to="/add">bookAdd</Link>  
    </div>
   
  )
}

export default Navbar
