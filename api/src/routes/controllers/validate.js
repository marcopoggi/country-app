function validateCountries(countries) {
  if (!Array.isArray(countries))
    throw new Error("'countries' must be an array");
  if (countries.length === 0)
    throw new Error(
      "'countries' must contain countries to add the activity to."
    );
  return countries.map((country) => country.toLowerCase());
}

function validateActivity({ name, difficulty, duration, season }) {
  if (typeof name !== "string") throw new Error("'name' must be a string.");
  if (typeof season !== "string") throw new Error("'season' must be a string.");
  if (typeof difficulty !== "number")
    throw new Error("'difficulty' must be an integer / number(1 to 5).");
  if (typeof duration !== "number")
    throw new Error("'duration' must be an integer / number(minutes).");

  return {
    name: name.toLowerCase(),
    season: season.toLowerCase(),
    difficulty: difficulty.toFixed(),
    duration: duration.toFixed(),
  };
}

module.exports = { validateCountries, validateActivity };
