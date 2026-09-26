import React from "react";

const Button = ({ title, icon }) => {
  return (
    <button className="flex h-[67px] w-full cursor-pointer items-center justify-center gap-[18px] rounded-md bg-[#1b1f21] text-[17px] text-white transition hover:-translate-y-[1px] hover:bg-[#303538]">
      {title}
    </button>
  );
};

export default Button;
