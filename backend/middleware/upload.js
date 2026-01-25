import multer from "multer";
import {CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";


const storage = new CloudinaryStorage({
    cloudinary,
    params:{
        folder:"job_portal/resumes",
        allowed_formats: ["pdf", "doc", "docx"],
        resource_type: "raw",
    }
})

const upload = multer({
    storage,
    limits:{
        fileSize:5 * 1024 * 1024, // 5MB
    }
})

export default upload;
