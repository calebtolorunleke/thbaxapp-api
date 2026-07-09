const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello word!");
});

app.get("/api", (req, res) => {
  res.json({
    name: "solo",
  });
});

module.exports = app;
