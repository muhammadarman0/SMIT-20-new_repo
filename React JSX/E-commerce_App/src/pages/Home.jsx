import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import Button from "../component/Button";
const Home = () => {
  const navigate = useNavigate();

  const logOutHandler = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("User signed out successfully");
      })
      .catch((error) => {
        // An error happened.
        console.error("An error happened during sign out", error);
      });
  };
  return (
    <>
      <h1>Home Page</h1>

      <Link to={"/login"}>
        <Button title={"Log Out"} handler={logOutHandler}/>
      </Link>
    </>
  );
};

export default Home;
