import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      {/* Avatar */}
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-600 text-3xl font-bold text-white">
        {user.userName?.charAt(0).toUpperCase()}
      </div>

      {/* User Info */}
      <div className="mt-5 text-center">
        <h2 className="text-2xl font-bold text-gray-800">{user.userName}</h2>

        <p className="mt-1 text-sm text-gray-500">{user.email}</p>
      </div>

      {/* Details */}
      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3">
          <span className="font-medium text-gray-500">Age</span>
          <span className="font-semibold text-gray-800">{user.age}</span>
        </div>

        <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3">
          <span className="font-medium text-gray-500">Account</span>

          {user.isVerified ? (
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-600">
              Verified
            </span>
          ) : (
            <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-600">
              Not Verified
            </span>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-3">
        <button className="flex-1 rounded-lg bg-indigo-600 px-4 py-2.5 font-medium text-white transition hover:bg-indigo-700">
          Edit
        </button>

        <button className="flex-1 rounded-lg bg-red-500 px-4 py-2.5 font-medium text-white transition hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
