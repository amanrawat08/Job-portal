import User from "../model/User.js";
export const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume file is required",
      });
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.resume = req.file.path; // Cloudinary URL
    await user.save();

    res.status(200).json({
      success: true,
      message: "Resume uploaded successfully",
      resumeUrl: req.file.path,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Resume upload failed",
      error: error.message,
    });
  }
};
