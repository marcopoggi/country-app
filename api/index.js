const server = require("./src/app.js");
const { sequelize } = require("./src/db.js"); //instance of Sequelize
//models
const { Activity } = require("./src/models/Activity");
const { Country } = require("./src/models/Country");

//relations-ships N:M
Country.belongsToMany(Activity, {
  through: "CountryActivities",
  timestamps: false,
});
Activity.belongsToMany(Country, {
  through: "CountryActivities",
  timestamps: false,
});

// Syncing all the models at once.
sequelize.sync({ force: true }).then(() => {
  try {
    sequelize.authenticate().then(() => {
      console.log("Connected Database.");
      server.listen(3001, () => {
        console.log("%s listening at 3001"); // eslint-disable-line no-console
      });
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
