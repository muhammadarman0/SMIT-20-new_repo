import React from "react";
import { MapPin, Phone, X } from "lucide-react";
import Input from './Input'

const EditProfileModal = ({
  editOpen,
  setEditOpen,
  editForm,
  handleChange,
  handleUpdate,
}) => {
  if (!editOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-5 backdrop-blur-[2px]">
      <div className="relative w-full max-w-[520px] rounded-2xl bg-white p-8 shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setEditOpen(false)}
          className="absolute right-5 top-5 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-gray-200 hover:text-black"
        >
          <X size={19} />
        </button>

        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-xs font-medium tracking-[3px] text-gray-400">
            LUXEWEAR
          </p>

          <h2 className="text-2xl font-semibold text-[#17191b]">
            Edit Profile
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Update your contact information below.
          </p>
        </div>

        <form onSubmit={handleUpdate}>
          {/* Phone */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-semibold text-[#17191b]">
              Phone Number
            </label>

            <div className="flex h-[56px] items-center rounded-md border border-[#d4d9df] px-4 transition focus-within:border-black focus-within:ring-1 focus-within:ring-black">
              <Phone size={19} className="mr-3 shrink-0 text-[#68717d]" />

              <Input
                type="tel"
                name="phone"
                id="phone"
                value={editForm.phone}
               handler={handleChange}
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          {/* Address */}
          <div className="mb-8">
            <label className="mb-2 block text-sm font-semibold text-[#17191b]">
              Address
            </label>

            <div className="flex items-start rounded-md border border-[#d4d9df] px-4 py-3 transition focus-within:border-black focus-within:ring-1 focus-within:ring-black">
              <MapPin size={19} className="mr-3 mt-1 shrink-0 text-[#68717d]" />

              <textarea
                name="address"
                id="address"
                value={editForm.address}
                onChange={handleChange}
                placeholder="Enter your address"
                rows={3}
                className="w-full resize-none bg-transparent text-[15px] outline-none placeholder:text-[#a0a5ab]"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setEditOpen(false)}
              className="h-[52px] flex-1 cursor-pointer rounded-md border border-[#d4d9df] bg-white text-[15px] font-medium text-[#17191b] transition hover:bg-[#f5f5f5]"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="h-[52px] flex-1 cursor-pointer rounded-md bg-[#1b1f21] text-[15px] font-medium text-white transition hover:bg-[#303538]"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
