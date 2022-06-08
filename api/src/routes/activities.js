const express = require("express");
const router = express.Router();
//model
const { Activity } = require("../database/models/Activity");

router.post("/activities", (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;
  Activity.create({ name, difficulty, duration, season })
    .then((newActivity) => {
      res.status(200).send(newActivity.dataValues);
    })
    .catch((e) => {
      res.status(400).send({ error: e?.errors[0]?.message || e.message });
    });
});

module.exports = router;
