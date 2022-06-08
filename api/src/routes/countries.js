const express = require("express");
const router = express.Router();
//queries
const { getCountriesTable, getCountryById } = require("../database/queries");
//handle errors
const { COUNTRY_ERRORS } = require("./errors/countries");

router.get("/countries", (req, res) => {
  try {
    const { name } = req.query; // .../countries?name="something" -> optional
    getCountriesTable(name)
      .then((countries) => {
        if (countries.length === 0)
          return res.status(404).json(COUNTRY_ERRORS.empty());
        return res.status(200).json(countries);
      })
      .catch((e) => res.status(502).json(COUNTRY_ERRORS.db_error(e.detail)));
  } catch (e) {
    return res.status(502).json(COUNTRY_ERRORS.server_error(e.detail));
  }
});

router.get("/countries/:countryId", (req, res) => {
  try {
    const { countryId } = req.params;
    getCountryById(countryId)
      .then((country) => {
        if (!country)
          return res.status(404).json(COUNTRY_ERRORS.invalid_id());
        return res.status(200).json(country);
      })
      .catch((e) => res.status(502).json(COUNTRY_ERRORS.db_error(e.detail)));
  } catch (e) {
    return res.status(502).json(COUNTRY_ERRORS.server_error(e.detail));
  }
});

module.exports = router;
