const PUBLIC_URL = process.env.PUBLIC_URL;
const { petsModel } = require("../models/pets");
const { handleHttpError } = require("../utils/handleHTTPError");
const _ = require("lodash");

const uploadAndCreatePet = async (req, res) => {
  try {
    const { body } = req;
    if (req.file) {
      body.photo = req.file.path;
    }

    const pet = await petsModel.create(body);
    res.send(pet);
  } catch (error) {
    handleHttpError(res, "ERROR_UPLOAD_AND_CREATE_PET");
  }
};

module.exports = { uploadAndCreatePet };
