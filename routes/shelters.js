const express = require("express");
const router = express.Router();
const { getShelter, uploadPhoto } = require("../controllers/shelters");

router.get("/", getShelter);

module.exports = router;
