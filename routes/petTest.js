const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const { uploadAndCreatePet } = require("../controllers/petsTest");
const { upload } = require("../utils/uploads");

router.post(
  "/uploadAndCreatePet",
  uploadMiddleware.single("photo"),
  uploadAndCreatePet
);

module.exports = router;
