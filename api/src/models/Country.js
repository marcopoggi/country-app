const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");

const Country = sequelize.define(
  "Country",
  {
    id: {
      type: DataTypes.CHAR(3),
      unique: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    flag_image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING(20),
    },
    area: {
      type: DataTypes.REAL,
    },
    population: {
      type: DataTypes.INTEGER,
    },
  },
  //options
  {
    timestamps: false,
  }
);

module.exports = { Country };
