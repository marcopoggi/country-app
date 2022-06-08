const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");

const Country = sequelize.define(
  "Country",
  {
    id: {
      type: DataTypes.CHAR(3),
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "A country must contain a name.",
        },
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
      defaultValue: "No Subregion.",
    },
    area: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
      validate: {
        isNumeric: {
          msg: "The surface only accepts numbers.",
        },
        min: {
          args: [0],
          msg: "The surface of the country must be positive.",
        },
      },
      set(value) {
        this.setDataValue("area", Number(value.toFixed(2)));
      },
    },
    population: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
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
