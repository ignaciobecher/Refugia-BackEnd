const mongoose = require("mongoose");

const PetScheme = new mongoose.Schema({
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
  description: {
    type: String,
  },
  shelterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "shelters",
  },
});

const petsModel = mongoose.model("pets", PetScheme);
module.exports = { petsModel, PetScheme };
