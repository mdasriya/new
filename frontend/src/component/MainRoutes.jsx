import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Books from './Books'
import Bookadd from './Bookadd'
import HomePage from './HomePage'

const MainRoutes = () => {
  return (
    <div>
     <Routes>

  <Route path='/signup' element={<Signup />}></Route>
  <Route path='/login' element={<Login />}></Route>
  <Route path='/books' element={<Books />}></Route>
  <Route path='/add' element={<Bookadd />}></Route>
</Routes> 
    </div>
  )
}

export default MainRoutes
