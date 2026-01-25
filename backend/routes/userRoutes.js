import express from "express";
import { registerUser, loginUser} from "../controller/userController.js";
import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";
import { uploadResume } from "../controller/resumeController.js";


const Router = express.Router();

Router.post('/login', loginUser);
Router.post('/register', registerUser);

// example protected route
Router.get("/me", protect, (req,res)=>{
    res.json(req.user);
})

Router.post("/upload-resume", protect, upload.single("resume"), uploadResume);

export default Router;