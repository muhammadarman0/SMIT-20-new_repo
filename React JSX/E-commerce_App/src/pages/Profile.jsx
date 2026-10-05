import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Mail, User, MapPin, Phone, ArrowLeft, Edit } from "lucide-react";
import auth, { db } from "../firebase/auth";
import EditProfileModal from "../component/EditProfileModal";
import { updateProfile } from "firebase/auth";
import uploadImageToCloudinary from "../cloudinary/cloudinary";

const Profile = () => {
  const profileUser = useSelector((state) => state.user.currentUser);

  const [editForm, setEditForm] = useState({
    fullName: "",
    phone: "",
    address: "",
    photoURl: null,
    imageFile: null,
    imagePreview: "",
  });

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
        
      } else {
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setEditForm((prev) => ({
      ...prev,
      imageFile: file,
      imagePreview: URL.createObjectURL(file),
    }));
  };

  const openModalHandler = () => {
    setEditForm({
      fullName: profileUser?.displayName || "",
      phone: profile?.phone || "",
      address: profile?.address || "",
      photoURl: profile?.profileImg || profileUser?.photoURL || null,
      imageFile: null,
      imagePreview: profile?.profileImg || profileUser?.photoURL || "",
    });

    setEditOpen(true);
  };

  const handleChange = (type, value) => {
    setEditForm((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleUpdate = async () => {
    if (!profileUser?.uid) return;

    try {
      await updateProfile(auth.currentUser, {
        displayName: editForm.fullName,
      });

      const profileRef = doc(db, "profile", profileUser.uid);

      let imgUrl = editForm.photoURl;

      if (editForm.imageFile) {
        imgUrl = await uploadImageToCloudinary(editForm.imageFile);
      }

      await updateDoc(profileRef, {
        displayName: editForm.fullName,
        phone: editForm.phone,
        address: editForm.address,
        profileImg: imgUrl || "",
      });

      setProfile((prev) => ({
        ...prev,
        displayName: editForm.fullName,
        phone: editForm.phone,
        address: editForm.address,
        profileImg: imgUrl || "",
      }));

      setEditOpen(false);

    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  useEffect(() => {
    getProfileData();
  }, [profileUser]);

  if (!profileUser || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f4f5f6] px-4">
        <p className="text-sm text-gray-500 sm:text-base">Loading profile...</p>
      </div>
    );
  }

  const profileImage = profile?.profileImg || profileUser?.photoURL || "";

  return (
    <>
      <div className="min-h-screen bg-[#f4f5f6] px-3 py-6 sm:px-5 sm:py-8 md:px-6 md:py-10 lg:px-8">
        <div className="mx-auto w-full max-w-[1024px]">
          {/* ================= HEADER ================= */}
          <div className="mb-5 flex items-center justify-between gap-4 sm:mb-7 md:mb-8">
            <div className="min-w-0">
              <p className="mb-1 text-[10px] tracking-[2px] text-gray-500 sm:text-xs sm:tracking-[3px] md:text-sm">
                LUXEWEAR
              </p>

              <h1 className="truncate text-2xl font-semibold text-[#17191b] sm:text-3xl">
                My Profile
              </h1>
            </div>

            <Link
              to="/"
              className="
                flex shrink-0 items-center gap-1.5
                rounded-md border border-gray-300
                bg-white px-3 py-2
                text-xs font-medium text-gray-700
                transition hover:bg-gray-100
                sm:gap-2 sm:px-5 sm:py-3 sm:text-sm
              "
            >
              <ArrowLeft size={16} className="sm:h-[18px] sm:w-[18px]" />
              <span>Home</span>
            </Link>
          </div>

          {/* ================= PROFILE CARD ================= */}
          <div className="overflow-hidden rounded-xl bg-white shadow-[0_15px_50px_rgba(0,0,0,0.07)] sm:rounded-2xl">
            {/* ================= COVER ================= */}
            <div className="h-[130px] bg-[#1b1f21] sm:h-[160px] md:h-48">
              <div className="flex h-full items-center justify-center">
                <h2 className="text-xl tracking-[5px] text-white sm:text-2xl sm:tracking-[7px] md:text-3xl md:tracking-[8px]">
                  LUXEWEAR
                </h2>
              </div>
            </div>

            {/* ================= CONTENT ================= */}
            <div className="px-4 pb-7 sm:px-6 sm:pb-9 md:px-8 md:pb-10">
              {/* ================= AVATAR + EDIT ================= */}
              <div
                className="
                  -mt-10 mb-5
                  flex items-end justify-between
                  gap-3
                  sm:-mt-12 sm:mb-6
                  md:-mt-16
                "
              >
                {/* Avatar */}
                <div
                  className="
                    flex h-20 w-20 shrink-0
                    items-center justify-center
                    overflow-hidden rounded-full
                    border-[3px] border-white
                    bg-gray-200 shadow-md
                    sm:h-24 sm:w-24 sm:border-4
                    md:h-32 md:w-32
                  "
                >
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <User
                      size={38}
                      className="text-gray-500 sm:h-12 sm:w-12 md:h-[55px] md:w-[55px]"
                    />
                  )}
                </div>

                {/* Edit Button */}
                <button
                  onClick={openModalHandler}
                  className="
                    flex shrink-0 items-center gap-1.5
                    rounded-md bg-[#1b1f21]
                    px-3 py-2.5
                    text-xs font-medium text-white
                    transition hover:bg-[#303538]
                    sm:gap-2 sm:px-5 sm:py-3 sm:text-sm
                    cursor-pointer
                  "
                >
                  <Edit size={15} className="sm:h-[17px] sm:w-[17px]" />
                  <span>Edit Profile</span>
                </button>
              </div>

              {/* ================= NAME ================= */}
              <div className="mb-6 sm:mb-7 md:mb-8">
                <h2 className="break-words text-2xl font-semibold text-[#17191b] sm:text-3xl">
                  {profileUser.displayName || "User"}
                </h2>

                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Welcome to your LUXEWEAR profile
                </p>
              </div>

              {/* ================= INFORMATION ================= */}
              <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 md:gap-5">
                {/* Full Name */}
                <div className="rounded-xl border border-gray-200 p-4 sm:p-5">
                  <div className="mb-2.5 flex items-center gap-3 sm:mb-3">
                    <div className="rounded-lg bg-gray-100 p-2">
                      <User size={17} className="sm:h-[19px] sm:w-[19px]" />
                    </div>

                    <span className="text-xs text-gray-500 sm:text-sm">
                      Full Name
                    </span>
                  </div>

                  <p className="break-words text-sm font-medium text-[#17191b] sm:text-base">
                    {profileUser?.displayName || "Not available"}
                  </p>
                </div>

                {/* Email */}
                <div className="rounded-xl border border-gray-200 p-4 sm:p-5">
                  <div className="mb-2.5 flex items-center gap-3 sm:mb-3">
                    <div className="rounded-lg bg-gray-100 p-2">
                      <Mail size={17} className="sm:h-[19px] sm:w-[19px]" />
                    </div>

                    <span className="text-xs text-gray-500 sm:text-sm">
                      Email Address
                    </span>
                  </div>

                  <p className="break-all text-sm font-medium text-[#17191b] sm:text-base">
                    {profileUser.email}
                  </p>
                </div>

                {/* Phone */}
                <div className="rounded-xl border border-gray-200 p-4 sm:p-5">
                  <div className="mb-2.5 flex items-center gap-3 sm:mb-3">
                    <div className="rounded-lg bg-gray-100 p-2">
                      <Phone size={17} className="sm:h-[19px] sm:w-[19px]" />
                    </div>

                    <span className="text-xs text-gray-500 sm:text-sm">
                      Phone
                    </span>
                  </div>

                  <p
                    className={`break-words text-sm font-medium sm:text-base ${
                      profile?.phone ? "text-[#17191b]" : "text-gray-400"
                    }`}
                  >
                    {profile?.phone || "Not added yet"}
                  </p>
                </div>

                {/* Address */}
                <div className="rounded-xl border border-gray-200 p-4 sm:p-5">
                  <div className="mb-2.5 flex items-center gap-3 sm:mb-3">
                    <div className="rounded-lg bg-gray-100 p-2">
                      <MapPin size={17} className="sm:h-[19px] sm:w-[19px]" />
                    </div>

                    <span className="text-xs text-gray-500 sm:text-sm">
                      Address
                    </span>
                  </div>

                  <p
                    className={`break-words text-sm font-medium leading-6 sm:text-base ${
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

      {/* ================= EDIT MODAL ================= */}
      <EditProfileModal
        editOpen={editOpen}
        setEditOpen={setEditOpen}
        editForm={editForm}
        handleImageChange={handleImageChange}
        handleChange={handleChange}
        handleUpdate={handleUpdate}
      />
    </>
  );
};

export default Profile;
