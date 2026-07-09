const express = require("express");

const app = express();

const homeRoute = require("./src/routes/homeRoute");
const apiRoute = require("./src/routes/apiRoutes");
const profileRoute = require("./src/routes/profileRoute");

app.use(express.json());

app.get("/", homeRoute);

app.post("/api", apiRoute);

app.get("/profile", profileRoute);

module.exports = app;
