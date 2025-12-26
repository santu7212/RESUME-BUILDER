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
    const token = generateToken(user._id);

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

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Enter all details" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json("User with this email does not exist!! Register first");
    }
    const isMatchPassword = await user.comparePassword(password);
    if (!isMatchPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = generateToken(user._id);
    user.password = undefined;
    return res
      .status(201)
      .json({ success: true, message: "Login successfull", token, user });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

const getUser = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    user.password = undefined;
    return res.status(200).json({ user });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
export { registerUser, loginUser,getUser };
