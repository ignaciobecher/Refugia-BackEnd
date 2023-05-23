const PUBLIC_URL = process.env.PUBLIC_URL;
const { petsModel } = require("../models/pets");
const { handleHttpError } = require("../utils/handleHTTPError");
const _ = require("lodash");

//Subir foto de la mascota
const uploadPhoto = async (req, res) => {
  const { body, file } = req;
  console.log(file);
  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`,
  };

  const data = await petsModel.create(fileData);
  res.send({ file });
};

//Crear mascota
const createPet = async (req, res) => {
  try {
    const { body } = req;
    const pet = await petsModel.create(body);
    res.send(pet);
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_PET");
  }
};

//Ver mascotas
const getPets = async (req, res) => {
  try {
    const pets = await petsModel.find();
    const filteredPets = pets.map((pet) => {
      const filteredPet = _.omit(pet.toObject(), ["__v", "_id"]);
      return filteredPet;
    });
    res.send(filteredPets);
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_GET_PET");
  }
};

module.exports = { uploadPhoto, createPet, getPets };
