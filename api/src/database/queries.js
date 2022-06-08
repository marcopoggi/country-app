const { Country } = require("./models/Country");
const { Op } = require("sequelize");

//returns all countries || by partial name(optional)
async function getCountriesTable(name) {
  if (name) name = name.toLowerCase();

  const allCountries = name
    ? await Country.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
        },
      })
    : await Country.findAll();

  const countries = allCountries.map(({ name, flag_image, continent }) => {
    return {
      name,
      flag_image,
      continent,
    };
  });
  return countries;
}

//*Falta devolver las ACTIVIDADES ASOCIADAS */
async function getCountryById(id) {
  if (id) id = id.toLowerCase();

  const country = await Country.findByPk(id);
  return country;
}

module.exports = { getCountriesTable, getCountryById };
