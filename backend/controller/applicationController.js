import Application from "../model/Application.js";
import Job from "../model/Job.js";

export const applyJob = async (req, res) => {
  try {
    const userId = req.user.id;
    //const userId = req.user.id;

    //1) Validate for job and resume if not exist
    if (!userId) {
      return res.status(400).send({
        status: "Fail",
        message: "Job and Resume is required",
      });
    }

    //2) Check if really job exist in DB;
    const job = await Job.findById(userId);
    if (!job) {
      return res.status(400).send({
        status: "Fail",
        message: "Job is not Found",
      });
    }

    //3) Check if allready applied
    const isDupApplication = await Application.findOne({
      job: userId,
      applicant: userId,
    });

    if (isDupApplication) {
      res.status(400).send({
        status: "Fail",
        message: "Already Applied for the Job",
      });
    }

    //4) Create Application
    const application = await Application.create({
      job: userId,
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

export const getMyApplications = async (req, res) => {
  try {
    const userId = req.user.id;

    const applications = await Application.find({ applicant: userId })
      .populate("job", "title company location jobType")
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
    const { jobId } = req.params;
    const recruiterId = req.user.id;
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

    const applicants = await Job.find({ job: jobId })
      .populate("applicant", "name email resume")
      .sort({ createdAt: -1 });

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
    const { applicationId } = req.params;
    const { status } = req.body;

    //if it includes status which is called....
    //const allowedStatus = ["Applied", "Shortlisted", "Rejected", "Hired"];
    if (!Application.status.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status value",
      });
    }

    //find the application;
    const application = await Application.find(applicationId).populate("job");
    if (!application) {
      return res.status(400).json({
        success: false,
        message: "Invalid status value",
      });
    }

    //if authorized user only
    if (application.job.postedBy.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to update this application",
      });
    }

    application.status = status;
    await application.save();

    res.status(200).json({
      success: true,
      message: "Application status updated",
      application,
    });
  } catch (error) {
    return req.status(500).send({
      status: "Fail",
      message: error.message,
    });
  }
};
