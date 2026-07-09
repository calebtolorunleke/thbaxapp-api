const homeController = (req, res) => {
  res.status(200).send("Hello word!");
};

module.exports = { homeController };
