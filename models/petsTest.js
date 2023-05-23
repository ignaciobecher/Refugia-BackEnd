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
    data: Buffer, // Campo de tipo Buffer para almacenar los datos binarios del archivo
    contentType: String, // Tipo de contenido del archivo (ej. image/jpeg, image/png, etc.)
  },
  refugeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "shelters",
  },
});

const petsTestModel = mongoose.model("petsTest", PetTestScheme);
module.exports = { petsTestModel, PetTestScheme };
