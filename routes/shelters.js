const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  createShelter,
} = require("../controllers/shelters");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/update/:id", createShelter);

module.exports = router;
