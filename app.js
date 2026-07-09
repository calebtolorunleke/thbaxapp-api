const express = require("express");
const cors = require("cors");

const app = express();

const homeRoute = require("./src/routes/homeRoute");
const apiRoute = require("./src/routes/apiRoutes");
const profileRoute = require("./src/routes/profileRoute");

app.use(cors());

app.use(express.json());

app.get("/", homeRoute);

app.post("/api", apiRoute);

app.get("/api/profile", profileRoute);

module.exports = app;
