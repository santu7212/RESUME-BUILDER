import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Datebse connected successfully");
    });
    let mongodbURI = process.env.MONGODB_URI;
    const projectName = "resume-builder";
    if (!mongodbURI) {
      throw new Error("ENV variabel not set");
    }
    if (mongodbURI.endsWith("/")) {
      mongodbURI = mongodbURI.slice(0, -1);
    }
    await mongoose.connect(`${mongodbURI}/${projectName}`);
  } catch (error) {
    console.error("Database connection failed", error);
  }
};
export default connectDB;