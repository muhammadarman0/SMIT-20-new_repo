import React from 'react'

const Navbar = (data) => {
    
    let liList = ["Home", "About", "Contact","Profolio"]


    return (
        <nav>
            <div className="userName">
                <div className="itmes">
                    <h2>Muhammad Arman</h2>
                </div>
                <div className="contacts">
                    <ul>
                       {liList.map((liItem) =>(
                        <li>
                            {liItem}
                        </li>
                       ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar