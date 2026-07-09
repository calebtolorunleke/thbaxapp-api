const apiController = (req, res) => {
  res.status(200);

  res.json({ name: "ola" });
};

module.exports = { apiController };
