/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { sequelize } = require("../../src/database/db");
const { Country } = require("../../src/database/models/Country");

const agent = session(app);
const country = {
  name: "Argentina",
};

describe("Country routes", () => {
  before(() =>
    sequelize.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Country.sync({ force: true }).then(() =>
      Country.findOrCreate({
        where: {
          id: "arg",
          name: "argentina",
          flag_image: "http://www.images.com/argentina.png",
          continent: "america",
          capital: "buenos aires",
        },
      })
    )
  );
  describe("GET /countries", () => {
    it("should get 200", () => agent.get("/countries").expect(200));
  });
});
