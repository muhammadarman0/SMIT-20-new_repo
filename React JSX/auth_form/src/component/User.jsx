
import React from "react";
import { doc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/auth";
import { Link } from "react-router-dom";

const User = ({
  data,
  setEditIsUser,
  setUserDataEdit,
  setUsers,
}) => {
  const singleDocEdit = async (id) => {
    try {
      const docRef = doc(db, "users", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserDataEdit({
          ...docSnap.data(),
          id: docSnap.id,
        });
      } else {
        console.log("No such document found!");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };

  const editHandelt = () => {
    setEditIsUser(true);
    singleDocEdit(data.id);
  };

  const deleteHandler = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));

      setUsers((prevUsers) =>
        prevUsers.filter((user) => user.id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 px-4 py-12 text-white">

      <main className="flex justify-center">

        <div className="w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-gray-900 shadow-2xl transition duration-300 hover:-translate-y-1 hover:border-purple-500/40">

          {/* Header */}
          <Link to={`/user/${data.id}`} className="block">

            <div className="relative overflow-hidden bg-gradient-to-r from-purple-600/20 via-blue-600/10 to-transparent p-8">

              {/* Background glow */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-600/20 blur-3xl" />

              <div className="relative flex items-center justify-between">

                <div>
                  <p className="mb-1 text-sm font-medium text-purple-400">
                    USER PROFILE
                  </p>

                  <h2 className="text-3xl font-bold tracking-tight">
                    User Details
                  </h2>
                </div>

                {/* User ID */}
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
                  ID #{data.id}
                </div>

              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center px-8 pt-8">

              <div className="relative">

                <img
                  src={
                    data.imgUrl ||
                    "https://ui-avatars.com/api/?name=User&background=1f2937&color=fff"
                  }
                  alt={data.fullname || "User"}
                  className="h-32 w-32 rounded-full border-4 border-purple-500/30 object-cover shadow-2xl shadow-purple-500/10"
                />

                {/* Online dot */}
                <span className="absolute bottom-2 right-2 h-5 w-5 rounded-full border-4 border-gray-900 bg-green-500" />

              </div>

            </div>

            {/* User Name */}
            <div className="px-8 pt-5 text-center">

              <h3 className="text-2xl font-bold text-white">
                {data.fullname}
              </h3>

              <p className="mt-1 text-sm text-purple-400">
                @{data.username}
              </p>

            </div>

            {/* User Information */}
            <div className="space-y-4 p-8">

              {/* Full Name */}
              <div className="rounded-2xl border border-white/5 bg-gray-800/70 p-4 transition hover:border-purple-500/30 hover:bg-gray-800">

                <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  Full Name
                </p>

                <p className="mt-1 text-lg font-semibold text-white">
                  {data.fullname}
                </p>

              </div>

              {/* Username */}
              <div className="rounded-2xl border border-white/5 bg-gray-800/70 p-4 transition hover:border-blue-500/30 hover:bg-gray-800">

                <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  Username
                </p>

                <p className="mt-1 text-lg font-semibold text-white">
                  @{data.username}
                </p>

              </div>

              {/* Email */}
              <div className="rounded-2xl border border-white/5 bg-gray-800/70 p-4 transition hover:border-cyan-500/30 hover:bg-gray-800">

                <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  Email
                </p>

                <p className="mt-1 break-all text-lg font-semibold text-white">
                  {data.email}
                </p>

              </div>

              {/* Age */}
              <div className="rounded-2xl border border-white/5 bg-gray-800/70 p-4 transition hover:border-green-500/30 hover:bg-gray-800">

                <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  Age
                </p>

                <p className="mt-1 text-lg font-semibold text-white">
                  {data.age}
                </p>

              </div>

            </div>

          </Link>

          {/* Buttons */}
          <div className="flex gap-3 px-8 pb-8">

            {/* Edit */}
            <button
              onClick={editHandelt}
              className="flex-1 rounded-xl border border-blue-500/30 bg-blue-500/10 px-5 py-3 font-semibold text-blue-400 transition duration-300 hover:bg-blue-500 hover:text-white"
            >
              ✏️ Edit
            </button>

            {/* Delete */}
            <button
              onClick={() => deleteHandler(data.id)}
              className="flex-1 rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-3 font-semibold text-red-400 transition duration-300 hover:bg-red-500 hover:text-white"
            >
              🗑️ Delete
            </button>

          </div>

        </div>

      </main>

    </div>
  );
};

export default User;


