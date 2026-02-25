import express from "express";
import { authorize } from "../middleware/authorize.js";
import { protect } from "../middleware/authMiddleware.js";
import { createJob, getAllJobs, getJobById, updateJob, deleteJob, filterJob, getJobsRelatedToRecuiter, getTrendingCategories, fetchJobById, getFilteredjobs } from "../controller/jobController.js";
const Router = express.Router();
 
Router.post("/createJob" ,protect,  authorize("recruiter"), createJob);
Router.get("/getPostedJobs",protect,authorize("recruiter") , getJobsRelatedToRecuiter);
Router.delete("/delete/:id", protect ,authorize("recruiter") , deleteJob);
Router.get("/getFilteredJobs" , getFilteredjobs);
Router.get("/jobCategories", getTrendingCategories);
Router.get("/:id", getJobById);
//Router.get("/", getAllJobs);
Router.put("/:id", protect,  authorize("recruiter"), updateJob);
Router.get("/search", filterJob);
Router.get("/fetchJob/:id", fetchJobById);
Router.get('/', getAllJobs);


export default Router;
