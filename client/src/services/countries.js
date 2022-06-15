const API_URL = "http://localhost:3001";

async function getAllCountries() {
  try {
    const response = await fetch(`${API_URL}/countries`);
    const data = await response.json();
    return { response: data };
  } catch (e) {
    return { response: { error: "Error when trying to get the countries" } };
  }
}

async function getCountryDetail(nameOrId) {
  try {
    const response = await fetch(`${API_URL}/countries/${nameOrId}`);
    const data = await response.json();
    return { response: data };
  } catch (e) {
    return { response: { error: "Error when trying to get the detail" } };
  }
}

export { getAllCountries, getCountryDetail };
