//models
const { Activity } = require("./models/Activity");
const { Country } = require("./models/Country");

//relations-ships N:M
Country.belongsToMany(Activity, {
  through: "CountryActivities",
  foreignKey: "Country_id",
  timestamps: false,
});
Activity.belongsToMany(Country, {
  through: "CountryActivities",
  foreignKey: "Activity_id",
  timestamps: false,
});
