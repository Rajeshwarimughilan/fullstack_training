const express = require("express");
const app = express();
require("dotenv").config();
require("./src/db");
const foodRoutes = require("./routes/foodRoutes");

const PORT = process.env.PORT || 5002;

// Middleware
app.use(express.json());

// Routes
app.use("/api", foodRoutes);

// Basic route
app.get("/", (req, res) => {
  res.send("Food App Backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
