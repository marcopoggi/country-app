const express = require("express");
const router = express.Router();
//model

router.get("/countries", (req, res) => {
  //query name
  res.send("All Countries");
});

router.get("/countries/:countryId", (req, res) => {
  const { countryId } = req.params;
  res.send(`Contry -> ${countryId}`);
});

module.exports = router;
