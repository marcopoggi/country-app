const BASE_URL = "https://restcountries.com/v3.1";
const axios = require("axios");

async function getAllCountries() {
  try {
    const response = await axios.get(`${BASE_URL}/all`);
    let countries = response.data.map((country) => {
      return {
        id: country.cca3.toLowerCase(),
        name: country.name.common.toLowerCase(),
        flag_image: country.flags.svg,
        continent: country.region.toLowerCase(),
        capital: country.capital
          ? country.capital[0].toLowerCase()
          : "no capital",
        subregion: country.subregion
          ? country.subregion.toLowerCase()
          : "no subregion",
        area: country.area >= 0 ? country.area : 0,
        population: country.population >= 0 ? country.population : 0,
      };
    });
    return countries;
  } catch (e) {
    throw new Error(
      `A problem occurred while trying to get the data from the API: ${e.message}`
    );
  }
}

module.exports = { getAllCountries };
