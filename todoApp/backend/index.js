const express = require("express");
const app = express();
require("dotenv").config();
require("./src/db");
const todoRoutes = require("./routes/todoRoutes");
const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT || 5003;

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api", todoRoutes);

app.get("/", (req, res) => {
  res.send("Todo App Backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
