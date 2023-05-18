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
    socialNetworks: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const sheltersModel = mongoose.model("shelters", ShelterScheme);
module.exports = { sheltersModel, ShelterScheme };
