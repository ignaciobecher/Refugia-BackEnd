const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const {
  uploadPhoto,
  createPet,
  getPets,
  updatePhoto,
} = require("../controllers/pets");

//localhost:3000/pets/uploadPhoto
router.post("/uploadPhoto", uploadMiddleware.single("myfile"), uploadPhoto);

//localhost:3000/pets/createPet
router.post("/createPet", createPet);

//localhost:3000/pets/pets
router.get("/", getPets);

module.exports = router;
