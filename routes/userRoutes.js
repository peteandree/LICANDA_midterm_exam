const express = require("express");
const User = require("../models/user");

const router = express.Router();

// Fetch all users
router.get("/users", async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
});

module.exports = router;
