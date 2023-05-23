const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const { uploadAndCreatePet } = require("../controllers/petsTest");

router.post(
  "/uploadAndCreatePet",
  uploadMiddleware.single("myfile"),
  uploadAndCreatePet
);

module.exports = router;
