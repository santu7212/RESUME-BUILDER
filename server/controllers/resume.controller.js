import Resume from "../models/resume.model.js";

const createResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { title } = req.body;

    // create new resume
    const newResume = await Resume.create({ userId, title });
    return res
      .status(201)
      .json({ message: "Resume created successfully", resume: newResume });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const deleteResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeID } = req.params;

    // delete resume
    await Resume.findOneAndDelete({ userId, _id: resumeID });
    return res.status(200).json({ message: "Resume deleted successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const getResumeById = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeID } = req.params;

    // get resume
    const resume = await Resume.findOne({ userId, _id: resumeID });
    if (!resume) {
      return res.status(400).json({ message: "Resume not found" });
    }
    resume._V = undefined;
    resume.createdAt = undefined;
    resume.updatedAt = undefined;
    return res.status(200).json({ resume });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export { createResume, deleteResume,getResumeById };
