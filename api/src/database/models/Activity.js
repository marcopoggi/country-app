const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");

const Activity = sequelize.define(
  "activity",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(30),
      unique: true,
      validate: {
        notEmpty: {
          msg: "Invalid activity name.",
        },
        isString(value) {
          if (typeof value !== "string")
            throw new Error("The activity name must be a string.");
        },
      },
      set(value) {
        this.setDataValue("name", value.toLowerCase());
      },
    },
    difficulty: {
      //1 - 5
      type: DataTypes.INTEGER,
      defaultValue: 1,
      validate: {
        isInt: {
          msg: "Difficulty must be an integer.",
        },
        min: {
          args: [1],
          msg: "The minimum difficulty should not be less than 1.",
        },
        max: {
          args: [5],
          msg: "The maximum difficulty must not be greater than 5.",
        },
      },
    },
    duration: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        isInt: {
          msg: "Duration must be an integer.",
        },
        min: {
          args: [0],
          msg: "The duration must be greater than 0.",
        },
      },
    },
    season: {
      type: DataTypes.ENUM("winter", "autumn", "spring", "summer", "any"),
      defaultValue: "any",
      validate: {
        isAlpha: {
          msg: "Stations must be text.",
        },
        isIn: {
          args: [["winter", "autumn", "spring", "summer", "any"]],
          msg: "Invalid Season.",
        },
      },
      set(value) {
        this.setDataValue("season", value.toLowerCase());
      },
    },
  },
  //options
  {
    timestamps: false,
  }
);

module.exports = { Activity };
