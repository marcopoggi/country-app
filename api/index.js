const server = require("./src/app.js");
const { sequelize } = require("./src/database/db.js"); //instance of Sequelize
const { initCountries } = require("./src/config/initCountries.js");

// Syncing all the models at once.
sequelize.sync({ force: false }).then(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected Database.");
    //load countries if the country table is empty.
    await initCountries();
    server.listen(3001, () => {
      console.log("Server: Listening at 3001"); // eslint-disable-line no-console
    });
  } catch (e) {
    throw new Error(e.message);
  }
});
