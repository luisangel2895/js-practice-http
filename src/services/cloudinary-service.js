const cloudinaryPreset = "preset_cloudinary";
const cloudinaryUrl = "https://api.cloudinary.com/v1_1/dfer2dfdq/upload";

export const uploadImage = async (image) => {
  // we need to create a result of form in html by js
  // fo that we use FormData
  const formData = new FormData();
  formData.append("upload_preset", cloudinaryPreset);
  formData.append("file", image);

  try {
    const resp = await fetch(cloudinaryUrl, {
      method: "POST",
      body: formData,
    });

    if (resp.ok) {
      const cloudinaryResponse = await resp.json();
      return cloudinaryResponse.secure_url;
    } else {
      throw await resp.json();
    }
  } catch (error) {
    throw error;
  }
};
