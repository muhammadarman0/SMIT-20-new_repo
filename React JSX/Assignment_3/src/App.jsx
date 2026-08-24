import React, { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Sidebar from './component/SideBar'
import RecipeDetail from './component/RecipeDetail'

const App = () => {
  const [selectRecipe, setSelectRecipe] = useState(null)

  const [search, setSearch] = useState("")
  return (
    <>
      <Navbar setSearch={setSearch} />
      <div className="layout">
        <Sidebar setSelectRecipe={setSelectRecipe} search={search} />
        <RecipeDetail recipe={selectRecipe} />
      </div>
    </>
  )
}

export default App