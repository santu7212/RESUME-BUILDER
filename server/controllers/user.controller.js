import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  return token;
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ success: true, message: "Missing fields" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: true, message: "User with this email already exist" });
    }

    const user = await User.create({
      name,
      email,
      password,
    });
    const token =generateToken(user._id)

    user.password = undefined;

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      user,
    });
  } catch (error) {
    console.error("Register error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export default registerUser;
