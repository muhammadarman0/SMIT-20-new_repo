import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { Mail, User, MapPin, Phone, ArrowLeft, Edit } from "lucide-react";
import { db } from "../firebase/auth";
import EditProfileModal from "../component/EditProfileModal";

const Profile = () => {
  const profileUser = useSelector((state) => state.user.currentUser);
  const [editForm, setEditForm] = useState({
    phone: "",
    address: "",
  });
  console.log(editForm);
  
  const [editOpen, setEditOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProfileData = async () => {
    if (!profileUser?.uid) return;

    try {
      const docRef = doc(db, "profile", profileUser.uid);

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProfile(docSnap.data());
        console.log("Firestore Profile:", docSnap.data());
      } else {
        console.log("User profile is not found");
      }
    } catch (error) {
      console.log("Firestore Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // const setFormHanlderValue

  const openModalHandler = () => {
    setEditOpen(true);
  };

  const handleChange = (type, value) => {
    setEditForm((prev) => ({ ...prev, [type]: value }));
  };
  const handleUpdate = () => {
    console.log("update Profile");
  };
  useEffect(() => {
    getProfileData();
  }, [profileUser]);

  if (!profileUser || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f4f5f6]">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-[#f4f5f6] px-5 py-10">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="mb-1 text-sm tracking-[3px] text-gray-500">
                LUXEWEAR
              </p>

              <h1 className="text-3xl font-semibold text-[#17191b]">
                My Profile
              </h1>
            </div>

            <Link
              to="/"
              className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
            >
              <ArrowLeft size={18} />
              Home
            </Link>
          </div>

          {/* Profile Card */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-[0_15px_50px_rgba(0,0,0,0.07)]">
            {/* Cover */}
            <div className="h-48 bg-[#1b1f21]">
              <div className="flex h-full items-center justify-center">
                <h2 className="text-3xl tracking-[8px] text-white">LUXEWEAR</h2>
              </div>
            </div>

            {/* Profile Content */}
            <div className="px-8 pb-10">
              {/* Avatar */}
              <div className="-mt-16 mb-6 flex items-end justify-between">
                <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-gray-200 shadow-md">
                  {profileUser.photoURL ? (
                    <img
                      src={profileUser.photoURL}
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <User size={55} className="text-gray-500" />
                  )}
                </div>

                <button
                  onClick={openModalHandler}
                  className="flex items-center gap-2 rounded-md bg-[#1b1f21] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#303538]"
                >
                  <Edit size={17} />
                  Edit Profile
                </button>
              </div>

              {/* Name */}
              <div className="mb-8">
                <h2 className="text-3xl font-semibold text-[#17191b]">
                  {profileUser.displayName || "User"}
                </h2>

                <p className="mt-1 text-gray-500">
                  Welcome to your LUXEWEAR profile
                </p>
              </div>

              {/* Information */}
              <div className="grid gap-5 md:grid-cols-2">
                {/* Full Name */}
                <div className="rounded-xl border border-gray-200 p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-lg bg-gray-100 p-2">
                      <User size={19} />
                    </div>

                    <span className="text-sm text-gray-500">Full Name</span>
                  </div>

                  <p className="font-medium text-[#17191b]">
                    {profileUser.displayName || "Not available"}
                  </p>
                </div>

                {/* Email */}
                <div className="rounded-xl border border-gray-200 p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-lg bg-gray-100 p-2">
                      <Mail size={19} />
                    </div>

                    <span className="text-sm text-gray-500">Email Address</span>
                  </div>

                  <p className="font-medium text-[#17191b]">
                    {profileUser.email}
                  </p>
                </div>

                {/* Phone */}
                <div className="rounded-xl border border-gray-200 p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-lg bg-gray-100 p-2">
                      <Phone size={19} />
                    </div>

                    <span className="text-sm text-gray-500">Phone</span>
                  </div>

                  <p
                    className={`font-medium ${
                      profile?.phone ? "text-[#17191b]" : "text-gray-400"
                    }`}
                  >
                    {profile?.phone || "Not added yet"}
                  </p>
                </div>

                {/* Address */}
                <div className="rounded-xl border border-gray-200 p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-lg bg-gray-100 p-2">
                      <MapPin size={19} />
                    </div>

                    <span className="text-sm text-gray-500">Address</span>
                  </div>

                  <p
                    className={`font-medium ${
                      profile?.address ? "text-[#17191b]" : "text-gray-400"
                    }`}
                  >
                    {profile?.address || "Not added yet"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditProfileModal
        editOpen={editOpen}
        setEditOpen={setEditOpen}
        editForm={editForm}
        handleChange={handleChange}
        handleUpdate={handleUpdate}
      />
    </>
  );
};

export default Profile;
