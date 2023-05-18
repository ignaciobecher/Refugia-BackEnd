const mongoose = require("mongoose");

const PetScheme = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: String,
  },
  health: {
    type: String,
  },
  refugeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "shelters",
  },
});

const petsModel = mongoose.model("pets", PetScheme);
module.exports = { petsModel, PetScheme };
