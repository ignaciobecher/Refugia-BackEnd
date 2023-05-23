const mongoose = require("mongoose");

const PetTestScheme = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  health: {
    type: String,
  },
  animal: {
    type: String,
  },
  size: {
    type: String,
  },
  photo: {
    type: String,
  },
  refugeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "shelters",
  },
});

const petsTestModel = mongoose.model("petsTest", PetTestScheme);
module.exports = { petsTestModel, PetTestScheme };
