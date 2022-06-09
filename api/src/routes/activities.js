const express = require("express");
const router = express.Router();
//controllers
const {
  validateCountries,
  validateActivity,
} = require("./controllers/validate");
//queries
const { setActivity, getMultipleCountries } = require("../database/queries");

router.post("/activities", async (req, res) => {
  try {
    const { countries } = req.body;
    const activityCountries = validateCountries(countries);
    const { name, difficulty, duration, season } = validateActivity(req.body);

    const countriesFromDB = await getMultipleCountries(activityCountries);
    const response = await setActivity({ name, difficulty, duration, season });

    //set values ​​in table CountryActivities(intermediate).
    countriesFromDB.forEach(async (country) => {
      const { act } = response;
      await act.addCountry(country);
    });

    response.created
      ? res.status(201).json(response)
      : res.status(200).json(response);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
