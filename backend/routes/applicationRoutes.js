import express from "express";
import {applyJob, getMyApplications, getApplicantForJob, updateApplicationStatus} from "../controller/applicationController.js";
import { protect } from "../middleware/authMiddleware.js"; 
import { authorize } from "../middleware/authorize.js";
const Router = express.Router();

Router.post("/apply",protect , applyJob);
Router.get("/my", protect, getMyApplications);
Router.get("/getApplications", protect, authorize("recruiter") , getApplicantForJob );
Router.patch('/my', protect, authorize("recruiter"), updateApplicationStatus);

export default Router;
