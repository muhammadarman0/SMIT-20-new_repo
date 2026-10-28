import React from 'react'
import Login from './page/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminDashboard from './page/AdminDashboard'
import UserDashboard from './page/UserDashboard'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route  element={<ProtectedRoute />}>   
           <Route path='/admin' element={<AdminDashboard />} />
       </Route>
      <Route path='/user' element={<UserDashboard />} />

      <Route path='/' element={<Login />} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App