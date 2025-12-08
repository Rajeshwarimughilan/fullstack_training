const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;

mongoose.connect(uri);
const connect = mongoose.connection;
connect.once("open", () => {
    console.log("MongoDB database connection established successfully");
}) 