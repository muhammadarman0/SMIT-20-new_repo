
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../auth/auth";
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

        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

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
        </div>
      ))}
    </div></>
  );
}

export default AdminDashboard;
