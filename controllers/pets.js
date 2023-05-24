const PUBLIC_URL = process.env.PUBLIC_URL;
const { petsModel } = require("../models/pets");
const { sheltersModel } = require("../models/shelter");
const { handleHttpError } = require("../utils/handleHTTPError");
const _ = require("lodash");

const uploadAndCreatePet = async (req, res) => {
  try {
    const { body } = req;
    if (req.file) {
      body.photo = req.file.path;
    }

    const shelterId = req.params.shelterId;
    const shelter = await sheltersModel.findById(shelterId);
    if (!shelter) {
      return res.status(404).send("Refugio no encontrado");
    }

    const pet = await petsModel.create({ ...body, shelterId: shelter._id });
    shelter.pets.push(pet._id);
    await shelter.save();
    res.send(pet);
  } catch (error) {
    handleHttpError(res, "ERROR_UPLOAD_AND_CREATE_PET");
  }
};

module.exports = { uploadAndCreatePet };
