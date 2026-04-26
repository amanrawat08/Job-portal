import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => ({
        folder: "job_portal/resumes",
        resource_type: "image",   // ✅ REQUIRED FOR PDF VIEW
        public_id: file.originalname.replace(/\.pdf$/i, ""),
        format: "pdf",
        type: "upload", // important,
        access_mode: "public"
    }),
    
});

 

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF allowed"), false);
    }
  }
});