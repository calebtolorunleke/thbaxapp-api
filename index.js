const express = require("express");
const PORT = 4000;

const app = express();

// middleware to parse json
app.use(express.json())

// Home route 
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// API route 
app.get("/api", (req, res) => {
  res.json({ name: "ola ola" });
});

app.listen(PORT, () => {
  console.log(`app running fine on port ${PORT}`);
});
