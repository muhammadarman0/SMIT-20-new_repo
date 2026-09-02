import { useContext, useState } from "react";
import profileContext from "../Context/ProfileContext";
import themeContext from "../Context/ThemeContext";
import { useNavigate } from "react-router-dom";

const Setting = () => {
  const [profile, updateProfile] = useContext(profileContext);
  const [theme] = useContext(themeContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState(profile);

  const HandleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    updateProfile(formData);
    navigate("/profile");
  };

  const handleCancel = () => {
    setFormData(profile);
  };

  const isDark = theme === "Dark";

  return (
    <div
      className={`min-h-screen px-6 py-8 ${
        isDark ? "bg-[#0b0b10] text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <h1 className="text-3xl font-bold">Profile Settings</h1>

        <p
          className={`mt-1 text-sm ${
            isDark ? "text-gray-400" : "text-slate-500"
          }`}
        >
          Manage your profile information and personal details.
        </p>

        {/* Profile Card */}
        <div
          className={`mt-8 rounded-2xl border p-6 shadow-2xl ${
            isDark
              ? "border-white/10 bg-white/[0.04]"
              : "border-slate-200 bg-white shadow-slate-200"
          }`}
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            {/* Profile Logo */}
            {formData.firstName || formData.lastName ? (
              <div className="relative">
                <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-3xl font-bold text-white">
                  {formData.firstName?.slice(0, 1)}
                  {formData.lastName?.slice(0, 1)}
                </div>

                <button
                  className={`absolute -bottom-1 -right-1 rounded-full px-3 py-1 text-xs font-medium transition ${
                    isDark
                      ? "border border-[#0b0b10] bg-purple-600 text-white hover:bg-purple-500"
                      : "border border-white bg-purple-600 text-white hover:bg-purple-500"
                  }`}
                >
                  Edit
                </button>
              </div>
            ) : null}

            {/* Profile Info */}
            {(formData.firstName || formData.lastName || formData.email) && (
              <div>
                {(formData.firstName || formData.lastName) && (
                  <h2 className="text-xl font-semibold">
                    {formData.firstName} {formData.lastName}
                  </h2>
                )}

                {formData.email && (
                  <p
                    className={`mt-1 text-sm ${
                      isDark ? "text-gray-400" : "text-slate-500"
                    }`}
                  >
                    {formData.email}
                  </p>
                )}

                {(formData.username || formData.bio) && (
                  <p className="mt-2 text-xs text-purple-500">
                    {formData.username ? `@${formData.username}` : "Profile"}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Personal Information */}
        <div
          className={`mt-6 rounded-2xl border p-6 ${
            isDark
              ? "border-white/10 bg-white/[0.04]"
              : "border-slate-200 bg-white shadow-lg"
          }`}
        >
          <div className="mb-6">
            <h2 className="text-xl font-semibold">Personal Information</h2>

            <p
              className={`mt-1 text-sm ${
                isDark ? "text-gray-400" : "text-slate-500"
              }`}
            >
              Update your personal details.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* First Name */}
            <div>
              <label
                className={`mb-2 block text-sm ${
                  isDark ? "text-gray-300" : "text-slate-700"
                }`}
              >
                First Name
              </label>

              <input
                name="firstName"
                value={formData.firstName}
                onChange={HandleChange}
                type="text"
                placeholder="First name"
                className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                  isDark
                    ? "border-white/10 bg-white/[0.05] text-white placeholder-gray-500 focus:border-purple-500 focus:bg-white/[0.07]"
                    : "border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:border-purple-500 focus:bg-white"
                }`}
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                className={`mb-2 block text-sm ${
                  isDark ? "text-gray-300" : "text-slate-700"
                }`}
              >
                Last Name
              </label>

              <input
                name="lastName"
                value={formData.lastName}
                onChange={HandleChange}
                type="text"
                placeholder="Last name"
                className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                  isDark
                    ? "border-white/10 bg-white/[0.05] text-white placeholder-gray-500 focus:border-purple-500 focus:bg-white/[0.07]"
                    : "border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:border-purple-500 focus:bg-white"
                }`}
              />
            </div>

            {/* Username */}
            <div>
              <label
                className={`mb-2 block text-sm ${
                  isDark ? "text-gray-300" : "text-slate-700"
                }`}
              >
                Username
              </label>

              <input
                name="username"
                value={formData.username}
                onChange={HandleChange}
                type="text"
                placeholder="@username"
                className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                  isDark
                    ? "border-white/10 bg-white/[0.05] text-white placeholder-gray-500 focus:border-purple-500 focus:bg-white/[0.07]"
                    : "border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:border-purple-500 focus:bg-white"
                }`}
              />
            </div>

            {/* Email */}
            <div>
              <label
                className={`mb-2 block text-sm ${
                  isDark ? "text-gray-300" : "text-slate-700"
                }`}
              >
                Email Address
              </label>

              <input
                name="email"
                value={formData.email}
                onChange={HandleChange}
                type="email"
                placeholder="you@example.com"
                className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                  isDark
                    ? "border-white/10 bg-white/[0.05] text-white placeholder-gray-500 focus:border-purple-500 focus:bg-white/[0.07]"
                    : "border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:border-purple-500 focus:bg-white"
                }`}
              />
            </div>

            {/* Phone */}
            <div>
              <label
                className={`mb-2 block text-sm ${
                  isDark ? "text-gray-300" : "text-slate-700"
                }`}
              >
                Phone Number
              </label>

              <input
                name="phone"
                value={formData.phone}
                onChange={HandleChange}
                type="text"
                placeholder="+92 300 1234567"
                className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                  isDark
                    ? "border-white/10 bg-white/[0.05] text-white placeholder-gray-500"
                    : "border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400"
                }`}
              />
            </div>

            {/* Location */}
            <div>
              <label
                className={`mb-2 block text-sm ${
                  isDark ? "text-gray-300" : "text-slate-700"
                }`}
              >
                Location
              </label>

              <input
                name="location"
                value={formData.location}
                onChange={HandleChange}
                type="text"
                placeholder="Karachi, Pakistan"
                className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                  isDark
                    ? "border-white/10 bg-white/[0.05] text-white placeholder-gray-500"
                    : "border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400"
                }`}
              />
            </div>
          </div>

          {/* Bio */}
          <div className="mt-5">
            <label
              className={`mb-2 block text-sm ${
                isDark ? "text-gray-300" : "text-slate-700"
              }`}
            >
              About Me
            </label>

            <textarea
              name="bio"
              value={formData.bio}
              onChange={HandleChange}
              rows="5"
              placeholder="Write something about yourself..."
              className={`w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition ${
                isDark
                  ? "border-white/10 bg-white/[0.05] text-white placeholder-gray-500 focus:border-purple-500 focus:bg-white/[0.07]"
                  : "border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:border-purple-500 focus:bg-white"
              }`}
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={handleCancel}
              className={`cursor-pointer rounded-xl border px-5 py-3 text-sm font-medium transition ${
                isDark
                  ? "border-white/10 text-gray-300 hover:bg-white/[0.06] hover:text-white"
                  : "border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              className="cursor-pointer rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:scale-[1.02] hover:shadow-purple-500/30"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
