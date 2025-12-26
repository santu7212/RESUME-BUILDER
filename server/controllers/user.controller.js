import User from "../models/user.model.js";


const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ success: true, message: "Missing fields" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: true, message: "User with this email already exist" });
    }

    
  } catch (error) {}
};
