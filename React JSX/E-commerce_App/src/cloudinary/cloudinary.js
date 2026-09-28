const uploadImageToCloudinary = async (file) => {
  if (!file) {
    throw new Error("Image file is required");
  }

  const formData = new FormData();

  formData.append("file", file);
  formData.append(
    "upload_preset",
    "auth_form",
  );

//   const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/rb4lecgz/image/upload`,
    {
      method: "POST",
      body: formData,
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error?.message || "Image upload failed");
  }

  return data.secure_url;
};

export default uploadImageToCloudinary;
