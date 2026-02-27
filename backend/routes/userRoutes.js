import express from "express";
import { registerUser, loginUser, updateUserData } from "../controller/userController.js";
import { protect } from "../middleware/authMiddleware.js";
import {upload} from "../middleware/upload.js";
import { uploadResume } from "../controller/resumeController.js";
import {authorize} from "../middleware/authorize.js"
const Router = express.Router();

Router.post("/login", loginUser);
Router.post("/register",upload.single("resume"), registerUser);
Router.put("/updateUser",protect, authorize("recruiter", "jobseeker"), upload.single("resume"),updateUserData);
Router.post("/upload-resume", protect, upload.single("resume"), uploadResume);

// example protected route
Router.get("/me", protect, (req, res) => {
  res.json(req.user);
});


export default Router;
