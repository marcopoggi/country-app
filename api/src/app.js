const express = require("express");
const morgan = process.env.mode === "dev" ? require("morgan") : null;
const routes = require("./routes/index");
const server = express();
const cors = require("cors");
const { OPTIONS } = require("./config/cors");
//database & relations
require("./database/db.js");
require("./database/relations.js");

server.name = "pi-country-api";
server.use(cors(OPTIONS));
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));
if (process.env.mode === "dev") server.use(morgan("dev"));

server.use("/", routes);

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
