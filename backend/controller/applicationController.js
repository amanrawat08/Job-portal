import Application from "../model/Application.js";
import Job from "../model/Job.js";

export const applyJob = async (req, res) => {
  try {
     
    
    const jobId = req.body.jobid;
    const userId = req.body.user._id;
 //   console.log(req.body);
    
     
    
    //const userId = req.user.id;

    //1) Validate for job and resume if not exist
    if (!jobId) {
      return res.status(400).send({
        status: "Fail",
        message: "Job is required",
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
    });

    if (isDupApplication) {
      return res.status(400).json({
        status: "Fail",
        message: "Already Applied for the Job",
      });
    }
     
    //4) Create Application
    const application = await Application.create({
      job: jobId,
      applicant: userId,
      
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

export const getMyApplications = async (req, res) => {
  try {
    const userId = req.user.id;

    const applications = await Application.find({ applicant: userId })
      .populate("job", "title company location jobType ")
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      count: applications.length,
      applications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch applications",
      error: error.message,
    });
  }
};

export const getApplicantForJob = async (req, res) => {
  try {
   // console.log(req);
    
  // console.log(req.params.id);
    const { id:jobId } = req.params;
    
    const recruiterId = req.user.id;
   // console.log(recruiterId);
    
    //find job exist in db
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(401).send({
        message: "Job not found",
      });
    }
      
     
    // check is recuiter is asking for the data;
    if (recruiterId !== job.postedBy.toString()) {
      return res.status(403).json({
        success: false,
        message: "You are not allowed to view applicants for this job",
      });
    }
 
    
   

    // fetch the data
    const applicants = await Application.find({ job: jobId })
      .populate("applicant", "name email resume")
      .populate("job", "title")
      .sort({ createdAt: -1 });
 

      console.log(applicants);
      
       
      


    return res.status(200).json({
      success: true,
      count: applicants.length,
      applicants,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch applicants",
      error: error.message,
    });
  }
};

export const updateApplicationStatus = async (req, res) => {
  try {
    const { id:applicationId } = req.params;
    const { status ,userId} = req.body;
    
    
    
    
    
    
    //if it includes status which is called....
    const allowedStatus = ["applied", "shortlisted", "rejected", "hired"];
    if (!allowedStatus.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status value",
      });
    }
    
    
    //find the application;
    const application = await Application.findOne({job:applicationId, applicant:userId});
     console.log(applicationId, userId);
     
    
    if (!application) {
      return res.status(400).json({
        success: false,
        message: "Invalid status value",
      });
    }

     
    //if authorized user only
    {
      /*if (application.job.postedBy.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to update this application",
      });
    }
 */
    }
    console.log(application);
    
    application.status = status;
    await application.save();
    console.log(application);
    res.status(200).json({
      success: true,
      message: "Application status updated",
      application,
    });
  } catch (error) {
    return res.status(500).send({
      status: "Fail",
      message: error,
    });
  }
};
