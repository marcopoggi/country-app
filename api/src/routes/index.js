const express = require("express");
const router = express.Router();
//routes
const countries = require("./countries.js");
const activities = require("./activities.js");

router.use([countries, activities]);

//default not found
router.get("*", (req, res) => {
  res.status(404).json({ error: "Resource not found or non-existent." });
});

module.exports = router;
