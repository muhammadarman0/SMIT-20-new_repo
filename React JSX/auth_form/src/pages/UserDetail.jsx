import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const UserDetail = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  //   const location = useLocation();
  const userData = async () => {
    const result = await axios.get(`https://dummyjson.com/users/${userId}`);
    // console.log(result);
    setUser(result.data);
    console.log(user);
  };

  useEffect(() => {
    userData();
  }, [userId]);

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-950 text-white">
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 px-4 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-medium text-purple-400">User Profile</p>

          <h1 className="mt-2 text-3xl font-bold">User Details</h1>

          <p className="mt-2 text-sm text-gray-500">
            View complete information about this user.
          </p>
        </div>

        {/* Main Profile Card */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl">
          {/* Top Section */}
          <div className="relative border-b border-white/10 p-6 sm:p-8">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10" />

            <div className="relative flex flex-col items-center gap-5 sm:flex-row">
              {/* Profile Image */}
              <img
                src={user.image}
                alt={`${user.firstName} ${user.lastName}`}
                className="h-28 w-28 rounded-2xl border border-white/10 bg-gray-800 object-cover shadow-xl"
              />

              {/* Name */}
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold">
                  {user.firstName} {user.lastName}
                </h2>

                <p className="mt-1 text-gray-400">@{user.username}</p>

                <span className="mt-3 inline-block rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                  Active User
                </span>
              </div>
            </div>
          </div>

          {/* User Information */}
          <div className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Email */}
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs uppercase tracking-wider text-gray-500">
                Email
              </p>

              <p className="mt-2 break-all text-sm font-medium text-gray-200">
                {user.email}
              </p>
            </div>

            {/* Phone */}
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs uppercase tracking-wider text-gray-500">
                Phone
              </p>

              <p className="mt-2 text-sm font-medium text-gray-200">
                {user.phone}
              </p>
            </div>

            {/* Age */}
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs uppercase tracking-wider text-gray-500">
                Age
              </p>

              <p className="mt-2 text-sm font-medium text-gray-200">
                {user.age} Years
              </p>
            </div>

            {/* Gender */}
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs uppercase tracking-wider text-gray-500">
                Gender
              </p>

              <p className="mt-2 text-sm font-medium capitalize text-gray-200">
                {user.gender}
              </p>
            </div>

            {/* Blood Group */}
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs uppercase tracking-wider text-gray-500">
                Blood Group
              </p>

              <p className="mt-2 text-sm font-medium text-gray-200">
                {user.bloodGroup}
              </p>
            </div>

            {/* Eye Color */}
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs uppercase tracking-wider text-gray-500">
                Eye Color
              </p>

              <p className="mt-2 text-sm font-medium capitalize text-gray-200">
                {user.eyeColor}
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="border-t border-white/10 p-6 sm:p-8">
            <h3 className="text-lg font-semibold">Address Information</h3>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-xs text-gray-500">Address</p>

                <p className="mt-1 text-sm text-gray-300">
                  {user.address?.address}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">City</p>

                <p className="mt-1 text-sm text-gray-300">
                  {user.address?.city}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">State</p>

                <p className="mt-1 text-sm text-gray-300">
                  {user.address?.state}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Postal Code</p>

                <p className="mt-1 text-sm text-gray-300">
                  {user.address?.postalCode}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
