const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  updateShelter,
  getShelters,
  getSingleShelter,
} = require("../controllers/shelters");

//Rutas para shelter
//localhost:3000/shelters/register:
router.post("/register", registerUser);

//localhost:3000/shelters/login:
router.post("/login", loginUser);

//localhost:3000/shelters/update/:id
router.put("/update/:id", updateShelter);

//localhost:3000/shelters
router.get("/", getShelters);

//localhost:3000/shelters/:id
router.get("/:id", getSingleShelter);

module.exports = router;
