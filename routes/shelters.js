const express = require("express");
const router = express.Router();
const { sheltersModel } = require("../models/shelter");
const { encrypt, compare } = require("../utils/handlePassword");

module.exports = router;
