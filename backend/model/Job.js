//job postings
import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    requirements: {
      type: [String],
      required: true,
    },
    responsibilies: {
      type: [String],
    },
    jobType: {
      type: String,
      enum: ["Full-time", "Part-time", "Internship", "Contract"],
      required: true,
    },
    workMode: {
      type: String,
      enum: ["Remote", "OnSite", "Hybrid"],
      required: true,
    },
    experienceLevel: {
      type: String,
      enum: ["Fresher", "Junior", "Mid", "Senior"],
      required: true,
    },
    salaryMin: {
      type: Number,
    },

    salaryMax: {
      type: Number,
    },
    location: { 
      city: String,
      country: String,
    },
    skills: {
      type: [String],
      index:true,
    },
    deadline: {
      type: Date,
    },
    applicationsCount: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["Open", "Closed"],
      default: "Open",
    },
    postedBy: {
      //connects job → recruiter
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", //"User" creates relationship
      required: true,
    },
    isActive:{
        type:Boolean,
        default:true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Job", JobSchema);

/*
One recruiter → many jobs
*/
