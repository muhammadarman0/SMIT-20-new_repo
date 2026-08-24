import React from 'react'
import loader from './component/loader'
import Navbar from './component/Navbar'
import SideBar from './component/sideBar'
import './App.css'
const App = () => {
  return (
    <>
      {loader()}
      {Navbar()}
      <SideBar />
    </>
  )
}

export default App