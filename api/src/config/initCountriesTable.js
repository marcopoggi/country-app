const { getAllCountries } = require("../services/countries");
const { Country } = require("../database/models/Country");

async function initCountriesTable() {
  try {
    const currentCountries = await Country.findAll();
    //avoid request to the api.
    if (currentCountries.length > 0 && currentCountries.length <= 250)
      return console.log("TABLE 'countries': Prepared.");

    const countriesToCreate = await getAllCountries();
    await Promise.all(
      countriesToCreate.map(
        (country) =>
          Country.findOrCreate({
            where: { id: country.id },
            defaults: { ...country },
          }) //for safe.
      )
    );
    console.log("TABLE 'countries': All countries has been loaded / Prepared.");
  } catch (e) {
    throw new Error(`initializing table "countries" -> ${e.message}`);
  }
}

module.exports = { initCountriesTable };
