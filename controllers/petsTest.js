const PUBLIC_URL = process.env.PUBLIC_URL;
const { petsTestModel } = require("../models/petsTest");
const { handleHttpError } = require("../utils/handleHTTPError");
const _ = require("lodash");

// //Subir foto de la mascota
// const uploadPhoto = async (req, res) => {
//   const { body, file } = req;
//   console.log(file);
//   const fileData = {
//     filename: file.filename,
//     url: `${PUBLIC_URL}/${file.filename}`,
//   };

//   const data = await petsTestModel.create(fileData);
//   res.send({ file });
// };

// //Crear mascota
// const createPet = async (req, res) => {
//   try {
//     const { body } = req;
//     const pet = await petsTestModel.create(body);
//     res.send(pet);
//   } catch (error) {
//     handleHttpError(res, "ERROR_CREATE_PET");
//   }
// };

const uploadAndCreatePet = async (req, res) => {
  try {
    const { body, file } = req;
    console.log(file);
    const fileData = {
      filename: file.filename,
      url: `${PUBLIC_URL}/${file.filename}`,
    };

    const petData = _.merge(body, fileData);

    const pet = await petsTestModel.create(petData);
    res.send(pet);
  } catch (error) {
    handleHttpError(res, "ERROR_UPLOAD_AND_CREATE_PET");
  }
};

module.exports = { uploadAndCreatePet };
