
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../auth/auth";
import { doc, deleteDoc } from "firebase/firestore";
import Navbar from "../component/Navbar";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersRef = collection(db, "users");
        const snapshot = await getDocs(usersRef);
        const usersData = snapshot.docs.map((userDoc) => ({
          id: userDoc.id,
          ...userDoc.data(),
        }));
console.log(usersData);

        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [users]);
  const deleteUser = async (user)=>{
    if(user.role === "admin"){
         alert("Admin account cannot be deleted here.");
    return;
    }
    
    const confirm = window.confirm(`Are you sure you want to delete ${user.email}`)
    if(!confirm) return
try {
    await deleteDoc(doc(db, "users",user.id));
    setUsers((prevUser)=> prevUser.filter((item)=> {item.id !== item.id
     console.log(item.id)}
    ))
    alert("Delete SuccessFully")

} catch (error) {
    console.log(error);
    
}  }

  if (loading) {
    return <h2>Loading users...</h2>;
  }

  return (
  <><Navbar />
    <div>
      <h1>Admin Dashboard</h1>
      <h2>All Registered Users</h2>

      {users.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name || "No name"}</p>
          <p>Email: {user.email || "No email"}</p>
          <p>Role: {user.role || "No role"}</p>
          <hr />
           <div className="flex gap-2">
      <button
        onClick={() => deleteUser(user)}
        className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
      >
        Delete
      </button>

      {/* <button
        onClick={() => logoutUser(user)}
        className="rounded-lg bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
      >
        Logout
      </button> */}
    </div>
        </div>
      ))}
    </div></>
  );
}

export default AdminDashboard;
