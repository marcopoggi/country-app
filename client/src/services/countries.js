const API_URL = "http://localhost:3001";

async function getAllCountries() {
  try {
    const response = await fetch(`${API_URL}/countries`);
    const data = await response.json();
    if (data?.error) throw Error(data.error);
    return { response: data };
  } catch (e) {
    return { response: null, error: true, message: e.message };
  }
}

export { getAllCountries };
