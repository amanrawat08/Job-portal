import express from "express";
import { authorize } from "../middleware/authorize";
import { protect } from "../middleware/authMiddleware";
import { createJob, getAllJobs, getJobById, updateJob, deleteJob, filterJob } from "../controller/jobController";
const Router = express.Router();

Router.post("/", protect ,authorize("recruiter", "admin"), createJob);
//Router.get("/", getAllJobs);
Router.get("/:id", getJobById);
Router.put("/:id", protect,  authorize("recruiter"), updateJob);
Router.delete("/:id", protect ,authorize("recruiter", "admin") , deleteJob);
Router.get("/search", filterJob);
Router.get('/', paginate("Job"), getAllJobs);
export default Router;
