const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/todos", authMiddleware, async (req, res) => {
  try {
    const { title, description, priority, dueDate } = req.body;
    const todo = new Todo({ userId: req.userId, title, description, priority, dueDate });
    await todo.save();
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/todos", authMiddleware, async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.userId });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/todos/:id", authMiddleware, async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id, userId: req.userId });
    if (!todo) return res.status(404).json({ error: "Todo not found" });
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/todos/:id", authMiddleware, async (req, res) => {
  try {
    const { title, description, completed, priority, dueDate } = req.body;
    const todo = await Todo.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      { title, description, completed, priority, dueDate },
      { new: true }
    );
    if (!todo) return res.status(404).json({ error: "Todo not found" });
    res.json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/todos/:id", authMiddleware, async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    if (!todo) return res.status(404).json({ error: "Todo not found" });
    res.json({ message: "Todo deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
