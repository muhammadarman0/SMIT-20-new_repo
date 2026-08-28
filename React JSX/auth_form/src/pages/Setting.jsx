import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="min-h-screen bg-[#09090b] px-4 py-10 text-white">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="mt-2 text-sm text-gray-400">
            Manage your account and application preferences.
          </p>
        </div>

        {/* Profile Settings */}
        <div className="mb-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-1 text-lg font-semibold">Profile Settings</h2>

          <p className="mb-5 text-sm text-gray-500">
            Update your personal information.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-purple-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">Email</label>

              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-purple-500"
              />
            </div>
          </div>
        </div>

        {/* Appearance */}
        <div className="mb-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-1 text-lg font-semibold">Appearance</h2>

          <p className="mb-5 text-sm text-gray-500">
            Customize how the dashboard looks.
          </p>

          <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <div>
              <h3 className="text-sm font-medium text-gray-200">Dark Mode</h3>

              <p className="mt-1 text-xs text-gray-500">
                Use dark theme across the application.
              </p>
            </div>

            <div className="flex h-6 w-11 items-center rounded-full bg-purple-600 p-1">
              <div className="h-4 w-4 translate-x-5 rounded-full bg-white" />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="mb-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-1 text-lg font-semibold">Notifications</h2>

          <p className="mb-5 text-sm text-gray-500">
            Manage your notification preferences.
          </p>

          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-xl border border-white/10 p-4">
              <span className="text-sm text-gray-300">Email Notifications</span>

              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 accent-purple-600"
              />
            </div>

            <div className="flex items-center justify-between rounded-xl border border-white/10 p-4">
              <span className="text-sm text-gray-300">Dashboard Alerts</span>

              <input type="checkbox" className="h-4 w-4 accent-purple-600" />
            </div>
          </div>
        </div>

        {/* Save */}
        <div className="flex justify-end">
          <Link to={"/"}>
            {" "}
            <button className="cursor-pointer rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-700">
              Save Changes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Settings;
