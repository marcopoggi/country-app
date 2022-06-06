const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");

const Activity = sequelize.define(
  "Activity",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Enter a name for the activity",
        },
      },
    },
    difficulty: {
      //1 a 5
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    season: {
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: {
        isIn: [["Invierno", "Otoño", "Primavera", "Verano"]],
      },
    },
  },
  //options
  {
    timestamps: false,
  }
);

module.exports = { Activity };
