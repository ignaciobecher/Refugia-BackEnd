const mongoose = require("mongoose");

const ShelterScheme = new mongoose.Schema(
  {
    userName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    shelterName: {
      type: String,
    },
    telephone: {
      type: Number,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    pets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "pets",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const sheltersModel = mongoose.model("shelters", ShelterScheme);
module.exports = { sheltersModel, ShelterScheme };
