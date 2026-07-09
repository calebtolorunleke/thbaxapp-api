const express = require("express");

const app = express();

const homeRoute = require("./src/routes/homeRoute");
const apiRoute = require("./src/routes/apiRoutes");

app.use(express.json());

app.get("/", homeRoute);

app.post("/api", apiRoute);

module.exports = app;
