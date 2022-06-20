export const CONTINENTS = [
  "africa",
  "americas",
  "antarctic",
  "asia",
  "europe",
  "oceania",
].sort();
export const ORDERS = ["name", "population"].sort();
export const SEASONS = ["any", "autumn", "winter", "spring", "summer"].sort();

export const INITIAL_FORM = {
  name: "",
  duration: "",
  difficulty: "",
  season: "any",
  selectedCountries: [],
};

export const INITIAL_FORM_ERRORS = {
  name: "",
  duration: "",
  difficulty: "",
  season: "",
  selectedCountries: "",
};
