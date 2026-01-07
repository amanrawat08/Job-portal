//job applications
import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
    {
        applicant:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        job:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Job",
            required:true
        },
        resume:{
            type:String,
            required:true
        },
        status:{
            type:String,
            enum:["applied","shortlisted", "rejected", "hired"],
            default:"applied"
        }
    },
    {timestamp:true}
)

export default mongoose.model("Application", applicationSchema);

/*
Recruiter posts job
Candidate applies
Application stores the relation */