import React from "react";
import { User, Camera, X } from "lucide-react";
import Input from "./Input";
import Address from "./Address";

const EditProfileModal = ({
  editOpen,
  setEditOpen,
  editForm,
  handleChange,
  handleImageChange,
  handleUpdate,
}) => {
  if (!editOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 px-3 py-4 backdrop-blur-[2px] sm:px-5 sm:py-6">
      {/* Modal */}
      <div
        className="
          relative my-auto w-full max-w-[520px]
          rounded-xl bg-white p-5 shadow-2xl
          sm:rounded-2xl sm:p-6
          md:p-8
        "
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setEditOpen(false)}
          className="
            absolute right-3 top-3
            flex h-8 w-8 cursor-pointer
            items-center justify-center
            rounded-full bg-gray-100
            text-gray-500 transition
            hover:bg-gray-200 hover:text-black
            sm:right-5 sm:top-5
            sm:h-9 sm:w-9
          "
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="mb-6 pr-8 sm:mb-7">
          <p className="mb-1.5 text-[10px] font-medium tracking-[2.5px] text-gray-400 sm:text-xs sm:tracking-[3px]">
            LUXEWEAR
          </p>

          <h2 className="text-xl font-semibold text-[#17191b] sm:text-2xl">
            Edit Profile
          </h2>

          <p className="mt-1.5 text-xs leading-5 text-gray-500 sm:text-sm sm:leading-6">
            Update your personal information below.
          </p>
        </div>

        {/* Profile Image */}
        <div className="mb-6 flex items-center gap-4 sm:mb-7 sm:gap-5">
          {/* Image */}
          <div className="relative shrink-0">
            <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-gray-100 sm:h-24 sm:w-24">
              {editForm.imagePreview ? (
                <img
                  src={editForm.imagePreview}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              ) : (
                <User
                  size={32}
                  className="text-gray-400 sm:h-[38px] sm:w-[38px]"
                />
              )}
            </div>

            {/* Camera */}
            <label
              htmlFor="profileImage"
              className="
                absolute bottom-0 right-0
                flex h-7 w-7 cursor-pointer
                items-center justify-center
                rounded-full bg-[#1b1f21]
                text-white shadow-md
                transition hover:bg-[#303538]
                sm:h-8 sm:w-8
              "
            >
              <Camera size={14} />
            </label>

            <input
              id="profileImage"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>

          {/* Image Text */}
          <div>
            <h3 className="text-sm font-semibold text-[#17191b] sm:text-base">
              Profile Picture
            </h3>

            <p className="mt-1 text-xs leading-5 text-gray-500">
              Choose a new profile picture
            </p>
          </div>
        </div>

        {/* Full Name */}
        <div className="mb-4 sm:mb-5">
          <Input
            label="Full Name"
            type="text"
            name="fullName"
            id="fullName"
            value={editForm.fullName}
            handler={handleChange}
            placeholder="Enter your full name"
          />
        </div>

        {/* Phone */}
        <div className="mb-4 sm:mb-5">
          <Input
            label="Phone"
            type="tel"
            name="phone"
            id="phone"
            value={editForm.phone}
            handler={handleChange}
            placeholder="Enter your phone number"
          />
        </div>

        {/* Address */}
        <div className="mb-6 sm:mb-8">
          <Address
            name="address"
            id="address"
            value={editForm.address}
            handler={handleChange}
            placeholder="Enter your current Address"
            type="text"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row">
          {/* Cancel */}
          <button
            type="button"
            onClick={() => setEditOpen(false)}
            className="
              h-12 w-full cursor-pointer
              rounded-md border border-[#d4d9df]
              bg-white text-sm font-medium
              text-[#17191b] transition
              hover:bg-[#f5f5f5]
              sm:h-[52px] sm:flex-1 sm:text-[15px]
            "
          >
            Cancel
          </button>

          {/* Save */}
          <button
            type="button"
            onClick={handleUpdate}
            className="
              h-12 w-full cursor-pointer
              rounded-md bg-[#1b1f21]
              text-sm font-medium text-white
              transition hover:bg-[#303538]
              sm:h-[52px] sm:flex-1 sm:text-[15px]
            "
          >
            {handleUpdate ? "Save changes": "Saving.."}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
