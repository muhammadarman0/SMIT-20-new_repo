import React from "react";
import { Mail, Lock, Eye, EyeOff, MapPin } from "lucide-react";

const Input = ({
  label,
  type,
  name,
  placeholder,
  value,
  id,
  handler,
  showPassword,
  setShowPassword,
}) => {
  return (
    <div className="mb-7">
      <label className="mb-2.5 block text-[16px] font-semibold text-[#17191b]">
        {label}
      </label>

      <div className="flex h-[60px] items-center rounded-md border border-[#d4d9df] px-[18px] transition focus-within:border-[#222] focus-within:ring-1 focus-within:ring-[#222]">
        <MapPin size={19} className="mr-3 mt-1 shrink-0 text-[#68717d]" />
        <textarea
          className="w-full resize-none bg-transparent text-[15px] outline-none placeholder:text-[#a0a5ab]"
          name={name}
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={(e) => handler(id, e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default Input;
