const express = require("express");
const router = express.Router();
const { uploadAndCreatePet } = require("../controllers/pets");
const uploadMiddleware = require("../utils/handleStorage");

router.post("/upload", uploadMiddleware.single("photo"), uploadAndCreatePet);

module.exports = router;
