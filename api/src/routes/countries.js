const express = require("express");
const router = express.Router();
//queries
const { getCountriesTable, getCountryById } = require("../database/queries");

router.get("/countries", (req, res) => {
  try {
    const { name } = req.query; // .../countries?name="something" -> optional
    getCountriesTable(name)
      .then((countries) => {
        if (countries.length === 0)
          return res.status(404).json({
            error: `there are no countries with a name similar to [${name}]`,
          });
        return res.status(200).json(countries);
      })
      .catch((e) => res.status(502).json({ error: e.message }));
  } catch (e) {
    return res.status(502).json({ error: "Server internal error." });
  }
});

//detail
router.get("/countries/:countryId", (req, res) => {
  try {
    const { countryId } = req.params;
    getCountryById(countryId)
      .then((country) => {
        if (!country)
          return res.status(404).json({
            error: `[${countryId}] is not a valid country identifier.`,
          });
        return res.status(200).json(country);
      })
      .catch((e) => res.status(502).json({ error: e.message }));
  } catch (e) {
    return res.status(502).json({ error: "Server error: internal error." });
  }
});

module.exports = router;
