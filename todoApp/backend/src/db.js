const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 45000,
  })
  .then(() => console.log("MongoDB connected Yayyy!"))
  .catch((err) => console.error("MongoDB connection error:", err));
