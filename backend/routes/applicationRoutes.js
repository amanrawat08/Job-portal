import express from "express";
import {applyJob, getMyApplications, getApplicantForJob, updateApplicationStatus} from "../controller/applicationController.js";
import { protect } from "../middleware/authMiddleware.js"; 
import { authorize } from "../middleware/authorize.js";
const Router = express.Router();

Router.post("/apply",protect , authorize("jobseeker") , applyJob);
Router.get("/my", protect,authorize("jobseeker") , getMyApplications);
Router.get("/getApplications/:id", protect, authorize("recruiter") , getApplicantForJob );
Router.patch('/updateApplicantDetails/:id', protect, authorize("recruiter"), updateApplicationStatus);

export default Router;
