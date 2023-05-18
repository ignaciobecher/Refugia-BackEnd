const { sheltersModel } = require("../models/shelter");
const PUBLIC_URL = process.env.PUBLIC_URL;

const getShelter = (req, res) => {
  res.send("Shelter route");
};

module.exports = { getShelter };
