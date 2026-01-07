import express from "express";
import applyJob from "../controller/applicationController.js";

const Router = express.Router();

Router.post("/apply", applyJob);

export default Router;
