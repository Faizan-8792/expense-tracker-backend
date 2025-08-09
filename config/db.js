const mongoose = require("mongoose");

let dbConnected = false;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    dbConnected = true;
    console.log("✅ MongoDB connected");
  } catch (error) {
    dbConnected = false;
    console.error("❌ MongoDB connection error:", error.message);
  }
};

module.exports = { connectDB, dbConnected: () => dbConnected };
