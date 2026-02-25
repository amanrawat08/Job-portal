import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: (req, file) => {
    const originalName = file.originalname;
    const extension = originalName.split(".").pop();
    const fileNameWithoutExt = originalName.replace(/\.[^/.]+$/, "");

    return {
      folder: "job_portal/resumes",
      resource_type: "raw",
      public_id: fileNameWithoutExt, // 👈 keeps filename
      format: extension,             // 👈 forces .pdf / .docx
    };
  },
});

export const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
});