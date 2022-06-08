//models
const { Activity } = require("./models/Activity");
const { Country } = require("./models/Country");

//relations-ships N:M
Country.belongsToMany(Activity, {
  through: "country_activities",
  foreignKey: "country_id",
  timestamps: false,
});
Activity.belongsToMany(Country, {
  through: "country_activities",
  foreignKey: "activity_id",
  timestamps: false,
});
