import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://danibhaialt:IPx53nek8kDHrkNz@cluster0.qsnrjir.mongodb.net/");
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
