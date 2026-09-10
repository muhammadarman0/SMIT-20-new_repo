import React from "react";

const Input = ({ placeholder, head, handler, type }) => {
  const handleChange = (e) => {
    if (type === "file") {
      handler(e.target.files[0], "img");
    } else {
      handler(e.target.value, type);
    }
  };

  return (
    <div className="inputParent">
      <h3 className="text-white font-bold">{head}</h3>

      <input
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
      />
    </div>
  );
};

export default Input;
