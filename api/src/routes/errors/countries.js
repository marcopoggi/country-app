const COUNTRY_ERRORS = {
  empty: () => {
    return {
      error: "The country/countries were not found.",
      detail:
        "The country/countries were not found: Query parameter is invalid or there are no countries with that name.",
    };
  },
  invalid_id: () => {
    return {
      error: "Country not found.",
      detail: "Country not found: id nonexistent.",
    };
  },
  db_error: (detail) => {
    return {
      error: "Something went wrong when trying to get the country/countries.",
      detail,
    };
  },
  server_error: (detail) => {
    return {
      error: "Something went wrong (Server interal error)",
      detail,
    };
  },
};

module.exports = { COUNTRY_ERRORS };
