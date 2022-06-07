const express = require("express");
const router = express.Router();
//routes
const countries = require("./countries.js");
const activities = require("./activities.js");

router.use([countries, activities]);
router.get("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

module.exports = router;
