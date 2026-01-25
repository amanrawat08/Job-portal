import Job from "../model/Job";

export const createJob = async (req, res) => {
  try {
    const {
      title,
      responsibilities,
      company,
      requirements,
      description,
      jobType,
      workMode,
      experienceLevel,
      salaryMin,
      salaryMax,
      location,
      skills,
      deadline,
      applicationsCount,
      status,
      isActive,
    } = req.body;

    //is all field are ok
    if (
      !title ||
      !company ||
      !description ||
      !requirements ||
      !jobType ||
      !workMode ||
      !experienceLevel ||
      !location ||
      !skills ||
      !responsibilities
    ) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided",
      });
    }

    //create job
    const job = await Job.create({
      title,
      company,
      description,
      requirements,
      responsibilities,
      jobType,
      workMode,
      experienceLevel,
      salaryMin,
      salaryMax,
      location,
      skills,
      deadline,
      postedBy: req.user.id, // from JWT middleware
    });

    res.status(201).json({
      success: true,
      message: "Job created successfully",
      job,
    });
  } catch (err) {
    console.log(`Error in createJob ${err.message}`);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
 
export const getJobById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Job ID is required",
      });
    }

    const existJob = await Job.findById(id);
    if (!existJob) {
      return res.status(404).send({
        status: "Fail",
        message: "Job not found in database",
      });
    }

    return res.status(200).send({
      status: "sucsess",
      existJob,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch jobs",
      error: error.message,
    });
  }
};
export const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Job ID is required",
      });
    }

    //check in db;
    const job = await Job.findById(id);
    if (!job) {
      return res.status(404).send({
        message: "Job is not present in DB",
      });
    }

    //authoriczation;
    if (job.postedBy.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "You are not allowed to update this job",
      });
    }

    //update job
    const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).send({
      success: true,
      message: "Job updated successfully",
      job: updatedJob,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch jobs",
      error: error.message,
    });
  }
};
export const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Job ID is required",
      });
    }

    //check present
    const job = await Job.findById(id);
    if (!job) {
      return res.status(404).send({
        message: "Job is not present in DB",
      });
    }

    if (job.postedBy.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "You are not allowed to update this job",
      });
    }

    //delete
    job.isActive = false;
    job.status = "Closed";
    await job.save();
    res.status(200).send({
      success: true,
      message: "Job delete successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const filterJob = async (req, res) => {
  try {
    const {
      keyword,
      location,
      jobType,
      workMode,
      experienceLevel,
      salaryMin,
      salaryMax,
      page = 1,
      limit = 10,
    } = req.query;

    const query = { isActive: true, status: "Open" };

    //keyword search;
    if (keyword) {
      query.$or = [
        { title: { $regex: keyword, $options: "i" } },
        { company: { $regex: keyword, $options: "i" } },
        { skills: { $in: [new RegExp(keyword, "i")] } },
      ];
    }

    if(location) query.location = location;
    if(jobType) query.jobType = jobType;
    if(workMode) query.workMode = workMode;
    if(experienceLevel) query.experienceLevel = experienceLevel;

    if(salaryMax || salaryMin){
        query.minSalary = {};
        if(salaryMin) query.salaryMin.$gte = Number(salaryMin) 
        if(salaryMax) query.salaryMax.$lte = Number(salaryMax) 
    }


    const skip = (page - 1 ) * limit;

    const jobs = await Job.find(query)
    .sort({createAt : -1}).skip(skip).limit(Number(limit));

    const total = await Job.countDocuments(query);

    res.status(200).json({
        success: true,
        total,
        page:Number(page),
        pages: Math.ceil(total/limit),
        jobs        
    })

  } catch (error) {
    return res.status(500).send({
      status: "Fail",
      message: "Filter not Applied",
    });
  }
};


export const getAllJobs = async (req, res) => {
  try {
    return res.status(200).json(res.paginatedResult);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch jobs",
      error: error.message,
    });
  }
};

