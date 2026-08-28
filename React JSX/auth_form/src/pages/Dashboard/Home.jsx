import React, { useEffect, useState } from "react";
import User from "../../component/User";
import Navbar from "../../component/Navbar";
import axios from "axios";
import { data } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);
  const userData = async () => {
    const result = await axios.get(`https://dummyjson.com/users`);
    setUser(result.data.users);
  };

  useEffect(() => {
    userData();
  }, []);
  return (
    <>
      {/* Navbar Layout ma hai */}
      {/* Hero */}
      <div className="flex flex-wrap justify-center bg-gray-950">
        {users.map((user) => (
          <User key={user.id} data={user} />
        ))}
      </div>
    </>
  );
};

export default Home;
