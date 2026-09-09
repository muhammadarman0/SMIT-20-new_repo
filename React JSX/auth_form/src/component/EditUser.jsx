import React, { useEffect, useState } from "react";

import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/auth";

const EditUser = ({ user, setEditIsUser, userDataEdit, updateUser }) => {
  const [Form, setForm] = useState({
    fullname: userDataEdit?.fullname || "",
    username: userDataEdit?.username || "",
    email: userDataEdit?.email || "",
    password: userDataEdit?.password || "",
    age: userDataEdit?.age || "",
  });
  useEffect(() => {
    setForm({
      fullname: userDataEdit?.fullname || "",
      username: userDataEdit?.username || "",
      email: userDataEdit?.email || "",
      password: userDataEdit?.password || "",
      age: userDataEdit?.age || "",
    });
  }, [userDataEdit]);

  const formHandler = (e) => {
    setForm({
      ...Form,
      [e.target.name]: e.target.value,
    });
  };
  const updateData = async (id) => {
    try {
      await updateDoc(doc(db, "users", id), {
        fullname: Form.fullname,
        username: Form.username,
        email: Form.email,
        age: Form.age,
      });

      updateUser({
        id: id,
        fullname: Form.fullname,
        username: Form.username,
        email: Form.email,
        age: Form.age,
      });

      setEditIsUser(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
      {/* Modal */}
      <div className="w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-gray-900 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-purple-600/20 via-blue-600/10 to-transparent px-6 py-5">
          <div>
            <p className="text-sm font-medium text-purple-400">USER PROFILE</p>

            <h2 className="mt-1 text-2xl font-bold text-white">Edit User</h2>
          </div>

          {/* Close */}
          <button
            onClick={() => setEditIsUser(false)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-gray-400 transition hover:bg-red-500/20 hover:text-red-400"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="space-y-5 p-6">
          {/* Full Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Full Name
            </label>

            <input
              type="text"
              name="fullname"
              value={Form.fullname}
              onChange={formHandler}
              className="w-full rounded-xl border border-white/10 bg-gray-800 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            />
          </div>

          {/* Username */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Username
            </label>

            <input
              type="text"
              name="username"
              value={Form.username}
              onChange={formHandler}
              className="w-full rounded-xl border border-white/10 bg-gray-800 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={Form.email}
              onChange={formHandler}
              className="w-full rounded-xl border border-white/10 bg-gray-800 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            />
          </div>

          {/* Password + Age */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={Form.password}
                onChange={formHandler}
                className="w-full rounded-xl border border-white/10 bg-gray-800 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              />
            </div>

            {/* Age */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Age
              </label>

              <input
                type="number"
                name="age"
                value={Form.age}
                onChange={formHandler}
                className="w-full rounded-xl border border-white/10 bg-gray-800 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 border-t border-white/10 bg-gray-950/50 px-6 py-5">
          {/* Cancel */}
          <button
            onClick={() => setEditIsUser(false)}
            className="flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-gray-300 transition hover:bg-white/10 hover:text-white"
          >
            Cancel
          </button>

          {/* Save */}
          <button
            onClick={() => updateData(userDataEdit.id)}
            className="flex-1 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:scale-[1.02] hover:from-purple-500 hover:to-blue-500"
          >
            💾 Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
