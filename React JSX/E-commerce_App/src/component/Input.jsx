import React from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

const Input = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  showPassword,
  setShowPassword,
}) => {
  const isPassword = type === "password";

  return (
    <div className="mb-7">
      <label className="mb-2.5 block text-[16px] font-semibold text-[#17191b]">
        {label}
      </label>

      <div className="flex h-[60px] items-center rounded-md border border-[#d4d9df] px-[18px] transition focus-within:border-[#222] focus-within:ring-1 focus-within:ring-[#222]">
        
        {isPassword ? (
          <Lock size={20} className="shrink-0 text-[#50565d]" />
        ) : (
          <Mail size={20} className="shrink-0 text-[#50565d]" />
        )}

        <input
          name={name}
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="h-full w-full border-none px-[15px] text-[16px] outline-none placeholder:text-[#a0a5ab]"
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="flex cursor-pointer items-center text-[#50565d]"
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;