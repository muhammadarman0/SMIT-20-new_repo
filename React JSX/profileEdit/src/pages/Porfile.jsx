import React, { useContext } from "react";
import { Link } from "react-router-dom";
import profileContext from "../Context/ProfileContext";
import themeContext from "../Context/ThemeContext";
const ProfileEdit = () => {
  const [profile] = useContext(profileContext);
  const [theme, toggleTheme] = useContext(themeContext);
  return (
    <div
      className={`${theme === "Dark" ? "bg-[#0b0b10] text-white" : "bg-slate-50 text-slate-900"} min-h-screen px-6 py-8`}
    >
      {" "}
      <div className="mx-auto max-w-5xl">
        {" "}
        {/* Header */}{" "}
        <div className="mb-8">
          {" "}
          <h1 className="text-3xl font-bold">My Profile</h1>{" "}
          <p
            className={`${theme === "Dark" ? "text-gray-400" : "text-slate-500"} mt-2 text-sm`}
          >
            {" "}
            View your profile information and personal details.{" "}
          </p>{" "}
        </div>{" "}
        {/* Profile Header Card */}{" "}
        <div
          className={`${theme === "Dark" ? "border-white/10 bg-white/[0.04]" : "border-slate-200 bg-white shadow-lg"} overflow-hidden rounded-3xl border`}
        >
          {" "}
          {/* Cover */}{" "}
          <div className="h-36 bg-gradient-to-r from-purple-700/60 via-blue-600/50 to-purple-700/60"></div>{" "}
          {/* Profile Info */}{" "}
          <div className="px-6 pb-6">
            {" "}
            <div className="-mt-14 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              {" "}
              {/* Avatar + Name */}{" "}
              <div className="flex items-end gap-5">
                {" "}
                <div
                  className={`${theme === "Dark" ? "border-[#0b0b10]" : "border-white"} flex h-28 w-28 items-center justify-center rounded-full border-4 bg-gradient-to-br from-purple-600 to-blue-600 text-3xl font-bold shadow-xl shadow-purple-500/20`}
                >
                  {" "}
                  {profile.firstName.slice(0, 1)}
                  {profile.lastName.slice(0, 1)}{" "}
                </div>{" "}
                <div className="pb-2">
                  {" "}
                  <h2 className="text-2xl font-bold">
                    {" "}
                    {profile.firstName}{" "}
                  </h2>{" "}
                  <p
                    className={`${theme === "Dark" ? "text-gray-400" : "text-slate-500"} text-sm`}
                  >
                    {" "}
                    @{profile.lastName}{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              {/* Edit Button */}{" "}
              <Link to={"/setting"}>
                {" "}
                <button
                  className={`${theme === "Dark" ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white" : "bg-gradient-to-r from-purple-600 to-blue-600 text-white"} rounded-xl px-5 py-3 text-sm font-semibold transition hover:scale-[1.02]`}
                >
                  {" "}
                  Edit Profile{" "}
                </button>{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Information */}{" "}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {" "}
          {/* About */}{" "}
          <div
            className={`${theme === "Dark" ? "border-white/10 bg-white/[0.04]" : "border-slate-200 bg-white shadow-lg"} rounded-2xl border p-6 md:col-span-1`}
          >
            {" "}
            <h3 className="text-lg font-semibold">About Me</h3>{" "}
            <p
              className={`${theme === "Dark" ? "text-gray-200" : "text-slate-700"} mt-1 text-sm font-medium`}
            >
              {" "}
              {profile.bio}{" "}
            </p>{" "}
          </div>{" "}
          {/* Personal Details */}{" "}
          <div
            className={`${theme === "Dark" ? "border-white/10 bg-white/[0.04]" : "border-slate-200 bg-white shadow-lg"} rounded-2xl border p-6 md:col-span-2`}
          >
            {" "}
            <h3 className="text-lg font-semibold">
              {" "}
              Personal Information{" "}
            </h3>{" "}
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {" "}
              {/* First Name */}{" "}
              <div>
                {" "}
                <p
                  className={`${theme === "Dark" ? "text-gray-500" : "text-slate-500"} text-xs`}
                >
                  {" "}
                  First Name{" "}
                </p>{" "}
                <p
                  className={`${theme === "Dark" ? "text-gray-200" : "text-slate-900"} mt-1 text-sm font-medium`}
                >
                  {" "}
                  {profile.firstName}{" "}
                </p>{" "}
              </div>{" "}
              {/* Last Name */}{" "}
              <div>
                {" "}
                <p
                  className={`${theme === "Dark" ? "text-gray-500" : "text-slate-500"} text-xs`}
                >
                  {" "}
                  Last Name{" "}
                </p>{" "}
                <p
                  className={`${theme === "Dark" ? "text-gray-200" : "text-slate-900"} mt-1 text-sm font-medium`}
                >
                  {" "}
                  {profile.lastName}{" "}
                </p>{" "}
              </div>{" "}
              {/* Email */}{" "}
              <div>
                {" "}
                <p
                  className={`${theme === "Dark" ? "text-gray-500" : "text-slate-500"} text-xs`}
                >
                  {" "}
                  Email{" "}
                </p>{" "}
                <p
                  className={`${theme === "Dark" ? "text-gray-200" : "text-slate-900"} mt-1 text-sm font-medium`}
                >
                  {" "}
                  {profile.email}{" "}
                </p>{" "}
              </div>{" "}
              {/* Phone */}{" "}
              <div>
                {" "}
                <p
                  className={`${theme === "Dark" ? "text-gray-500" : "text-slate-500"} text-xs`}
                >
                  {" "}
                  Phone{" "}
                </p>{" "}
                <p
                  className={`${theme === "Dark" ? "text-gray-200" : "text-slate-900"} mt-1 text-sm font-medium`}
                >
                  {" "}
                  {profile.phone}{" "}
                </p>{" "}
              </div>{" "}
              {/* Location */}{" "}
              <div>
                {" "}
                <p
                  className={`${theme === "Dark" ? "text-gray-500" : "text-slate-500"} text-xs`}
                >
                  {" "}
                  Location{" "}
                </p>{" "}
                <p
                  className={`${theme === "Dark" ? "text-gray-200" : "text-slate-900"} mt-1 text-sm font-medium`}
                >
                  {" "}
                  {profile.location}{" "}
                </p>{" "}
              </div>{" "}
              {/* Username */}{" "}
              <div>
                {" "}
                <p
                  className={`${theme === "Dark" ? "text-gray-500" : "text-slate-500"} text-xs`}
                >
                  {" "}
                  Username{" "}
                </p>{" "}
                <p
                  className={`${theme === "Dark" ? "text-gray-200" : "text-slate-900"} mt-1 text-sm font-medium`}
                >
                  {" "}
                  @{profile.username}{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default ProfileEdit;
