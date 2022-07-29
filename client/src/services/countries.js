const API_URL = process.env.REACT_APP_API_URL;

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

async function setActivity(activity) {
  try {
    const response = await fetch(`${API_URL}/activities`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...activity,
        countries: activity.selectedCountries,
      }),
    });
    const data = await response.json();
    return { response: data };
  } catch (e) {
    return {
      response: { error: "Error creating activity, please try again later" },
    };
  }
}

export { getAllCountries, getCountryDetail, setActivity };
