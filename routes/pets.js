const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const { uploadPhoto } = require("../controllers/pets");

router.post("/", uploadMiddleware.single("myfile"), uploadPhoto);

module.exports = router;
