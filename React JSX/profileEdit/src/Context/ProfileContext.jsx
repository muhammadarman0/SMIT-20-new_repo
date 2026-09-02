import React, { createContext, useState } from "react";

const profileContext = createContext();

const ProfileProvider = ({ children }) => {
  
  const [profile, setProfile] = useState(() => {
    const savedProfile = localStorage.getItem("profile");
 
    return savedProfile
      ? JSON.parse(savedProfile)
      : {
          firstName: "",
          lastName: "",
          username: "",
          email: "",
          phone: "",
          location: "",
          bio: "",
        };
  });

  const updateProfile = (newData) => {
    setProfile(newData);
    localStorage.setItem("profile", JSON.stringify(newData));
  };

  return (
    <profileContext.Provider value={[profile, updateProfile]}>
      {children}
    </profileContext.Provider>
  );
};

export { ProfileProvider };
export default profileContext;