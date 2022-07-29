require("dotenv").config();
const server = require("./src/app.js");
const { sequelize } = require("./src/database/db.js"); //instance of Sequelize
const { initCountriesTable } = require("./src/config/initCountriesTable.js");
const { PORT } = process.env;

// Syncing all the models at once.
sequelize
  .sync({ force: false })
  .then(async () => {
    try {
      await sequelize.authenticate();
      console.log("Connected Database.");
      //load countries if the country table is empty.
      await initCountriesTable();
      server.listen(PORT, () => {
        console.log("Server: Listening at 3001"); // eslint-disable-line no-console
      });
    } catch (e) {
      throw new Error(e.message);
    }
  })
  .catch((e) => {
    throw new Error("Failed to sync database: " + e.message);
  });
