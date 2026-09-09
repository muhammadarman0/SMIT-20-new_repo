import React, { useEffect, useState } from "react";
import User from "../../component/User";
import Navbar from "../../component/Navbar";
import { collection, getDocs } from "firebase/firestore";
import axios from "axios";
import { data } from "react-router-dom";
import { db } from "../../firebase/auth";
import EditUser from "../../component/EditUser";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [editIsUser, setEditIsUser] = useState(false);
  const [userDataEdit, setUserDataEdit] = useState({});

  const ReadADocument = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      let user = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setUsers(user);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(users);

  useEffect(() => {
    ReadADocument();
  }, []);
  const updateUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === updatedUser.id ? { ...user, ...updatedUser } : user,
      ),
    );
  };
  return (
    <>
      {/* Navbar Layout ma hai */}
      {/* Hero */}
      <div className="flex flex-wrap justify-center bg-gray-950">
        {users.length === 0 ? (
          <>
            <div className="flex flex-row gap-2 mt-50 h-[100vh]">
              <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
              <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
              <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
            </div>
          </>
        ) : (
          users.map((user) => (
            <User
              setUsers={setUsers}
              key={user.id}
              data={user}
              setUserDataEdit={setUserDataEdit}
              setEditIsUser={setEditIsUser}
            />
          ))
        )}
      </div>
      {editIsUser && (
        <EditUser updateUser={updateUser}
          userDataEdit={userDataEdit}
          setUserDataEdit={setUserDataEdit}
          setEditIsUser={setEditIsUser}
        />
      )}
    </>
  );
};

export default Home;
