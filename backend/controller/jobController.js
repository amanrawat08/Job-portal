import CategorySchema from "../model/CategorySchema.js";
import Job from "../model/Job.js";
import User from "../model/User.js";

export const createJob = async (req, res) => {
  try {


    // console.log(req.body);

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
      category
    } = req.body;

    //is all field are ok
    // console.log(title,company,description, requirements,jobType,workMode, experienceLevel,location, skills, responsibilities);

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
      !responsibilities ||
      !category
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
      category,
      deadline,
      postedBy: req.user._id, // from JWT middleware
    });
    res.status(201).json({
      success: true,
      message: "Job created successfully",
      job,
    });
    // console.log(requirements);

  } catch (err) {
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

    //  console.log(req.body , id);


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
    // job.isActive = false;
    // job.status = "Closed";
    // await job.save(); 
    const isDeleteSuccess = await Job.findByIdAndDelete(id);
    if (isDeleteSuccess) {
      res.status(200).send({
        success: true,
        message: "Job delete successfully",
      });
    } else {
      res.status(404).send({
        success: true,
        message: "Job not found",
      });

    }
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

    if (location) query.location = location;
    if (jobType) query.jobType = jobType;
    if (workMode) query.workMode = workMode;
    if (experienceLevel) query.experienceLevel = experienceLevel;

    if (salaryMax || salaryMin) {
      query.minSalary = {};
      if (salaryMin) query.salaryMin.$gte = Number(salaryMin)
      if (salaryMax) query.salaryMax.$lte = Number(salaryMax)
    }


    const skip = (page - 1) * limit;

    const jobs = await Job.find(query)
      .sort({ createAt: -1 }).skip(skip).limit(Number(limit));

    const total = await Job.countDocuments(query);

    res.status(200).json({
      success: true,
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
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
    const jobs = await Job.find();

    return res.status(200).json({
      status: true,
      message: "Fetch Successfully",
      jobs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch jobs",
      error: error.message,
    });
  }
};

export const getJobsRelatedToRecuiter = async (req, res) => {
  try {
    const filteredjobs = await Job.find({ postedBy: req.user.id });

    if (!filteredjobs) {
      return res.status(202).json({
        status: true,
        message: "Sorry Cant find any Job Posted by you"
      })
    }

    return res.status(200).json({
      status: true,
      filteredjobs,
      message: "Full Filled"
    })
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "internal Filled"
    })
  }


};



export const getTrendingCategories = async (req, res) => {
  try {
    const categories = await Job.aggregate([
      {
        $match: {
          status: "Open",
          isActive: true,
        },
      },
      {
        $group: {
          _id: "$title",               // category name
          jobsAvailable: { $sum: 1 },  // count
          jobs: {
            $push: {
              _id: "$_id",
              title: "$title",
              company: "$company",
              location: "$location",
              salaryMin: "$salaryMin",
              salaryMax: "$salaryMax",
              jobType: "$jobType",
              workMode: "$workMode",
              experienceLevel: "$experienceLevel",
              deadline: "$deadline",
              skills: "$skills",
              createdAt: "$createdAt",
            },
          },
        },
      },
      {
        $sort: { jobsAvailable: -1 },
      },
      {
        $limit: 8,
      },
    ]);


    res.status(200).json({
      success: true,
      categories
    });


  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "internal Filled"
    })
  }
}



export const fetchJobById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({
        success: false,
        message: "Something went wrong."
      });
    }

    const job = await Job.findById(id);
    if (!job) {
      res.status(404).json({
        success: false,
        message: "Job Not Found"
      });
    }

    const rData = await User.findById(job.postedBy.toString());




    res.status(200).json({
      success: true,
      job: {
        job,
        rData: {
          name: rData.name,
          email: rData.email,
        }
      },
      message: "Successfully fetch job details"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
}



export const getFilteredjobs = async (req, res) => {
  try {
    const { category, jobType, salaryMax, salaryMin } = req.query;

    const filter = {};


    if (category) {
      const categoryDoc = await CategorySchema.findOne({ slug: category });
      filter.category = categoryDoc.id;
    }
    if (jobType) filter.jobType = jobType;

    // console.log(salaryMax , salaryMin);
    // 💰 SALARY FILTER (ALL CASES HANDLED)
    if (salaryMin && !salaryMax) {
      // Case 1: only min
      filter.salaryMax = { $lte: Number(salaryMin) };
    }

    if (!salaryMin && salaryMax) {
      // Case 2: only max
      filter.salaryMin = { $gte: Number(salaryMax) };
    }

    if (salaryMin && salaryMax) {
      // Case 3: min + max
      filter.$and = [
        { salaryMax: { $gte: Number(salaryMin) } },
        { salaryMin: { $lte: Number(salaryMax) } },
      ];
    }



    const jobs = await Job.find(filter);

    // console.log(jobs.length);

    if (jobs.length <= 0 || !jobs) {

      return res.status(200).json({
        status: false,
        jobs,
        message: "No Jobs Found",
      })
    }



    res.status(200).json({
      status: true,
      jobs,
      message: "Jobs",
    })
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Internal Server Error",
    })
  }
}

//get job by categ id;

export const getJobByCategoryID = async (req, res) => {
  const { id } = req.params;
  //console.log(id);

  try {
    if (!id) {
      return res.status(400).json({
        status: "fail",
        message: "Id Not Found"
      });
    };


    const jobs = await Job.find({ category: id });
    console.log(jobs);


    res.status(200).json({
      jobs,
      size: jobs.length,
      message: "Fetced Data"
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal server error"
    })
  }
}

export const getCategoryWithJobs = async (req, res) => {
//  console.log("dsfv");
  
  try {
    
    const categoryIds = await Job.distinct("category");

    
    const categories = await CategorySchema.find({
      _id: { $in: categoryIds }
    });
    console.log(categories);
    res.status(200).json({
      categories,
      message: "Category Fetch Successfully"
    })
    
  } catch (error) {
    res.status(500).json({
      message: "Internal server error"
    })
  }
}