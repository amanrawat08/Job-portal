import User from "../model/User.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
  try {
    const { resume, role, password, email, name } = req.body;

    // 1. Validate required fields
    if (!password || !email || !name || !role) {
      return res.status(400).send({
        staus: "Fail",
        message: "Name, email, password and role are required",
      });
    }

    // 2. Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send({
        staus: "Fail",
        message: "User already exists",
      });
    }

    //3 Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create User
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      resume: resume || null,
      profileCompleted: false,
    });
    // Send Response
    return res.status(201).send({ 
      message: "User created successfully",
      token: generateToken(user._id),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    return res.status(500).send({
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
        message: "Name, email, password and role are required",
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
    const isMatch = await bcrypt.compare(password, user.password) 
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }
     

    // success login;
    return res.status(200).send({ 
      message: "Login successful",
      token:generateToken(user._id),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};


