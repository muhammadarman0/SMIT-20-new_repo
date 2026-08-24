import React from 'react'
import Input from './component/Input'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Dashboard/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<Home />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App