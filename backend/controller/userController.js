import User from "../model/User.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
  try {
    const { role, password, email, name, company } = req.body;

    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    if (!password || !email || !name || !role) {
      return res.status(400).json({
        status: false,
        message: "Name, email, password and role are required",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        status: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ JUST READ URL FROM req.file
    let resumeUrl = "";
    let resumePublicId = "";

    if (role === "jobseeker" && req.file) {
      resumeUrl = req.file.path;       // Cloudinary URL
      resumePublicId = req.file.filename; // public_id
    }

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      company: role === "recruiter" ? company : "",
      resume: resumeUrl,
      resumePublicId,
      profileCompleted: false,
    });

    return res.status(201).json({
      message: "User created successfully",
      user,
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;

    // Invalid input
    if (!email || !password) {
      return res.status(400).send({
        staus: "Failed",
        message: "Email, password are required",
      });
    }

    // find user
    const [user] = await User.find({ email }).select("+password");
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }


    //check password; 
    const isMatch = await bcrypt.compare(password, user.password);


    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }


    // success login;
    return res.status(200).send({
      message: "Login successful",
      token: generateToken(user._id),
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        company: user.company,
        contact: user.contact || "",
        resume: user.resume || "",
        skills: user.skills || []
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const updateUserData = async (req, res) => {


  try {


    const { name, contact, company, id, skills } = req.body;



    console.log(req.file);





    if (!name || !contact) {
      res.status(400).json({
        status: false,
        message: "Input all the Feilds with valid data"
      })
    }

    const userupdate = {
      name,
      contact: Number(contact),
      company,
      skills,
    };

    if (req.file) {
      userupdate.resume = req.file.path; // Cloudinary or local path
    }
     

    const user = await User.findByIdAndUpdate(
      id, userupdate, {
      new: true,
      runValidators: true,
    })



    console.log(user);
    

    if (!user) {
      res.status(401).json({
        status: false,
        message: "No Such user Found"
      })
    }





    res.status(200).json({
      status: true,
      user,
      message: "successfully "
    })
  } catch (error) {
    console.log("error");
    res.status(500).json({
      status: false,
      message: "Internal server error"
    })

  }
}


