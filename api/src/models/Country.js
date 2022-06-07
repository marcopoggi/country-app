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
      validate: {
        notEmpty: true,
      },
    },
    flag_image: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isUrl: {
          msg: "The image must be a url.",
        },
      },
    },
    continent: {
      type: DataTypes.STRING(15),
      allowNull: false,
      validate: {
        notNull: { msg: "A null Continent is not allowed." },
      },
    },
    capital: {
      type: DataTypes.STRING(60),
      allowNull: false,
      validate: {
        notNull: { msg: "A null Capital is not allowed." },
      },
    },
    subregion: {
      type: DataTypes.STRING(30),
    },
    area: {
      type: DataTypes.REAL,
      validate: {
        isNumeric: {
          msg: "The surface only accepts numbers.",
        },
        min: {
          args: [0],
          msg: "The surface of the country must be positive.",
        },
      },
    },
    population: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          msg: "The population only accepts integers.",
        },
        min: {
          args: [0],
          msg: "The population of the country must be positive.",
        },
      },
    },
  },
  //options
  {
    timestamps: false,
  }
);

module.exports = { Country };
