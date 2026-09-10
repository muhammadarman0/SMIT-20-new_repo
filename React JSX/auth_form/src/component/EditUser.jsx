import React, { useEffect, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/auth";
import { uploadImage } from "../cloudinary/cloudinary.js";

const EditUser = ({ setEditIsUser, userDataEdit, updateUser }) => {
  const [Form, setForm] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    age: "",
    img: null,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setForm({
      fullname: userDataEdit?.fullname || "",
      username: userDataEdit?.username || "",
      email: userDataEdit?.email || "",
      password: "",
      age: userDataEdit?.age || "",
      img: null,
    });
  }, [userDataEdit]);

  const formHandler = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const imageHandler = (e) => {
    setForm((prev) => ({
      ...prev,
      img: e.target.files[0],
    }));
  };

  const updateData = async (id) => {
    if (
      Form.fullname.trim() === "" ||
      Form.username.trim() === "" ||
      Form.email.trim() === "" ||
      Form.age === ""
    ) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      // Existing image
      let imgUrl = userDataEdit?.imgUrl || "";

      // Upload only if new image selected
      if (Form.img) {
        imgUrl = await uploadImage(Form.img);
      }

      // Update Firestore
      await updateDoc(doc(db, "users", id), {
        fullname: Form.fullname,
        username: Form.username,
        email: Form.email,
        age: Form.age,
        userImg: imgUrl,
      });

      // Update UI immediately
      updateUser({
        id: id,
        fullname: Form.fullname,
        username: Form.username,
        email: Form.email,
        age: Form.age,
        userImg: imgUrl,
      });

      setEditIsUser(false);
    } catch (error) {
      console.log("Update Error:", error);
      alert("Something went wrong while updating user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-md">
      {/* Modal */}
      <div className="w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-gray-900 shadow-2xl">
        {/* Header */}
        <div className="relative overflow-hidden border-b border-white/10 px-6 py-6">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-600/20 blur-3xl" />

          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold tracking-widest text-purple-400">
                USER PROFILE
              </p>

              <h2 className="mt-1 text-2xl font-bold text-white">Edit User</h2>

              <p className="mt-1 text-sm text-gray-500">
                Update your profile information
              </p>
            </div>

            <button
              onClick={() => setEditIsUser(false)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-gray-400 transition hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="max-h-[70vh] space-y-5 overflow-y-auto p-6">
          {/* Profile Image */}
          <div className="rounded-2xl border border-white/10 bg-gray-950/50 p-4">
            <label className="mb-3 block text-sm font-semibold text-gray-300">
              Profile Image
            </label>

            <div className="flex flex-col items-center gap-4 sm:flex-row">
              {/* Current Image */}
              <div className="relative">
                <img
                  src={
                    Form.img
                      ? URL.createObjectURL(Form.img)
                      : userDataEdit?.imgUrl ||
                        "https://via.placeholder.com/100"
                  }
                  alt="Profile"
                  className="h-24 w-24 rounded-2xl border-2 border-purple-500/30 object-cover shadow-lg"
                />

                <div className="absolute -bottom-2 -right-2 rounded-lg border border-gray-800 bg-purple-600 px-2 py-1 text-xs text-white">
                  📷
                </div>
              </div>

              {/* File Input */}
              <div className="flex-1">
                <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-gray-700 bg-gray-800/50 px-4 py-5 transition hover:border-purple-500 hover:bg-purple-500/5">
                  <span className="text-2xl">📁</span>

                  <span className="mt-2 text-sm font-medium text-gray-300">
                    Choose new image
                  </span>

                  <span className="mt-1 text-xs text-gray-500">
                    PNG, JPG or WEBP
                  </span>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={imageHandler}
                    className="hidden"
                  />
                </label>

                {Form.img && (
                  <p className="mt-2 truncate text-xs text-purple-400">
                    Selected: {Form.img.name}
                  </p>
                )}
              </div>
            </div>
          </div>

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
              placeholder="Enter full name"
              className="w-full rounded-xl border border-white/10 bg-gray-800 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
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
              placeholder="Enter username"
              className="w-full rounded-xl border border-white/10 bg-gray-800 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
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
              placeholder="Enter email"
              className="w-full rounded-xl border border-white/10 bg-gray-800 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
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
                placeholder="Password"
                className="w-full rounded-xl border border-white/10 bg-gray-800 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              />

              <p className="mt-1 text-xs text-gray-600">
                Password is handled by Firebase Auth
              </p>
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
                placeholder="Age"
                className="w-full rounded-xl border border-white/10 bg-gray-800 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 border-t border-white/10 bg-gray-950/70 px-6 py-5">
          {/* Cancel */}
          <button
            onClick={() => setEditIsUser(false)}
            disabled={loading}
            className="flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-gray-300 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            Cancel
          </button>

          {/* Save */}
          <button
            onClick={() => updateData(userDataEdit.id)}
            disabled={loading}
            className="flex-1 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:scale-[1.02] hover:from-purple-500 hover:to-blue-500 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
          >
            {loading ? "Updating..." : "💾 Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
