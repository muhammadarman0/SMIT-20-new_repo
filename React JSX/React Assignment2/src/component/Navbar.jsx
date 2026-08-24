import React from 'react'

const Navbar = () => {
    return (
        <>
        <nav className='navbar'>
            <div className="logo">
                PostHub
            </div>

            <div className="search-box">

                <input type="text" id="searchInput" placeholder="Search posts..."></input>

                    <button id="searchBtn">
                        Search
                    </button>

            </div>

        </nav >
</>
  )
}

export default Navbar