//form controller
export function nameValidator(name) {
  name = name.trim();
  //evitar numeros -> '2'.
  if (name.length === 0 || !isNaN(Number(name)))
    return { valid: false, value: "Invalid Name Activity" };
  if (name.length < 3)
    return {
      valid: false,
      value: "The activity name must contain 3 characters or more",
    };
  return { valid: true, value: name };
}

//duration,difficulty,etc.
export function numberValidator(value, min, max, msg, field) {
  value = Math.floor(Number(value));
  if (typeof value !== "number" || isNaN(value))
    return { valid: false, value: `${field} must be a number` };
  if (value < min || value > max) return { valid: false, value: msg };
  return { valid: true, value };
}

export function seasonValidator(season, SEASONS) {
  if (!SEASONS.includes(season))
    return { valid: false, value: "Invalid Season" };
  return { valid: true, value: season };
}

export function countriesValidator(
  country,
  selected,
  selectedCountries,
  countries
) {
  if (countries.findIndex(({ name }) => name === country) === -1)
    return { valid: false, value: "Invalid Country" };

  if (selected && selectedCountries.findIndex((c) => c === country) === -1)
    return {
      valid: true,
      value: [...selectedCountries, country],
    };

  if (!selected) {
    let countriesUpdate = selectedCountries.filter((c) => c !== country);
    return {
      valid: countriesUpdate.length > 0 ? true : false,
      value: countriesUpdate,
      msg: "Select at least one country",
    };
  }

  return {
    valid: false,
    value: "The country is already selected",
  };
}

export function allValidate({
  name,
  duration,
  difficulty,
  season,
  selectedCountries,
}) {
  return (
    name.length >= 3 &&
    typeof duration === "number" &&
    typeof difficulty === "number" &&
    season.length > 0 &&
    selectedCountries.length > 0
  );
}
