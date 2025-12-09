const express = require("express");
const router = express.Router();
const Food = require("../models/food");


router.post("/foods", async (req, res) => {
  try {
    const { name, price, description, category } = req.body;
    const food = new Food({ name, price, description, category });
    await food.save();
    res.status(201).json(food);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/foods", async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get("/foods/:id", async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) return res.status(404).json({ error: "Food not found" });
    res.json(food);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/foods/:id", async (req, res) => {
  try {
    const { name, price, description, category } = req.body;
    const food = await Food.findByIdAndUpdate(
      req.params.id,
      { name, price, description, category },
      { new: true }
    );
    if (!food) return res.status(404).json({ error: "Food not found" });
    res.json(food);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.delete("/foods/:id", async (req, res) => {
  try {
    const food = await Food.findByIdAndDelete(req.params.id);
    if (!food) return res.status(404).json({ error: "Food not found" });
    res.json({ message: "Food deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
