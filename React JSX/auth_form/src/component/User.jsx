import React from 'react'



const User = ({ data }) => {
    return (
        <div className="min-h-screen bg-gray-950 text-white ">

            {/* Navbar */}
          

            {/* Content */}
            <main className="flex justify-center px-4 py-12">

                {/* User Card */}
                <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-gray-900 p-8 shadow-2xl">

                    <h2 className="mb-7 text-2xl font-bold">
                        User Details
                    </h2>

                    <div className="space-y-4">

                        {/* Full Name */}
                        <div className="rounded-xl bg-gray-800 p-4">
                            <p className="text-sm text-gray-400">
                                Full Name
                            </p>
                            <p className="mt-1 text-lg font-medium">
                                {data.firstName}
                            </p>
                        </div>

                        {/* Username */}
                        <div className="rounded-xl bg-gray-800 p-4">
                            <p className="text-sm text-gray-400">
                                Username
                            </p>
                            <p className="mt-1 text-lg font-medium">
                                {data.username}
                            </p>
                        </div>

                        {/* Email */}
                        <div className="rounded-xl bg-gray-800 p-4">
                            <p className="text-sm text-gray-400">
                                Email
                            </p>
                            <p className="mt-1 text-lg font-medium">
                               {data.email}
                            </p>
                        </div>

                        {/* Password */}
                        <div className="rounded-xl bg-gray-800 p-4">
                            <p className="text-sm text-gray-400">
                                Password
                            </p>
                            <p className="mt-1 text-lg font-medium">
                                {data.password}
                            </p>
                        </div>

                        {/* Age */}
                        <div className="rounded-xl bg-gray-800 p-4">
                            <p className="text-sm text-gray-400">
                                Age
                            </p>
                            <p className="mt-1 text-lg font-medium">
                               {data.age}
                            </p>
                        </div>

                    </div>

                </div>

            </main>

        </div>
    );
};

export default User;