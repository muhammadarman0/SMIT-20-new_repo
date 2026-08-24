import React, { useEffect, useState } from 'react'
import User from '../../component/User'
import axios from 'axios'

const Home = () => {
    const [users, setUser] = useState([])

    const userData = async () => {
        const result = await axios.get(`https://dummyjson.com/users`)
        // console.log(result);
        setUser(result.data.users)
    }
    console.log(users);

    useEffect(() => {
        userData()
    }, [])
    return (
        <>
            <nav className="border-b border-white/10 bg-gray-900 px-6 py-4">
                <h1 className="text-2xl font-bold text-white">
                    Dashboard
                </h1>
            </nav>        <div className='flex flex-wrap justify-center bg-gray-950'>

                {users.map((user) => (<User key={user.id} data={user} />))}
            </div>
        </>
    )
}

export default Home