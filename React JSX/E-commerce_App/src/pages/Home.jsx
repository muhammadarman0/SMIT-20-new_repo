import {Link} from 'react-router-dom'
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
  return (
    <>
      <h1>Home Page</h1>

      <Link to={"/login"}><button className='cursor-pointer bg-black text-white'>Login Account</button></Link>
    </>
  );
};

export default Home;
