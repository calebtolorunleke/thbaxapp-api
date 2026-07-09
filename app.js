const express = require("express");

const app = express();

const homeRoute = require("./src/routes/homeRoute");

app.use(express.json());

app.get("/", homeRoute);

app.get("/api", (req, res) => {
  res.json({
    name: "solo",
  });
});

module.exports = app;
