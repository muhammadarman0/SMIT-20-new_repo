import React, { useState } from 'react'
import Weblogo from "../assets/react.svg"
const Navbar = ({ setSearch }) => {
  const [searchVal, setSearchVal] = useState("")
  const handler = () => {
    setSearch(searchVal)
    if(searchVal === ""){
      alert("Search Any Recipes")
      return
    }
  }
  return (
    <nav className="navbar">

      <div className="logo">
        <img src={Weblogo} alt="StyleHub Logo" />
        <h2>Menu<span>Card</span></h2>
      </div>

      <div className="searchBox">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search your style..."
        />

        <button onClick={(e) => setSearchVal(handler)}>
          Search
        </button>
      </div>

    </nav>
  )
}

export default Navbar