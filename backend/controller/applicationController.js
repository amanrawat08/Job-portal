import Application from '../model/Application.js'
import Job from "../model/Job.js";

 const applyJob = async (req, res) => {
  try {
    const { jobId, resume, userId } = req.body;
    //const userId = req.user.id;

    //1) Validate for job and resume if not exist
    if (!jobId || !resume) {
      return res.status(400).send({
        status: "Fail",
        message: "Job and Resume is required",
      });
    }

    //2) Check if really job exist in DB;
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(400).send({
        status: "Fail",
        message: "Job is not Found",
      });
    }

    //3) Check if allready applied
    const isDupApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
      resume,
    });

    if (isDupApplication) {
      res.status(400).send({
        status: "Fail",
        message: "Already Applied for the Job",
      });
    }

    //4) Create Application
    const application = await Application.create({
      job: jobId,
      applicant: userId,
      resume,
    });

    res.status(200).send({
      status: "Successfull",
      message: "Job Applied Successfully",
      application,
    });
    
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }

};


export default applyJob;